//Oppgave 1


//Oppgave 2
/*
const T1 = document.getElementById("T1");
const T2 = document.getElementById("T2");
const T3 = document.getElementById("T3");
const AvgBtn = document.getElementById("Average");
const result = document.getElementById("result")

AvgBtn.addEventListener("click", () => {
    const valueT1 = parseFloat(T1.value);
    const valueT2 = parseFloat(T2.value);
    const valueT3 = parseFloat(T3.value);

    const avg = calculateAverage(valueT1, valueT2, valueT3);

    result.textContent = `${avg} er gjennomsnittet av tallene ${valueT1}, ${valueT2} og ${valueT3}`;
});

function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3; 
}
*/

//Oppgave 3
/*
const tempInput = document.getElementById("temp-input");
const toCelsiusBtn = document.getElementById("to-celsius-btn");
const toFahrenheitBtn = document.getElementById("to-fahrenheit-btn");
const result = document.getElementById("result");

toCelsiusBtn.addEventListener("click", function () {
    const temp = parseFloat(tempInput.value);
    const celsius = convertToCelsius(temp);
    result.textContent = `${temp} grader Fahrenheit tilsvarer ${celsius.toFixed(1)} grader Celsius.`;
});

function convertToFahrenheit(temp) {
   return temp * (9 / 5) + 32;
}

toFahrenheitBtn.addEventListener("click", function () {
    const temp = parseFloat(tempInput.value);
    const fahrenheit = convertToFahrenheit(temp);
    result.textContent = `${temp} grader Celsius tilsvarer ${fahrenheit.toFixed(1)} grader Fahrenheit.`;
});

function convertToCelsius(temp) {
    return (temp - 32) * (5 / 9);
}
*/