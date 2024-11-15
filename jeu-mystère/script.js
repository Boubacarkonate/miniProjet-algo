/*
écrire un texte indiquant à l'utilisateur les consignes du jeu et domment démarrer le jeu
crer un bouton pour démarrer le jeu
Ce bouton ouvre un prompt qui permet à l'utilisateur d'écrire un nombre en tre 1 et 100.
mettre une condition interdisant les nombres en-dessous de 1 et les nombre au-dessus de 100
créer un nombre à trouvé rendu au hasard entre 1 et 100
si le number == nombre hasard alor gagné sinon perdu
on peut perdre 3 fois max => donc creer un variable tentativequi sera incremente de 1 jusqu'a 3 max
 */

const btnStart = document.getElementById('start');
const container = document.getElementById('containerJeu');


//nombre au hasard à trouver
let getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let numberFounded = getRandomArbitrary(1, 100)
 console.log(numberFounded);
 

//choix du nombre à deviner + comparaison du nombre choisi à celui à deviner + boucle pour 3 tentatives maximun
const choice =()=>{
    let tentative = 0
    while (tentative < 3) {
        let number = parseInt( prompt('Choissisez un nombre entre 1 et 100'));  
        
        if (number < 1 || number > 100) {
            alert("Le nombre doit être compris en 1 et 100"); 
            continue;
        } 
        
        if (number == numberFounded) {
            const gagne = document.createElement('p');
            gagne.textContent = `le nombre a trouvé est bien ${numberFounded}`;
           let success = container.appendChild(gagne);
           success.classList.add('success');
            return;
        } else {
            let p = document.createElement('p');
            p.textContent = `${number} est une erreur`;
            container.appendChild(p);
            tentative++;
            console.log('continue');    
        }
    }
    let nombre_a_trouve = document.createElement('p');
    nombre_a_trouve.textContent = `le nombre  était ${numberFounded}`;
    let perdu = container.appendChild(nombre_a_trouve);
    perdu.classList.add('error')
    }



btnStart.addEventListener('click',choice);