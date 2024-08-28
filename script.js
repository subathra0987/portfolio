document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('nav a, .cta-button');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (targetId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields before submitting.');
                e.preventDefault(); // Prevent form submission
            }
        });
    }

    // Project filter
    const filterButtons = document.querySelectorAll('.project-filter button');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            projects.forEach(project => {
                if (category === 'all' || project.classList.contains(category)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});