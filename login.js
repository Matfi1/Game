document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        // Здесь вы можете добавить свою логику проверки входа
        if (email && password) {
            messageDiv.textContent = "Вход успешен!";
        } else {
            messageDiv.textContent = "Пожалуйста, заполните все поля.";
        }
    });

    // Функция для кнопки "Назад"
    window.goBack = function() {
        if (document.referrer) {
            window.history.back(); // Возвращает на предыдущую страницу, если она есть
        } else {
            window.location.href = "index.html"; // Если предыдущей страницы нет, перенаправляет на главную страницу
        }
    };
});
