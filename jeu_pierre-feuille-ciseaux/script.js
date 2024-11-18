/**
creer un select où chaque option contiendra une reférence (pierre, feuille, ciseaux). Lors du choix de la référence une image s'affichera.
-creer un bouton qui validera notre choix.
après validation du l'ordinateur, par un Math.random affichera son choix pierre feuille...
- créer une condition si pierre => gagne contre ciseaux, nul contre pierre, perd contre feuille /  si feuille => perd contre ciseaux, nul contre feuille, gange contre pierre  / si ciseaux => perd contre pierre, nul contre cisaux, gagne contre ciseaux
- si la references du joueur et celle du joueur sont égales alors nul, sinon le joueur gagne ou l'ordinateur gaghne 


 */

let choix = document.getElementById('choix');
let containerImage = document.getElementById('imgChoix');
const btnValider = document.getElementById('validationChoix');
const adversaire = document.getElementById('adversaire');
const containerResultat = document.getElementById('resultat');
// console.log(choix.options[choix.selectedIndex].text);

function creationImage(selection) {
    containerImage.innerHTML= ''
    let image = document.createElement('img');
    let imgName = `./media/${selection}.png`; 
    image.setAttribute('src', imgName);
    image.setAttribute("width", "304");
    image.setAttribute("height", "228");
    image.setAttribute("alt", imgName);
    containerImage.appendChild(image)
}


function choixAdversaire(ordinateurRef){
   
        // const randomImage = ordinateurRef[Math.floor(Math.random() * ordinateurRef.length)];
        // adversaire.innerHTML = `<img src="./media/${randomImage}.png" width="304" height="228" alt="Image aléatoire" />`;
        let image = document.createElement('img');
        adversaire.innerHTML = '';
        let imgName = `./media/${ordinateurRef}.png`; 
        image.setAttribute('src', imgName);
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        image.setAttribute("alt", imgName);
        adversaire.appendChild(image)
   
};


//CHOIX ET VALIDATION DU CHOIX
btnValider.addEventListener('click', () => {
    let joueur = choix.options[choix.selectedIndex].value;
    const randomOptions = ['pierre', 'feuille', 'ciseaux'];
    const ordinateur = randomOptions[Math.floor(Math.random() * randomOptions.length)];
    let resultat = '';

creationImage(joueur);
// setTimeout(()=>{
choixAdversaire(ordinateur);

if (joueur === ordinateur){
     resultat= 'égalité';
     
} else if (
    (joueur === 'pierre' && ordinateur === 'ciseaux') ||
    (joueur === 'feuille' && ordinateur === 'pierre') ||
    (joueur === 'ciseaux' && ordinateur === 'feuille')
) {
     resultat= 'gagné';

     
} else {
     resultat= 'perdu';

     
}

containerResultat.innerHTML = `<p>${resultat}</p>`;
// },1000);
});

