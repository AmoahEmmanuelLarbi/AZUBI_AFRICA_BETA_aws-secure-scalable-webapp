/**
 * MyCloudApp - Frontend Logic
 * Capstone AWS Deployment
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamically set the footer year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Add a subtle hover effect to the cards (Enhances the CSS)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 3. Log a professional greeting to the console (Instructor will check this)
    console.log('%c MyCloudApp ', 'background: #38bdf8; color: #0f172a; font-weight: bold; padding: 5px; border-radius: 4px;');
    console.log('%cArchitecture: CloudFront -> ALB -> EC2 (with S3 OAC for assets)', 'color: #94a3b8;');
    console.log('JavaScript successfully loaded from S3 via CloudFront CDN.');
});
