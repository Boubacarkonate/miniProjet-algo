let tva = document.getElementById('tva');
let prixHt = document.getElementById('prixHT');
const btn_ttc = document.getElementById('btnTTC');
const resultat = document.getElementById('resultat');

btn_ttc.addEventListener('click',(e) => {
    resultat.innerHTML = '';
    let total = parseFloat(((tva.value * prixHt.value) / 100)) + parseFloat((prixHt.value));
    const p = document.createElement('p');
    p.textContent = `Prix TTC : ${total}€`;
    resultat.appendChild(p);
    e.preventDefault();
});



const result = document.getElementById('result');
const bouton = document.getElementById('calcul');
const prix_ht = document.getElementById('prix_ht');
let choix_tva = document.getElementById('choix-tva');

bouton.addEventListener('click', (e) => {
    result.innerHTML = '';
   let choiceSelected = choix_tva.options[choix_tva.selectedIndex].value
    let total = parseFloat((choiceSelected * prix_ht.value) / 100) + parseFloat(prix_ht.value);
    const p = document.createElement('p');
    p.textContent = `Prix TTC : ${total}€`;
    result.appendChild(p);
    e.preventDefault();
    
});