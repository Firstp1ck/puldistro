(() => {
  const grid = document.getElementById("questionsGrid");
  const count = document.getElementById("questionsCount");
  const search = document.getElementById("questionSearch");
  const empty = document.getElementById("questionsEmpty");
  const tierNames = { 1: "Simple", 2: "Medium", 3: "Detailed" };

  const t = (key, fallback, params) => window.DistroI18n?.t(key, params, fallback) || fallback;
  const normalize = (value) => String(value || "").toLocaleLowerCase();

  const appendHighlightedText = (element, text, pattern) => {
    const source = String(text || "");
    if (!pattern) {
      element.textContent = source;
      return;
    }

    const sourceLower = normalize(source);
    const patternLower = normalize(pattern);
    let cursor = 0;
    let matchIndex = sourceLower.indexOf(patternLower, cursor);

    while (matchIndex !== -1) {
      if (matchIndex > cursor) element.appendChild(document.createTextNode(source.slice(cursor, matchIndex)));

      const mark = document.createElement("mark");
      mark.textContent = source.slice(matchIndex, matchIndex + pattern.length);
      element.appendChild(mark);

      cursor = matchIndex + pattern.length;
      matchIndex = sourceLower.indexOf(patternLower, cursor);
    }

    if (cursor < source.length) element.appendChild(document.createTextNode(source.slice(cursor)));
  };

  const textElement = (tagName, className, text, pattern) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    appendHighlightedText(element, text, pattern);
    return element;
  };

  const formatWeights = (weights = {}) => {
    const entries = Object.entries(weights);
    if (!entries.length) return t("questions.no_signals", "No scoring signal");
    return entries.map(([key, value]) => `${key} +${value}`).join(", ");
  };

  const getQuestionTags = (question) => {
    const weightTags = question.answers.flatMap((answer) => Object.keys(answer.weights || {}));
    return [...new Set([question.category, tierNames[question.tier] || question.tier, ...weightTags])];
  };

  const getSearchHaystack = (question) => [
    question.text,
    question.hint,
    question.category,
    tierNames[question.tier] || question.tier,
    ...getQuestionTags(question),
    ...question.answers.flatMap((answer) => [answer.label, formatWeights(answer.weights), ...Object.keys(answer.weights || {})]),
  ].join(" ");

  const createAnswer = (answer, answerIndex, pattern) => {
    const item = document.createElement("li");
    item.className = "answer-item";

    const label = textElement("div", "answer-label", `${String.fromCharCode(65 + answerIndex)}. ${answer.label}`, pattern);
    const weights = textElement("div", "answer-signals", formatWeights(answer.weights), pattern);

    item.append(label, weights);
    return item;
  };

  const render = () => {
    const questions = window.PuldistroQuizData?.questions?.() || [];
    const pattern = search?.value.trim() || "";
    const visibleQuestions = pattern
      ? questions.filter((question) => normalize(getSearchHaystack(question)).includes(normalize(pattern)))
      : questions;

    grid.innerHTML = "";
    count.textContent = pattern
      ? t("questions.filtered_count", "{shown} of {total} questions", { shown: visibleQuestions.length, total: questions.length })
      : t("questions.count", "{count} questions", { count: questions.length });

    empty.hidden = visibleQuestions.length > 0;

    visibleQuestions.forEach((question) => {
      const card = document.createElement("article");
      card.className = "qa-card glass";

      const metaText = `${t("questions.question", "Question")} ${question.id} · ${question.category} · ${tierNames[question.tier] || question.tier}`;
      const meta = textElement("div", "qa-meta", metaText, pattern);
      meta.title = `${t("questions.tags", "Tags")}: ${getQuestionTags(question).join(", ")}`;

      const title = textElement("h2", "", question.text, pattern);
      const hint = textElement("p", "hint", question.hint, pattern);

      const answers = document.createElement("ol");
      answers.className = "answer-list";
      question.answers.forEach((answer, index) => answers.appendChild(createAnswer(answer, index, pattern)));

      card.append(meta, title, hint, answers);
      grid.appendChild(card);
    });
  };

  search?.addEventListener("input", render);
  window.DistroI18n?.ready?.then(render).catch(render);
  window.addEventListener("i18n:applied", render);
})();
