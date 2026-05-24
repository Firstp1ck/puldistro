# Cloudflare Pages + D1 setup

Puldistro collects quiz submissions only when a visitor clicks **Share anonymous result** on the results page.

## Local development without Cloudflare setup

This repository includes `wrangler.toml` with a local-only D1 binding named `DB`.

Initialize or reset the local D1 schema:

```bash
npx wrangler d1 execute puldistro-quiz-results-local --local --file=migrations/0001_create_quiz_results.sql
```

Run the local Pages server:

```bash
npx wrangler pages dev . --ip 127.0.0.1 --port 8788
```

Open:

```txt
http://127.0.0.1:8788
```

Inspect local submissions:

```bash
npx wrangler d1 execute puldistro-quiz-results-local --local \
  --command "SELECT id, created_at, mode, language, top_results_json FROM quiz_results ORDER BY id DESC LIMIT 10;"
```

Local D1 data lives under `.wrangler/` and is git-ignored.

## Data stored

The Pages Function stores one row per explicit share:

- timestamp
- quiz mode
- UI language
- selected question/answer labels and scoring weights
- final scores
- top recommendation results

Puldistro's code does not store names, emails, cookies, IP addresses, or browser fingerprints with the submission.

## Cloudflare dashboard setup

1. Open **Cloudflare Dashboard → Workers & Pages → D1 SQL Database**.
2. Create a database, for example `puldistro-quiz-results`.
3. Open the database console and run `migrations/0001_create_quiz_results.sql`.
4. Open **Workers & Pages → Pages → puldistro → Settings → Functions → D1 database bindings**.
5. Add a binding:
   - Variable name: `DB`
   - D1 database: `puldistro-quiz-results`
6. Redeploy the Pages project.

The binding name must be exactly `DB` because `functions/api/quiz-result.js` reads `env.DB`.

## Optional Wrangler commands

```bash
# Create the database
npx wrangler d1 create puldistro-quiz-results

# Apply the schema remotely
npx wrangler d1 execute puldistro-quiz-results --remote --file migrations/0001_create_quiz_results.sql
```

For local development, bind the same database name/id with Wrangler or use Cloudflare Pages' local dev settings.

## Query stored submissions

```sql
SELECT id, created_at, mode, language, top_results_json
FROM quiz_results
ORDER BY created_at DESC
LIMIT 20;
```

## Endpoint

The frontend posts to:

```txt
POST /api/quiz-result
```

Cloudflare Pages routes this to:

```txt
functions/api/quiz-result.js
```
