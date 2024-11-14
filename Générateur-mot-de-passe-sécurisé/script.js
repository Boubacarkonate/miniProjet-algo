const div = document.getElementById('generer');
const btn = document.querySelector('button');

const characters = 'ABCDEFGHIJK123456789./-*+#LMN@abcdefghijklmnopZzYxXQRST';
console.log('total : ',characters.length);


function generate(length) {
let result = '';
for (let i = 0; i < length; i++) {
    
   result += characters.charAt( Math.floor(Math.random()*characters.length));
}

return result;
}

btn.addEventListener('click', () => {
    const randomText = generate(30);  // Génère une nouvelle chaîne aléatoire de 30 caractères
    div.innerHTML = '';  // Efface le contenu précédent du div
    const p = document.createElement('p');
    p.textContent = randomText;
    div.appendChild(p); 
    const btnCopy = document.createElement('button');
btnCopy.textContent = 'Copier';
div.appendChild(btnCopy);
function copyPassword(){
    navigator.clipboard.writeText(p.textContent)
        .then(()=> {
            alert(`mot de passe copié : ${p.textContent}`);
        })
}
btnCopy.addEventListener('click', copyPassword);

}
    
)

