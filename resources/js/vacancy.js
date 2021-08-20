const buttons = document.querySelectorAll('.vacancy__button > button');
const modal = document.querySelector('.modal');
const vacancy = document.querySelector('input[name=vacancy]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.dataset.vacancy;
        vacancy.setAttribute('value', value);
        modal.classList.add('active');
    });
});