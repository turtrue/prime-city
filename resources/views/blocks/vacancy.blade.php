<section class="vacancy">
    <div class="container">
        <h1 class="title-section title-section--min">Вакансии</h1>

        @if ($message = Session::get('success'))
        <div class="alert alert--success">
            <div class="container">
                <div>Ваше резюме успешно отправлено!</div>
            </div>
        </div>
        @endif

        <div class="vacancy__body">
            <div class="vacancy__item">
                <div class="vacancy__text">Слесарь по контрольно-измерительным приборам и автоматике</div>
                <div class="vacancy__button">
                    <button data-vacancy="Слесарь по контрольно-измерительным приборам и автоматике">Отправить резюме</button>
                </div>
            </div>
            <div class="vacancy__item">
                <div class="vacancy__text">Инженер-наладчик КИПиА</div>
                <div class="vacancy__button">
                    <button data-vacancy="Инженер-наладчик КИПиА">Отправить резюме</button>
                </div>
            </div>
            <div class="vacancy__item">
                <div class="vacancy__text">Электрогазосварщик 5 разряда</div>
                <div class="vacancy__button">
                    <button data-vacancy="Электрогазосварщик 5 разряда">Отправить резюме</button>
                </div>
            </div>
            <div class="vacancy__item">
                <div class="vacancy__text">Электромонтажник</div>
                <div class="vacancy__button">
                    <button data-vacancy="Электромонтажник">Отправить резюме</button>
                </div>
            </div>
            <div class="vacancy__item">
                <div class="vacancy__text">Энергетик</div>
                <div class="vacancy__button">
                    <button data-vacancy="Энергетик">Отправить резюме</button>
                </div>
            </div>
        </div>
    </div>
</section>