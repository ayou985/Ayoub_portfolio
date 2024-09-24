function revealOnScroll() {
    const reveals = document.querySelectorAll('.section');
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);