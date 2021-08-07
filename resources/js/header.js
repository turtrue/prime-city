const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', menuFixed);

menuFixed();
function menuFixed() {
    header.classList.toggle('sticky', window.scrollY > 0);
}

nav.addEventListener('click', event => {
    const isLink = event.target.classList.contains('nav__link');

    if (isLink) {
        header.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    }
});

burger.addEventListener('click', () => {
    header.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});