const images = document.querySelectorAll('.object__image');
const modal = document.querySelector('.modal');
const view = document.querySelector('.modal__view > img');

if (images.length) {
    window.addEventListener('scroll', reveal);
    reveal();

    function reveal() {
        images.forEach((img) => {
            const windowHeight = window.innerHeight;
            const imgTop = img.getBoundingClientRect().top;
            const imgPoint = 150;

            if (imgTop < windowHeight - imgPoint) {
                img.classList.add('show');
            }
        });
    }

    images.forEach(img => {
        img.addEventListener('click', () => {
            let src = img.getAttribute('src');
            src = src.replace(/.jpg/, "-full.jpg");
            view.setAttribute('src', src);
            modal.classList.add('active');
            document.body.classList.add('overflow-hidden');
        });
    });
}