
const btnClick = document.querySelector('.click');
// const numberP = document.querySelector('input');
const btnReset = document.querySelector('.reset');
const numero = document.querySelector('.numero');

let click = 0;

btnClick.addEventListener('click',() => {
    click += 1;
    numero.textContent = Number(click);
    console.log(click);
    
})

btnReset.addEventListener('click', ()=> {
    click = 0;
    numero.textContent = click;
})

function reset(){
    click = 0;
}

// // Initialise la variable `click` avec la valeur actuelle de l'input, convertie en nombre
// let click = Number(numberP.value);
// console.log(click);  

// btnClick.addEventListener('click', () => {
//     // Incrémente la variable `click` de 1 à chaque clic sur le bouton
//     click += 1;
    
//     // Met à jour la valeur affichée dans l'input avec la nouvelle valeur de `click`
//     numberP.value = click;
// });

// // Fonction qui réinitialise la valeur de l'input à zéro
// function reset() {
//     // Met la valeur de `click` et de l'input à 0 pour réinitialiser le compteur
//     click = 0;
//     numberP.value = click;
    
//     console.log('clear');  // Affiche "clear" dans la console pour confirmer la réinitialisation
// }
