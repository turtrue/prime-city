<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href={{ asset("css/app.css") }}>
    <link rel="icon" href={{ asset("img/favicon.ico") }}>
</head>

<body>
    <div class="help-height-top"></div>
    <header class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__menu">
                    <button>
                        <hr>
                        <hr>
                        <hr>
                    </button>
                    <span>Меню</span>
                </div>
                <div class="header__logo">
                    <img src="{{ asset("img/logo.svg") }}" alt="логотип сайта">
                    <div>
                        <h1>Премьер-сити</h1>
                        <h2>строительная компания</h2>
                    </div>
                </div>
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
                        <li><a href="#">Сертификаты</a></li>
                        <li><a href="#">Партнеры</a></li>
                    </ul>
                    <ul>
                        <li class="nav__title">Наши услуги</li>
                        <li><a href="#">Обустройство газовых и нефтяных месторождений</a></li>
                        <li><a href="#">Прокладка и монтаж трубопроводов различной степени отвественности</a></li>
                        <li><a href="#">Строительство и монтаж ВЛ до 220 кв</a></li>
                        <li><a href="#">Общестроительные работы</a></li>
                        <li><a href="#">Аренда спецтехники</a></li>
                        <li><a href="#">Мобильная лаборатория НК</a></li>
                    </ul>
                    <ul>
                        <li class="nav__title">О компании</li>
                        <li><a href="#">Значимые объекты</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    @yield('content')

    <footer class="footer">
        <div class="container container--bg-none">
            <div class="footer__body">
                <div class="footer__logo">
                    <img src="{{ asset("img/logo.svg") }}" alt="логотип сайта">
                    <div>
                        <h1>Премьер-сити</h1>
                        <h2>строительная компания</h2>
                    </div>
                </div>
                <div class="footer__author">
                    <a href="#">Design by Valentinapos</a>
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