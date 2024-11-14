// Récupération des données de conversion depuis le JSON
let devises = {};
const fetchData = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5500/convertisor-devises/devise.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Status: ${response.status}`);
        }
        devises = await response.json();  // Stockage des devises pour utilisation globale
    } catch (error) {
        console.error("Erreur lors de la récupération du fichier JSON:", error);
    }
};

// Fonction pour effectuer la conversion de devise
function multiplier(deviseActuelle, deviseCible, montant) {
    if (devises[deviseActuelle] && devises[deviseActuelle][deviseCible]) {
        const tauxConversion = devises[deviseActuelle][deviseCible];
        return montant * tauxConversion;
    } else {
        console.error("Taux de conversion introuvable pour les devises sélectionnées");
        return null;
    }
}

// Appel initial pour charger les données JSON
fetchData();


// Récupération des éléments HTML
const argent = document.getElementById('current-valeur');
const listDevises = document.getElementById('current-devise');
const btnDevise = document.getElementById('deviseSelected');
const containerDeviseToConvert = document.getElementById('container-p');

const listConversion = document.getElementById('converted-devise');
const btnConversion = document.getElementById('deviseConverted');
const containerConversion = document.getElementById('containerConverted-p');

// Affichage de la valeur et de la devise actuelle
btnDevise.addEventListener('click', () => {
    // Récupération de la devise sélectionnée
    const deviseActuelle = listDevises.value;
    const montant = parseFloat(argent.value);

    if (!deviseActuelle || isNaN(montant)) {
        alert("Veuillez sélectionner une devise et entrer un montant valide.");
        return;
    }

    // Affichage de la valeur et de la devise
    containerDeviseToConvert.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = `${montant} ${listDevises.options[listDevises.selectedIndex].text.split(' ')[1]}`;
    p.setAttribute("data-devise", deviseActuelle);  // Stocker la devise actuelle
    containerDeviseToConvert.appendChild(p);
});

// Conversion de la devise
btnConversion.addEventListener('click', () => {
    // Récupération de la devise actuelle et du montant
    const pDevise = containerDeviseToConvert.querySelector('p');
    if (!pDevise) {
        alert("Veuillez valider la devise actuelle et le montant d'abord.");
        return;
    }

    const deviseActuelle = pDevise.getAttribute("data-devise");
    const montant = parseFloat(argent.value);
    const deviseCible = listConversion.value;

    if (!deviseCible) {
        alert("Veuillez sélectionner une devise de conversion.");
        return;
    }

    // Conversion et affichage
    const montantConverti = multiplier(deviseActuelle, deviseCible, montant);
    
    containerConversion.innerHTML = '';
    if (montantConverti !== null) {
        const p = document.createElement('p');
        p.textContent = `${montantConverti.toFixed(2)} ${listConversion.options[listConversion.selectedIndex].text.split(' ')[1]}`;
        containerConversion.appendChild(p);
    }
    argent.value = '';
});
