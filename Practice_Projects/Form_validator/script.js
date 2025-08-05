const uname = document.getElementById('name');
const nameError = document.getElementById('nameError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const button = document.getElementById('submitBtn');

let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;

uname.addEventListener('input', () => {
    const username = uname.value;
    if (username.match(/\d/g)) {
        nameError.innerText = "Name shouldn't contain digits";
        isNameValid = false;
    } else {
        nameError.innerText = '';
        isNameValid = true;
    }
    toggleButton();
});

email.addEventListener('input', () => {
    const userMail = email.value;
    if (!userMail.includes("@")) {
        emailError.innerText = "Provide a valid email";
        isEmailValid = false;
    } else {
        emailError.innerText = '';
        isEmailValid = true;
    }
    toggleButton();
});

password.addEventListener('input', () => {
    const passwords = password.value;
    if (passwords.length < 5) {
        passwordError.innerText = "Password must be at least 5 characters";
        isPasswordValid = false;
    } else {
        passwordError.innerText = '';
        isPasswordValid = true;
    }
    toggleButton();
});

function toggleButton() {
    button.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Form submitted!");

uname.value =''
email.value = ''
password.value =''



});
