<div class="modal">
    <form class="form" action="#" enctype="multipart/form-data">
        <div class="container">
            <div class="form__group">
                <label>Имя:</label>
                <input name="name" type="text">
            </div>
            <div class="form__group">
                <label>Телефон:</label>
                <input name="phone" type="number">
            </div>
            <div class="form__group">
                <label>Email:</label>
                <input name="email" type="email">
            </div>
            <div class="form__group">
                <label>Резюме:</label>
                <input name="file" type="file">
            </div>
            <input name="vacancy" type="hidden" value="Инженер-наладчик">

            @csrf

            <div class="form__button">
                <button type="submit">Отправить</button>
            </div>
            <div class="form__close">&times;</div>
        </div>
    </form>
</div>