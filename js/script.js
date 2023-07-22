const signUpButton = document.getElementById('register');
const signInButton = document.getElementById('signin');
const container = document.getElementById('container');

const signInForm = document.getElementById('signin-form');
const registerForm = document.getElementById('registration-form');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

var password_check = function () {
    if (document.getElementById('password').value != '' && document.getElementById('confirm_password').value) {
        if (document.getElementById('password').value ==
            document.getElementById('confirm_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'passwords are matched';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'password does not match';
        }
    }
}

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('login!');
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('register!');
});