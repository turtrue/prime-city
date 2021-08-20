@extends('layouts.modal')

@section('mcontent')
<form class="form" action="{{ route('sendEmail') }}" method="POST" enctype="multipart/form-data">
    <div class="form__group">
        <label>Имя:</label>
        <input name="name" type="text" value="Tural Kerimov" require>
    </div>
    <div class="form__group">
        <label>Телефон:</label>
        <input name="phone" type="text" value="+7(951)482-11-73" require>
    </div>
    <div class="form__group">
        <label>Email:</label>
        <input name="email" type="email" value="tural@gmail.com" require>
    </div>
    <div class="form__group">
        <label>Резюме:</label>
        <input name="file" type="file">
    </div>
    <input name="vacancy" type="hidden">

    @csrf

    <div class="form__button">
        <button type="submit">Отправить</button>
    </div>
    <div class="modal__close">&times;</div>
</form>
@endsection