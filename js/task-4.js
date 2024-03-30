const form = document.querySelector("form.login-form");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']")
form.addEventListener("submit", event => {
    event.preventDefault();
    if (email.value.trim() === "" || password.value.trim() === "") {
        alert('All form fields must be filled in');
    }
    const userData = {
        email: event.currentTarget.elements.email.value.trim(),
        password: event.currentTarget.elements.password.value.trim(),
    };
    console.log(userData);
    form.reset();
});