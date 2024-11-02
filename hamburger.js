 const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.header_nav');

    hamburger.addEventListener('click', () => {
        // hamburger.classList.toggle('show');
        navLinks.classList.toggle('show');
    });