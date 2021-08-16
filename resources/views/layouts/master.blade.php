<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href={{ asset("css/app.css") }}>
    <link rel="icon" type="image/png" href="{{ asset("img/favicon.png") }}">
</head>

<body>
    <div class="help-height-top"></div>
    <header id="header" class="header">
        <div class="container">
            <div class="header__body">
                <div id="burger" class="header__menu">
                    <button>
                        <hr>
                        <hr>
                        <hr>
                    </button>
                    <span>Меню</span>
                </div>
                <a class="header__logo" href="{{ route('index') }}">
                    <img src="{{ asset("img/logo.svg") }}" alt="логотип сайта">
                    <div>
                        <h1>Премьер-сити</h1>
                        <h2>строительная компания</h2>
                    </div>
                </a>
                <div class="header__contact">
                    <address>Казань, ул. Х.Такташа, д. 78</address>
                    <div><a href="tel:+7 (843) 278-01-91">+7 (843) 278-01-91</a></div>
                    <div><a href="tel:+7 (917) 874-80-61">+7 (917) 874-80-61</a></div>
                </div>
            </div>

            <div class="nav">
                <div class="nav__body">
                    <ul>
                        <li class="nav__title">Главная</li>
                        <li><a class="nav__link" href="{{ route('index') . '#section' }}">Партнеры</a></li>
                        <li><a class="nav__link" href="{{ route('index') . '#section-2' }}">Сертификаты</a></li>
                    </ul>
                    <ul>
                        <li class="nav__title">Наши услуги</li>
                        <li><a class="nav__link" href="{{ route('services') . '#section' }}">Обустройство газовых и нефтяных месторождений</a></li>
                        <li><a class="nav__link" href="{{ route('services') . '#section-2' }}">Прокладка и монтаж трубопроводов различной степени отвественности</a></li>
                        <li><a class="nav__link" href="{{ route('services') . '#section-3' }}">Строительство и монтаж ВЛ до 220 кв</a></li>
                        <li><a class="nav__link" href="{{ route('services') . '#section-4' }}">Общестроительные работы</a></li>
                        <li><a class="nav__link" href="{{ route('services') . '#section-5' }}">Мобильная лаборатория НК</a></li>
                        <li><a class="nav__link" href="{{ route('services') . '#section-6' }}">Аренда спецтехники</a></li>
                    </ul>
                    <ul>
                        <li class="nav__title">О компании</li>
                        <li><a class="nav__link" href="{{ route('objects') }}">Значимые объекты</a></li>
                        <li><a class="nav__link" href="{{ route('news') }}">Новости</a></li>
                        <li><a class="nav__link" href="{{ route('vacancies') }}">Вакансии</a></li>
                        <li><a class="nav__link" href="{{ route('contacts') }}">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    @yield('content')

    <footer class="footer">
        <div class="container container--bg-none">
            <div class="footer__body">
                <a class="footer__logo" href="{{ route('index') }}">
                    <img src="{{ asset("img/logo.svg") }}" alt="логотип сайта">
                    <div>
                        <h1>Премьер-сити</h1>
                        <h2>строительная компания</h2>
                    </div>
                </a>
                <div class="footer__author">
                    <a href="http://valentinapos.tilda.ws/" target="_blank">Design by Valentinapos</a>
                </div>
                <div class="footer__contact">
                    <address>Казань, ул. Х.Такташа, д. 78</address>
                    <div><a href="tel:+7 (843) 278-01-91">+7 (843) 278-01-91</a></div>
                    <div><a href="tel:+7 (917) 874-80-61">+7 (917) 874-80-61</a></div>
                </div>
            </div>
        </div>
    </footer>
    <div class="help-height-bottom"></div>

    <script src="{{ asset("js/app.js") }}"></script>
</body>

</html>