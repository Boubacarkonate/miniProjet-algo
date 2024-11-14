/*
crer un input qqui contiendra la valeur 
créer un input select pour choisir la devise actuelle
une fois la valeur et la devise actuelles seront selectionnées => appuyer sur un bouton pour la creation dans un p pour les afficher (ex : 10€)

creer un input contenant la devise pourla conversion
crer un p qui contiendra la valeur convertie

une fois que mon p contenant la valeur et la devise, je dois les recuperer pour les convertir

Lorsque je choisi un select pour la valeur actuelle, je dois me retrouver dans cette devis dans mon json

*/

const fetchData = async (data) => {
    try {
        const response = await fetch('http://127.0.0.1:5500/convertisor-devises/devise.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const devises = await response.json();
        devises.euros.livres *= data;
        return devises.euros.livres;
        
    } catch (error) {
        console.error("Erreur lors de la récupération du fichier JSON:", error);
    }
    
}

fetchData()



let argent = document.getElementById('current-valeur');
const listDevises = document.getElementById('current-devise');
// const deviseActuelle = listDevises.options[listDevises.selectedIndex].value;
const btnDevise = document.getElementById('deviseSelected');
const containerDeviseToConvert = document.getElementById('container-p');

                                /////// affichage valeur actuelle choisie /////////////

btnDevise.addEventListener('click', () => {
 let deviseActuelle = listDevises.options[listDevises.selectedIndex].text.split(' ');
 containerDeviseToConvert.innerHTML = '';
  const p = document.createElement('p');
  p.textContent = `${argent.value} ${deviseActuelle[1]}`;
    containerDeviseToConvert.appendChild(p);
    console.log(p);
});

                                /////// affichage valeur convertie /////////////

const listConversion = document.getElementById('converted-devise');
const btnConversion = document.getElementById('deviseConverted');
const containerConversion = document.getElementById('containerConverted-p');

btnConversion.addEventListener('click', () => {
    
    let deviseConversion = listConversion.options[listConversion.selectedIndex].text.split(' ');
     // Efface le contenu précédent
     containerConversion.innerHTML = '';
    const p = document.createElement('p');
   
    fetchData(argent.value).then(result => {
     p.textContent =  `Valeur en livre, ${result.toFixed(2)} ${deviseConversion[1]}` 
     });
     containerConversion.appendChild(p);
    argent.value = '';
});

// const currentValue = document.getElementById('current-devise');
// console.log(currentValue.selectedIndex=1 );
// let nouvelleOption = new Option('coucou', '50');nouvelleOption
// currentValue.options[currentValue.options.length] = 


// currentValue.addEventListener('change',()=>{ 
//     let choice = currentValue.selectedIndex;
// valeur_cherchee = currentValue.options[choice].value;
// console.log(valeur_cherchee);
// let valeur_label = currentValue.options[choice].label;
// console.log(valeur_label);
// let valeur_selectionne = currentValue.options[choice].selected;
// console.log(valeur_selectionne);


//  });