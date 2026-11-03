# AWS Secure Scalable Web App

Capstone project by BetaGroup, Azubi Africa AWS Cloud Computing and AI programme.
A static website deployed on the AWS Free Tier.

## Architecture (target)
Viewer -> CloudFront (HTTPS) -> Application Load Balancer -> EC2 (web server)
- Static assets in S3
- GitHub Actions for CI/CD
- CloudWatch for monitoring

## Live site
URL to be added once CloudFront is deployed.

## Repository structure
- `app/`: website files (HTML, CSS, JS)
- `docs/`: team documentation

## Workflow
- `feature/...` -> Pull Request -> `develop` -> `main` (final release)
- No direct pushes to `develop` or `main`
- No keys, `.pem` files or account IDs in the repo (it is public)

## Team
Developers, Infrastructure and Documentation teams.