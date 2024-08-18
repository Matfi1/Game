document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const messageDiv = document.getElementById('message');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const strengthMessage = document.getElementById('password-strength');

    function validatePasswordStrength(password) {
        let strength = 'Слабый';
        if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength = 'Сильный';
        } else if (password.length > 5) {
            strength = 'Средний';
        }
        strengthMessage.textContent = `Сила пароля: ${strength}`;
    }

    passwordInput.addEventListener('input', function() {
        validatePasswordStrength(passwordInput.value);
    });

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (username.length < 3 || username.length > 15) {
            messageDiv.textContent = "Имя пользователя должно быть от 3 до 15 символов.";
            return;
        }

        if (password !== confirmPassword) {
            messageDiv.textContent = "Пароли не совпадают.";
            return;
        }

        if (password.length < 6) {
            messageDiv.textContent = "Пароль должен содержать не менее 6 символов.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            messageDiv.textContent = "Введите корректный адрес электронной почты.";
            return;
        }

        messageDiv.textContent = "Регистрация успешна!";
        registrationForm.reset();
        strengthMessage.textContent = '';  // Сброс отображения силы пароля
    });
});
