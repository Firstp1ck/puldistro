# Security Policy

## Scope

Puldistro is a static, client-side website for Linux distribution recommendations, app alternatives, glossary content, and migration guidance.

Security-sensitive areas include:

- The static website source in this repository
- Client-side JavaScript used by the quiz, localization, theme handling, glossary, and app-alternative pages
- Generated localization data in `js/i18n-data.js`
- Published static assets served through Cloudflare Pages

Out of scope:

- Security issues in third-party Linux distributions, apps, documentation, compatibility databases, or external websites linked from Puldistro
- Incorrect recommendations that are not caused by a security issue
- Browser, operating system, Cloudflare, or GitHub platform vulnerabilities outside this repository's control

## Supported Versions

Puldistro does not use versioned release branches yet. Security fixes are provided for the current `main` branch and the currently published website.

| Version / branch | Supported |
| --- | --- |
| `main` | Yes |
| Published Cloudflare Pages site | Yes |
| Forks or older commits | No |

## Reporting a Vulnerability

Please report security issues privately instead of opening a public issue.

Use one of these channels:

- Email: `firstpick1992@proton.me`
- GitHub: contact the maintainer through the repository at `https://github.com/Firstp1ck/puldistro`

When reporting, include as much of the following as possible:

- A short description of the issue
- The affected page, file, or URL
- Steps to reproduce
- Browser and operating system, if relevant
- Impact assessment, for example data exposure, script injection, broken privacy expectations, or unsafe redirect/link behavior
- Proof-of-concept details if available

Do not include private quiz answers, personal documents, credentials, or unrelated sensitive system details unless they are required to demonstrate the issue.

## Response Expectations

The maintainer will try to:

1. Acknowledge the report within 7 days.
2. Confirm whether the issue affects this repository or the published site.
3. Fix accepted vulnerabilities as soon as practical, prioritizing issues that could expose user data, execute unwanted scripts, or mislead users into unsafe external actions.
4. Credit reporters on request, unless they prefer to stay anonymous.

Because this is a small personal project, response times may vary. If a report is declined, the maintainer will explain why when possible.

## Security Notes

Puldistro is designed to be privacy-friendly:

- Quiz answers run in the browser.
- Quiz answers are not intentionally sent to a server by this site.
- The site does not include analytics or tracking scripts in the repository.
- Local storage is used only for interface preferences such as theme and language.

Please report any behavior that contradicts these expectations.
