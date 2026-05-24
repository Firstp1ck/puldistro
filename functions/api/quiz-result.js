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

export async function onRequestGet() {
  return json({ ok: false, error: "Method not allowed." }, {
    status: 405,
    headers: { allow: "POST" },
  });
}
