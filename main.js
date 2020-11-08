const fInput = document.querySelector('#fahrenheit');
const cInput = document.querySelector('#celsius');

fInput.addEventListener('input', (event) => {
    let cValue = (fInput.value - 32) * .5555;
    if (isNaN(cValue)) {
        cInput.value = "Not a number";
    } else {
        cInput.value = cValue.toFixed(1);
    }
})

cInput.addEventListener('input', (event) => {
    let fValue = (cInput.value * 1.8) + 32;
    if (isNaN(fValue)) {
        fInput.value = "Not a number";
    } else {
        fInput.value = fValue.toFixed(1);
    }
})