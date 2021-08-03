const images = document.querySelectorAll('.object__image');

if (images.length) {
    window.addEventListener('scroll', reveal);

    function reveal() {
        images.forEach((image) => {
            const windowHeight = window.innerHeight;
            const imageTop = image.getBoundingClientRect().top;
            const imagePoint = 150;

            if (imageTop < windowHeight - imagePoint) {
                image.classList.add('active');
            }
        });
    }
}