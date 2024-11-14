let gradients = document.getElementById('gradient');
let unity = document.getElementById('unity');

const btnFahrenheit = document.querySelector('#Fahrenheit button');
let degreeContainerFahrenheit = document.querySelector('#Fahrenheit input');
let pF = document.querySelector('#Fahrenheit p');

const btnKelvin = document.querySelector('#Kelvin button');
let degreeContainerKelvin = document.querySelector('#Kelvin input');
let pk = document.querySelector('#Kelvin p');



//fonction convertir degree -> fahrenheit  (celsus * (9/5)) + 32
btnFahrenheit.addEventListener('click', () => {
   let degree = degreeContainerFahrenheit.value;
    let a = 9/5;
    let b = degree * a;
    let c = b + 32
    return pF.textContent = `${Number(c)}°F`;
})


//fonction convertir degree -> Kelvin  Celsus + 273,15   et enlever la décimale
btnKelvin.addEventListener('click', () => {
    const degree = parseFloat(degreeContainerKelvin.value); // Récupère et convertit la valeur de l'input en nombre
    if (!isNaN(degree)) { // Vérifie que la saisie est bien un nombre
        const kelvin = degree + 273.15; // Calcul en Kelvin
        pk.textContent = `${Math.round(kelvin)} K`; // Arrondit le résultat à l'entier
    } else {
        pk.textContent = "Entrez une valeur valide en Celsius";
    }
});



// // Fonction de conversion Celsius -> Fahrenheit
// const celsiusToFahrenheit = (celsius) => (celsius * (9/5)) + 32;

// // Fonction de conversion Celsius -> Kelvin
// const celsiusToKelvin = (celsius) => celsius + 273.15;

// // Fonction de conversion Fahrenheit -> Celsius
// const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9);

// // Fonction de conversion Fahrenheit -> Kelvin
// const fahrenheitToKelvin = (fahrenheit) => fahrenheitToCelsius(fahrenheit) + 273.15;

// // Fonction de conversion Kelvin -> Celsius
// const kelvinToCelsius = (kelvin) => kelvin - 273.15;

// // Fonction de conversion Kelvin -> Fahrenheit
// const kelvinToFahrenheit = (kelvin) => celsiusToFahrenheit(kelvinToCelsius(kelvin));

// // Fonction principale de conversion
// document.getElementById('convert-button').addEventListener('click', () => {
//     const inputTemp = parseFloat(document.getElementById('temperature-input').value);
//     const inputUnit = document.getElementById('unit-input').value;

//     let celsius, fahrenheit, kelvin;

//     // Conversion en fonction de l'unité de départ
//     if (inputUnit === "Celsius") {
//         celsius = inputTemp;
//         fahrenheit = celsiusToFahrenheit(celsius);
//         kelvin = celsiusToKelvin(celsius);
//     } else if (inputUnit === "Fahrenheit") {
//         fahrenheit = inputTemp;
//         celsius = fahrenheitToCelsius(fahrenheit);
//         kelvin = fahrenheitToKelvin(fahrenheit);
//     } else if (inputUnit === "Kelvin") {
//         kelvin = inputTemp;
//         celsius = kelvinToCelsius(kelvin);
//         fahrenheit = kelvinToFahrenheit(kelvin);
//     }

//     // Affichage des résultats
//     document.getElementById('toCelsius').textContent = `Celsius : ${celsius.toFixed(2)}`;
//     document.getElementById('toFahrenheit').textContent = `Fahrenheit : ${fahrenheit.toFixed(2)}`;
//     document.getElementById('toKelvin').textContent = `Kelvin : ${kelvin.toFixed(2)}`;
// });
