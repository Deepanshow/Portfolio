window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Add event listener for project card click to flip and show details
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (event) => {
            // Stop propagation to avoid closing when clicking on the card
            event.stopPropagation();
            document.querySelectorAll('.project-card').forEach(c => {
                c.classList.remove('flip');
                if (c !== card) {
                    c.classList.add('blur-background'); // Add blur to other cards
                } else {
                    c.classList.remove('blur-background'); // Remove blur from clicked card
                }
            });
            card.classList.add('flip');
        });
    });

    // Close the expanded project card when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.remove('flip');
            card.classList.remove('blur-background'); // Remove blur when no card is flipped
        });
    });
});