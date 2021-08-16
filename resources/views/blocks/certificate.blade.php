@extends('layouts.modal')

<section class="certificate">
    <div id="section-2" class="section-link"></div>
    <div class="container">
        <h1 class="title-section">Сертификаты</h1>

        <div class="certificate__body">
            <div class="slider">
                <div class="slider__track">
                    <div class="slider__item"></div>
                    <div class="slider__item active">
                        <img class="certificate__img" src="/img/certificate-3.jpg" alt="сертификат">
                    </div>
                    <div class="slider__item">
                        <img class="certificate__img" src="/img/certificate-4.jpg" alt="сертификат">
                    </div>
                    <div class="slider__item"></div>
                </div>

                <button id="slider-prev" class="slider__arrow slider__arrow--prev hide">
                    <img src="/img/arrow-prev.svg" alt="назад">
                </button>
                <button id="slider-next" class="slider__arrow slider__arrow--next">
                    <img src="/img/arrow-next.svg" alt="вперед">
                </button>
            </div>
        </div>
    </div>

    @section('mcontent')
    <div class="certificate__view">
        <img src="/img/certificate-3.jpg" alt="сертификат">
        <div class="modal__close">&times;</div>
    </div>
    @endsection
</section>