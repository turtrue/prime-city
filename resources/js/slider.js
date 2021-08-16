const track = document.querySelector('.slider__track');
const prev = document.querySelector('#slider-prev');
const next = document.querySelector('#slider-next');

if (track) {
    const items = document.querySelectorAll('.slider__item');
    const prev = document.querySelector('#slider-prev');
    const next = document.querySelector('#slider-next');
    const itemsLength = items.length;

    // Вычисление длины одного элемента слайдера
    const widthItem = 100 / 3;

    // Установка длины трека
    track.style.width = `${widthItem * itemsLength}%`;

    // Установка длины элементов слайдера
    items.forEach(item => {
        item.style.width = `${widthItem}%`;
    });

    // Заполнение массива номерами элементов слайдера
    const length = itemsLength - 2;
    const numbers = Array.apply(null, { length }).map(Number.call, Number);

    // Вычисление одного шага
    const step = 100 / itemsLength;
    let counter = 0;

    // Начальная позиция трека
    movingTrack();

    // Кнопка назад
    prev.addEventListener('click', () => {
        counter--;
        const condition = counter < 1;
        btnVisible(condition, prev, next);
        nextSlide();
    });

    // Кнопка вперед
    next.addEventListener('click', () => {
        counter++;
        const condition = counter >= numbers.length - 1;
        btnVisible(condition, next, prev);
        nextSlide();
    });

    function btnVisible(condition, firstBtn, secondBtn) {
        if (condition) {
            firstBtn.classList.add('hide');
            secondBtn.classList.remove('hide');
        } else {
            secondBtn.classList.remove('hide');
        }
    }

    function movingTrack() {
        track.style.transform = `translateX(-${numbers[counter] * step}%)`;
    }

    function addClass(array, cls) {
        const currentItem = array[counter + 1];
        currentItem.classList.add(cls);
    }

    function removeClass(array, cls) {
        array.forEach(item => item.classList.remove(cls));
    }

    function nextSlide() {
        removeClass(items, 'active');
        addClass(items, 'active');
        movingTrack();
    }
}