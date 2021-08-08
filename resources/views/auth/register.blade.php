@extends('auth.layouts.master')

@section('title', 'Регистрация')

@section('content')
<div class="container">
    <h2 class="mb-5">Регистрация</h2>

    <div class="row">
        <form action="{{ route('register') }}" method="POST" class="col-6 mx-auto">
            <div class="mb-3">
                <label class="form-label">Имя</label>
                <input name="name" type="text" class="form-control" value="premcity">
            </div>
            <div class="mb-3">
                <label class="form-label">Почта</label>
                <input name="email" type="email" class="form-control" value="premcity@gmail.com">
            </div>
            <div class="mb-3">
                <label class="form-label">Пароль</label>
                <input name="password" type="password" class="form-control" value="premcity2021">
            </div>
            <div class="mb-3">
                <label class="form-label">Подтвердите пароль</label>
                <input name="password_confirmation" type="password" class="form-control" value="premcity2021">
            </div>

            @csrf

            <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
    </div>
</div>
@endsection