@extends('auth.layouts.master')

@section('title', 'Войти')

@section('content')
<div class="container">
    <h2 class="mb-3">Войти</h2>

    <div class="row">
        <form action="{{ route('login') }}" method="POST" class="col-6 mx-auto">
            <div class="mb-3">
                <label class="form-label">Почта</label>
                <input name="email" type="email" class="form-control" value="premcity@gmail.com">
            </div>
            <div class="mb-3">
                <label class="form-label">Пароль</label>
                <input name="password" type="password" class="form-control" value="premcity2021">
            </div>

            @csrf

            <button type="submit" class="btn btn-primary">Войти</button>
        </form>
    </div>
</div>
@endsection