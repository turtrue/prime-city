const paragraph = document.querySelector('#advantage-paragraph');

if (paragraph) {
    const text = [
        'Собственный парк спецтехники',
        'Квалифицированный персонал',
        'Собственная мобильная лаборатория неразрушающего контроля',
        'Индивидуальный подход в решении каждого вопроса',
        'Более десяти лет успешной реализации проектов по обустройству нефтяных и газовых месторождений на всей территории Российской федерации'
    ];

    let counter = 0;

    setInterval(() => {
        paragraph.classList.add('hide');

        setTimeout(() => {
            paragraph.textContent = text[counter];
            paragraph.classList.remove('hide');
        }, 700);

        counter++;
        if (counter >= text.length) counter = 0;
    }, 5000);
}