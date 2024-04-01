const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
    const trimmedInput = event.currentTarget.value.trim()
    output.textContent = trimmedInput;
    if (!trimmedInput) {
        output.textContent = "Anonymous";
    }
});