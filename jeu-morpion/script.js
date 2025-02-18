const btn = document.querySelectorAll('button');
const statut = document.getElementById('StatutJeu');

const player1 = 'X';
const player2 = 'O';

let tour = 0;


let tableau = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
console.log(tableau[2][0]);

const win = (player) => {
    for (let i = 0; i < 3; i++) {
        if (tableau[i][0] === player && tableau[i][1] === player && tableau[i][2] === player) {
            statut.textContent = "colonne effectuée => gagné";
            return true;
        }
        if (tableau[0][i] === player && tableau[1][i] === player && tableau[2][i] === player) {
            statut.textContent = "ligne effectuée => gagné";
            return true;
        }
        if (tableau[0][0] === player && tableau[1][1] === player && tableau[2][2] === player || tableau[0][2] === player && tableau[1][1] === player && tableau[2][0] === player) {
            statut.textContent = "diagonale effectuée => gagné";
            return true;
        }
        
    }

    return false; // Aucun gagnant pour l'instant
}



btn.forEach((el) => {
    el.onclick = () => {
        const id = parseInt(el.id) - 1; // Convertit l'ID en index (1-9 => 0-8)
        const row = Math.floor(id / 3); // Ligne correspondante
        const col = id % 3; // Colonne correspondante

        // Vérifie si la case est vide
        if (tableau[row][col] === '') {
            // Met à jour le tableau logique et le bouton affiché
            const currentPlayer = tour === 0 ? player1 : player2;
            tableau[row][col] = currentPlayer;
            el.textContent = currentPlayer;

            // Vérifie si le joueur actuel a gagné
            if (win(currentPlayer)) {
                // Désactive tous les boutons après une victoire
                btn.forEach(b => (b.onclick = null));
            } else {
                // Change de joueur
                tour = 1 - tour;
                statut.textContent = `C'est au tour du joueur ${tour === 0 ? player1 : player2}`;
            }
        }
    };
});


