const images = document.querySelectorAll('.slider__item > img');
const modal = document.querySelector('.modal');
const view = document.querySelector('.modal__view > img');

images.forEach(img => {
    img.addEventListener('click', () => {
        let src = img.getAttribute('src');
        src = src.replace(/.jpg/, "-full.jpg");
        view.setAttribute('src', src);
        modal.classList.add('active');
        document.body.classList.add('overflow-hidden');
    });
});