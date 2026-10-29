# Phase 1 Summary: Developers (Oct 28-29)

## Done
- Set up the dev environment (Git, VS Code, Git identity).
- Cloned the repo and worked from `develop`.
- **PR #1:** added `.gitignore` (blocks `*.pem`, `.env`, `.aws/`, `credentials*`, `node_modules/`). Merged into `develop`.
- **PR #2:** added the starter page in `app/` (`index.html`, `css/style.css`, `js/main.js`, with a footer). Merged into `develop`.
- Tested the page locally: styles load and the console shows "Starter page loaded".
- Self-reviewed both PRs with a comment noting what was checked.
- Deleted the merged feature branches.

## Workflow
- `feature/...` branch from `develop` -> PR into `develop` -> review -> merge -> delete the branch.
- No direct pushes to `develop` or `main`.
- One small change = one branch = one PR.
- The repo is public: no keys, `.pem` files or account IDs.

## Notes for the Infrastructure team
- The EC2 placeholder runs Apache, but our stack is Nginx with a `/health` endpoint. Let's agree on one before Phase 2.
- The EC2 page is a placeholder. The Developers' `app/` code replaces it in Phase 2.
- ACM certificate: no custom domain, so it is skipped. CloudFront's default HTTPS URL is used instead.

## Notes for the Documentation team
- README: branching flow (`feature/*` -> `develop` -> `main`), app code lives in `app/`, repo is public.
- Branch protection to be enabled on `main` and `develop`.
- Evidence: screenshots of merged PRs #1 and #2.

## Next (Phase 2, from Oct 30)
- Build the real static site (home, about, contact).
- Add the `/health` endpoint.
- Move images, CSS and JS to the S3 assets bucket.
- Test the site on EC2 using the public URL.