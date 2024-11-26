// Sélection des éléments HTML
const container_vert = document.querySelector('.color_vert');
const container_orange = document.querySelector('.color_orange');
const container_rouge = document.querySelector('.color_rouge');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

// Ajouter la classe de couleur normale (grise) par défaut
container_vert.classList.add('colorNormal');
container_orange.classList.add('colorNormal');
container_rouge.classList.add('colorNormal');

// Fonction pour changer la couleur à vert
function feuxColorVert() {
    // Réinitialiser les autres couleurs à grises
    container_vert.classList.remove('colorNormal');
    container_orange.classList.add('colorNormal');
    container_rouge.classList.add('colorNormal');

    // Ajouter la couleur verte
    container_vert.classList.add('vert');
}

// Fonction pour changer la couleur à orange
function feuxColorOrange() {
    // Réinitialiser les autres couleurs à grises
    container_orange.classList.remove('colorNormal');
    container_vert.classList.add('colorNormal');
    container_rouge.classList.add('colorNormal');

    // Ajouter la couleur orange
    container_orange.classList.add('orange');
}

// Fonction pour changer la couleur à rouge
function feuxColorRouge() {
    // Réinitialiser les autres couleurs à grises
    container_rouge.classList.remove('colorNormal');
    container_vert.classList.add('colorNormal');
    container_orange.classList.add('colorNormal');

    // Ajouter la couleur rouge
    container_rouge.classList.add('rouge');
}

// Variable pour stocker l'intervalle d'animation
let intervalId;

// Fonction pour démarrer le feu tricolore
start.addEventListener('click', () => {
    // Arrêter un intervalle existant avant de démarrer un nouveau
    if (intervalId) {
        clearInterval(intervalId);
    }

    // Démarrer le cycle de changement des couleurs
    let currentColor = 0; // 0 = Vert, 1 = Orange, 2 = Rouge

    intervalId = setInterval(() => {
        if (currentColor === 0) {
            feuxColorVert();
        } else if (currentColor === 1) {
            feuxColorOrange();
        } else if (currentColor === 2) {
            feuxColorRouge();
        }

        // Passer à la couleur suivante
        currentColor = (currentColor + 1) % 3; // Remettre à 0 après Rouge
    }, 1000); 
});

// Fonction pour arrêter la simulation
stop.addEventListener('click', () => {
    clearInterval(intervalId);
    // Réinitialiser toutes les couleurs à gris
    container_vert.classList.add('colorNormal');
    container_orange.classList.add('colorNormal');
    container_rouge.classList.add('colorNormal');
});
