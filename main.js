// Exercise 1
function showMessage(callback) {
    callback('This is a message.');
}
document.getElementById('exercise1').addEventListener('click', function() {
    showMessage(console.log);
});

// Exercise 2
function getTypeAndPrintContent(variable, callback) {
    const type = typeof variable;
    callback(`Type: ${type}, Content: ${variable}`);
}

document.getElementById('exercise2').addEventListener('click', function() {
    getTypeAndPrintContent("Hello, callbacks!", console.log);
});

  // Exercise 3
function calculate(a, b, callback) {
    callback(a + b, a - b, a * b, a / b);
}

document.getElementById('exercise3').addEventListener('click', function() {
    calculate(10, 5, (sum, difference, product, quotient) => {
        console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`);
    });
});

  // Exercise 4
function convertCase(str, callback) {
    callback(str.toLowerCase(), str.toUpperCase());
}

    document.getElementById('exercise4').addEventListener('click', function() {
    const inputString = "PejeLagarto";
    convertCase(inputString, (lowerCaseStr, upperCaseStr) => {
        console.log(`Lowercase: ${lowerCaseStr}, Uppercase: ${upperCaseStr}`);
    });
});

  // Exercise 5
function filterGreaterThanTwoHours(times, callback) {
    const result = times.filter(time => time > 120);
    callback(result);
}

document.getElementById('exercise5').addEventListener('click', function() {
    const times = [120, 80, 200, 100];
    filterGreaterThanTwoHours(times, result => {
            console.log(result);
    });
});
