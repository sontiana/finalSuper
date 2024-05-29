document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const targetSection = document.getElementById(item.dataset.menu);
            sections.forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
        });
    });

    // Hide all sections initially
    sections.forEach(section => section.style.display = 'none');
});


