/*
créer une interface où chaque bouton contiendra sa propre valeur (ex: bouton1 = 1, bouton+ = +...)
creer un input les valeurs des boutons qui seront ciquées et le résultat des opérations
créer une fonction qui permet à cchaque bouton cliqué de s'afficher dans l'input
créer une fonction qui exécute les opération (ex: 1+1)
l'input affichera le résultat
*/


const inputDisplay = document.querySelector('input');

function displayNumber(n){
  inputDisplay.value += n;
}

function displayOperateur(operator) {
    inputDisplay.value += operator;
}

function clearInput(){
    
  inputDisplay.value = '';
}


const resultat = () =>{
   inputDisplay.value = eval(inputDisplay.value)
}
