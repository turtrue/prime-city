const burger = document.querySelector('#burger');
const header = document.querySelector('#header');

burger.addEventListener('click', () => {
    header.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});