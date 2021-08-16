const images = document.querySelectorAll('.slider__item > img');
const view = document.querySelector('.certificate__view > img');
const modal = document.querySelector('.modal');

images.forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        view.setAttribute('src', src);
        modal.classList.add('active');
        document.body.classList.add('overflow-hidden');
    });
});