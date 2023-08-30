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

//Oppgave 4
/*
var timer = prompt("Skriv inn hvor mange timer", "Skriv her")
var pris = 0
if (timer == 1) {
    pris = 5
} else if(timer < 6) {
    pris = ((timer-1)*4)+5
} else {
    pris = ((timer-5)*3)+21
}
console.log("Prisen for "+ timer + " timer er "+ pris);
*/

//Oppgave 5

var userInput = prompt("Skriv inn et tall: ");
var num = parseInt(userInput);

if (isNaN(num)) {
    console.log("Vennligst skriv inn et gyldig tall.");
} else {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum += i;
    }

    console.log("Summen av tallene fra 1 til", num, "er:", sum);
}