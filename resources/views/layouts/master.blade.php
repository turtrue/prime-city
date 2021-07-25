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
    <header class="header">
        <div class="container container--bg-none">
            <div class="header__body">
                <div class="header__menu">
                    <button>
                        <img src="{{ asset("img/burger.svg") }}" alt="бургер меню"></button>
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

    <script src="{{ asset("js/app.js") }}"></script>
</body>

</html>