


// new
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailInput = emailField.value;
    const passwordField = document.getElementById('user-password');
    const passwordInput = passwordField.value;
    if (emailInput == 'jasimuddin@gmail.com' && passwordInput == '10') {
        window.location.href = 'another.html'
    }



});