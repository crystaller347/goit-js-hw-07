const form = document.querySelector("form.login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    if (event.currentTarget.elements.email.value.trim() === "" || event.currentTarget.elements.password.value.trim() === "") {
        alert('All form fields must be filled in');
    } else {
        const userData = {
        email: event.currentTarget.elements.email.value.trim(),
        password: event.currentTarget.elements.password.value.trim(),
       };
    console.log(userData);
    form.reset();
    }
});