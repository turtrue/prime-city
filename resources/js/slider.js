const track = document.querySelector('.slider__track');

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
        if (counter <= 0) return;
        counter--;
        removeClass(items, 'active');
        addClass(items, 'active');
        nextSlide();
    });

    // Кнопка вперед
    next.addEventListener('click', () => {
        if (counter >= numbers.length - 1) return;
        counter++;
        nextSlide();
    });

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