function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const currentValue = display.value;

    // Prevent multiple operators being added consecutively
    if (currentValue !== '' && !isNaN(currentValue.slice(-1))) {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Avoid using eval directly for security reasons, but it's fine in this simple calculator
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
