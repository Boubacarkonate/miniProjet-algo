/*
créer un tableau avec des lettres et des nombres

*/
const inputNumber = document.getElementById('inputNumber');
const bouton = document.querySelector('#search');
const resultat = document.getElementById('resultat');
const btnDisplay = document.getElementById('display');
const display = document.getElementById('displayElement');
const btnRestart = document.getElementById('restart');

// const tableau = ['a', 'b', 'c', 'd', 'e', 'f'];
const tableau = [];

// Fonction pour générer un entier aléatoire entre min (inclus) et max (exclu)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Ajoute 5 nombres aléatoires entre 1 et 10 dans le tableau
for (let i = 0; i < 5; i++) {
    let rand = getRandomInt(1, 20); // Génère un nouveau nombre aléatoire
    tableau.push(rand); // L'ajoute au tableau
}

//   console.log(tableau);
  

// const found = tableau.find((e) => e === 'c');
// console.log(found);


// for (let i = 0; i < tableau.length; i++) {
//     const element = tableau[i];
    
//     // console.log(element);
//     if (tableau.includes('z')) {
//         console.log(` a été trouvé dans le tableau`);
    
//     } else {
//         console.log(` n'a pas été trouvé dans le tableau`);
        
//     }
    
// }

// if (tableau.includes('a')) {
//     console.log(` a été trouvé dans le tableau`);

// } else {
//     console.log(` n'a pas été trouvé dans le tableau`);
    
// }

// for (const element in tableau) {
   
//        console.log( tableau[element]);

// }

const displayElement = () => {
    display.innerHTML = '';

    tableau.forEach((el) => {
        const li = document.createElement('li');
        li.textContent = el; 
        display.appendChild(li); 
    });
};



bouton.addEventListener('click', () => {
    let value = parseInt(inputNumber.value);
    resultat.innerHTML = '';
    for (const element of tableau) {
        if (value === element) {
            const p = document.createElement('p');
            p.textContent = `L'élément ${value} se trouve bien dans le tableau `;
            resultat.appendChild(p);
           
            break // Sort de la boucle une fois trouvé
        } else {
             const p = document.createElement('p');
            p.textContent = `L'élément ${value} ne se trouve bien dans le tableau `;
            resultat.appendChild(p);
            break;
        }
    }
    
    // let trouvé = false; // Pour suivre si l'élément est trouvé

    // for (const index in tableau) { // Parcourt les indices du tableau
    //     if (value == tableau[index]) { // Compare value avec tableau[index]
    //         console.log('trouvé');
    //         trouvé = true;
    //         break; // Sort de la boucle une fois trouvé
    //     }
    // }

    // if (!trouvé) {
    //     console.log('non trouvé');
    // }
});

btnDisplay.addEventListener('click', displayElement);

btnRestart.addEventListener('click', () => {
    display.innerHTML = '';

    resultat.innerHTML = '';

    inputNumber. value = '';

});