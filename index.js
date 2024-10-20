let inputs = document.getElementById("number");
let submits = document.getElementById("submit");
let display = document.getElementById("show");

submits.addEventListener("click", () => {
    let inputValue = inputs.value;
    console.log(inputValue);
    display.innerHTML = ''
    for (let i = 1; i <= 12; ++i) {
        display.innerHTML += "<p>" + inputValue + " x " + i + " = " + (inputValue * i) + "</p>";
    }
});
