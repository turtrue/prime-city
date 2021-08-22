const alerts = document.querySelectorAll('.alert');

alerts.forEach(alert => {
    alert.classList.add('show');

    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
});