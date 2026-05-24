CREATE TABLE IF NOT EXISTS quiz_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  mode TEXT NOT NULL,
  language TEXT,
  answers_json TEXT NOT NULL,
  scores_json TEXT NOT NULL,
  top_results_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON quiz_results (created_at);
CREATE INDEX IF NOT EXISTS idx_quiz_results_mode ON quiz_results (mode);
