AWS Secure, Scalable Web App
Capstone project by Team Beta, Azubi Africa AWS Cloud Computing and AI programme.

This project demonstrates the deployment of a highly available, secure, and scalable static web application on the AWS Free Tier, utilizing a hybrid architecture of EC2 and S3.

🚀 Live Site
https://d2x47aax7g5nka.cloudfront.net
(Note: Enforces HTTPS via CloudFront)

🏗️ Architecture
This project uses a modern, secure AWS architecture designed to offload static assets and protect the compute layer:

User Request: Routes through Amazon CloudFront (CDN) over HTTPS.

Dynamic Content: CloudFront routes HTML requests to an Application Load Balancer (ALB), which distributes traffic to an Auto Scaling Group of Amazon Linux EC2 instances running Apache.

Static Assets: CloudFront routes /assets/* (CSS, JS, Images) directly to an Amazon S3 Bucket using Origin Access Control (OAC) to keep the bucket 100% private.

Automation: The EC2 instances use Launch Templates with User Data scripts to automatically clone this repository on boot (Bootstrapping).

Monitoring: Amazon CloudWatch is configured for CPU and 5xx error alarms, plus 7-day log retention.

📂 Repository Structure
index.html: Main entry point for the web application.

assets/: Contains style.css and script.js, served securely via CloudFront/S3.

docs/: Team documentation and architecture diagrams.

.github/workflows/: CI/CD pipeline for automated deployments.

🛠️ Tech Stack & Services
Compute: EC2 (t2.micro), Auto Scaling Group

Networking & Security: VPC, Application Load Balancer, Security Groups, IAM, ACM

Storage & CDN: Amazon S3, CloudFront (OAC)

Management: GitHub Actions, Amazon CloudWatch, AWS Budgets

🔐 Security Highlights
S3 Block Public Access is enabled. CloudFront OAC is used for private asset delivery.

EC2 Security Groups are strictly locked down to only accept inbound traffic from the ALB Security Group. SSH is restricted to admin IPs.

HTTPS is enforced at the CloudFront edge.

🚀 Deployment (CI/CD)
Deployments are automated via GitHub Actions. When code is merged into the main branch, the pipeline SSHs into the running EC2 instances, pulls the latest code, and restarts the web server

## Workflow
- `feature/...` -> Pull Request -> `develop` -> `main` (final release)
- No direct pushes to `develop` or `main`
- No keys, `.pem` files or account IDs in the repo (it is public)

## Team
Developers, Infrastructure and Documentation teams.
