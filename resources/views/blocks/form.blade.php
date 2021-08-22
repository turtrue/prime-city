@extends('layouts.modal')

@section('mcontent')
<form class="form" action="{{ route('sendEmail') }}" method="POST" enctype="multipart/form-data">
    <div class="form__group">
        <label>Имя:</label>
        <input name="name" type="text" required>
    </div>
    <div class="form__group">
        <label>Телефон:</label>
        <input name="phone" type="text" required>
    </div>
    <div class="form__group">
        <label>Email:</label>
        <input name="email" type="email" required>
    </div>
    <div class="form__group">
        <label>Резюме:</label>
        <input title="Размер файла не должен превышать 8 мб" name="file" type="file" required>
    </div>
    <input name="vacancy" type="hidden">

    @csrf

    <div class="form__button">
        <button type="submit">Отправить</button>
    </div>
    <div class="modal__close">&times;</div>
</form>
@endsection