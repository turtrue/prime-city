const modal = document.querySelector('.modal');

if (modal) {
    modal.addEventListener('click', event => {
        const isModal = event.target.classList.contains('modal');
        const isClose = event.target.classList.contains('modal__close');

        if (isModal || isClose) {
            modal.classList.remove('active');
            document.body.classList.remove('overflow-hidden');
        }
    });
}