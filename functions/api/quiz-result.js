const json = (data, init = {}) => new Response(JSON.stringify(data), {
  ...init,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    ...(init.headers || {}),
  },
});

const MAX_BODY_BYTES = 32 * 1024;
const MAX_JSON_CHARS = 24 * 1024;
const VALID_MODES = new Set(["simple", "medium", "detailed"]);
const DEFAULT_READ_LIMIT = 500;
const MAX_READ_LIMIT = 5000;

const clampString = (value, maxLength) => typeof value === "string" ? value.slice(0, maxLength) : null;
const isPlainObject = (value) => value && typeof value === "object" && !Array.isArray(value);

const safeJson = (value) => {
  const serialized = JSON.stringify(value ?? null);
  return serialized.length > MAX_JSON_CHARS ? serialized.slice(0, MAX_JSON_CHARS) : serialized;
};

const sanitizeAnswers = (answers) => {
  if (!Array.isArray(answers)) return [];
  return answers.slice(0, 60).map((answer) => ({
    questionId: Number.isFinite(answer?.questionId) ? answer.questionId : null,
    category: clampString(answer?.category, 80),
    answerIndex: Number.isFinite(answer?.answerIndex) ? answer.answerIndex : null,
    answerLabel: clampString(answer?.answerLabel, 240),
    weights: isPlainObject(answer?.weights) ? answer.weights : {},
  }));
};

const sanitizeScores = (scores) => isPlainObject(scores) ? scores : {};

const sanitizeResults = (results) => {
  if (!Array.isArray(results)) return [];
  return results.slice(0, 10).map((result) => ({
    rank: Number.isFinite(result?.rank) ? result.rank : null,
    distro: clampString(result?.distro, 120),
    interface: clampString(result?.interface, 120),
    matchPercent: Number.isFinite(result?.matchPercent) ? result.matchPercent : null,
  }));
};

const parseStoredJson = (value, fallback) => {
  try {
    return JSON.parse(value ?? "");
  } catch {
    return fallback;
  }
};

const increment = (target, key) => {
  if (!key) return;
  target[key] = (target[key] || 0) + 1;
};

const sortedCounts = (counts) => Object.entries(counts)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

const isLocalHost = (url) => {
  const hostname = new URL(url).hostname;
  return hostname === "127.0.0.1" || hostname === "localhost" || hostname === "::1";
};

const isAuthorizedRead = (request, env) => {
  const configuredToken = env.ADMIN_API_TOKEN;
  if (!configuredToken) return isLocalHost(request.url);

  const authHeader = request.headers.get("authorization") || "";
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const headerToken = request.headers.get("x-admin-token");
  return bearerToken === configuredToken || headerToken === configuredToken;
};

const buildAggregates = (rows) => {
  const byMode = {};
  const byLanguage = {};
  const byDay = {};
  const distroMentions = {};
  const firstChoiceDistros = {};
  const interfaceMentions = {};

  rows.forEach((row) => {
    increment(byMode, row.mode);
    increment(byLanguage, row.language || "unknown");
    increment(byDay, String(row.created_at || "").slice(0, 10));

    const topResults = parseStoredJson(row.top_results_json, []);
    if (Array.isArray(topResults)) {
      topResults.forEach((result, index) => {
        increment(distroMentions, result?.distro);
        increment(interfaceMentions, result?.interface);
        if (index === 0 || result?.rank === 1) increment(firstChoiceDistros, result?.distro);
      });
    }
  });

  return {
    byMode: sortedCounts(byMode),
    byLanguage: sortedCounts(byLanguage),
    byDay: Object.entries(byDay).map(([date, count]) => ({ date, count })).sort((a, b) => a.date.localeCompare(b.date)),
    distroMentions: sortedCounts(distroMentions),
    firstChoiceDistros: sortedCounts(firstChoiceDistros),
    interfaceMentions: sortedCounts(interfaceMentions),
  };
};

export async function onRequestPost({ request, env }) {
  if (!env.DB) {
    return json({ ok: false, error: "D1 binding DB is not configured." }, { status: 500 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Payload too large." }, { status: 413 });
  }

  let payload;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).length > MAX_BODY_BYTES) {
      return json({ ok: false, error: "Payload too large." }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const mode = VALID_MODES.has(payload?.mode) ? payload.mode : null;
  if (!mode) {
    return json({ ok: false, error: "Invalid quiz mode." }, { status: 400 });
  }

  const answers = sanitizeAnswers(payload.answers);
  const scores = sanitizeScores(payload.scores);
  const topResults = sanitizeResults(payload.topResults);
  const language = clampString(payload.language, 12);

  await env.DB.prepare(`
    INSERT INTO quiz_results (
      created_at,
      mode,
      language,
      answers_json,
      scores_json,
      top_results_json
    ) VALUES (?, ?, ?, ?, ?, ?)
  `).bind(
    new Date().toISOString(),
    mode,
    language,
    safeJson(answers),
    safeJson(scores),
    safeJson(topResults),
  ).run();

  return json({ ok: true });
}

export async function onRequestGet({ request, env }) {
  if (!env.DB) {
    return json({ ok: false, error: "D1 binding DB is not configured." }, { status: 500 });
  }

  if (!isAuthorizedRead(request, env)) {
    return json({ ok: false, error: "Unauthorized. Set ADMIN_API_TOKEN and pass it as a Bearer token, or use localhost for local development." }, { status: 401 });
  }

  const url = new URL(request.url);
  const requestedLimit = Number(url.searchParams.get("limit") || DEFAULT_READ_LIMIT);
  const limit = Number.isFinite(requestedLimit)
    ? Math.min(Math.max(Math.trunc(requestedLimit), 1), MAX_READ_LIMIT)
    : DEFAULT_READ_LIMIT;

  const result = await env.DB.prepare(`
    SELECT id, created_at, mode, language, top_results_json
    FROM quiz_results
    ORDER BY created_at DESC
    LIMIT ?
  `).bind(limit).all();

  const rows = (result.results || []).map((row) => ({
    id: row.id,
    created_at: row.created_at,
    mode: row.mode,
    language: row.language,
    topResults: parseStoredJson(row.top_results_json, []),
    top_results_json: row.top_results_json,
  }));

  return json({
    ok: true,
    generatedAt: new Date().toISOString(),
    limit,
    total: rows.length,
    rows: rows.map(({ top_results_json: _topResultsJson, ...row }) => row),
    aggregates: buildAggregates(result.results || []),
  });
}
