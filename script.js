// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Dynamic Section Adjustment for Small Screens
function adjustLayout() {
    const sections = document.querySelectorAll('.about-section, .education-section, .interests-section, .projects-section, .contact-section, .project-card');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
        sections.forEach(section => {
            section.style.padding = '0.5rem';
            section.style.margin = '1rem';
        });
    } else {
        sections.forEach(section => {
            section.style.padding = section.classList.contains('project-card') ? '1rem' : '1.5rem';
            section.style.margin = '2rem auto';
        });
    }
}

// Run on load and resize
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);