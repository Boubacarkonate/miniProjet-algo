/* 
créer un bouton démarrer
créer un bouton arrêter
créer un bouton réinitialiser
creer un p ayant comme valeur 0
recuperer le p qui contiendra les futures valeurs du timer qu'on injectera avec textContent
la fonction setInterval contient une callback et une durée => setInterval(callback, durée);

- creer 1ere fonction qui créera le changement de valeur dans le html **myTimer()**
 - creer 2ème fonction qui contiendra le setInteval avec myTimer en paramètre **go(setInteval(myTimer,1000))
 - créer un écouteur d'événement qui au clic du button start déclenchera le timer

pour le fonctionnement de reset :
- mettre la valeur du p à 0
*/

let time = document.querySelector('p');
const start = document.getElementById('start');
const stop1 = document.getElementById('stop');
const reset = document.getElementById('reset');

// Initialisation de la variable pour le temps et l'ID du minuteur
let timeStart = 0;
let intervalId = null; // Variable pour stocker l'ID du minuteur


                    ///start/////

function myTimer() {
   
    timeStart+= 1 
    time.textContent = Number(timeStart);
    
  }

const go = ()=>{
    if (!intervalId) {  // Vérifie qu'il n'y a pas déjà un intervalle en cours
        intervalId = setInterval(myTimer, 1000);
    }
}


start.addEventListener('click',go)

                    ///rest/////
reset.addEventListener('click',() => {
    timeStart = 0;
    time.textContent = Number(0);
    console.log('reset');
    
})

                    ///stop/////
const stopTimer = ()=> {
    clearInterval(intervalId)
    intervalId = null;
    console.log('stop');
}

stop1.addEventListener('click',stopTimer)
