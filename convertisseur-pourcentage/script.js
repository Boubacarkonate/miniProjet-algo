const formCalculNombre = document.getElementById('calculNombre');

let pourcentage1 = document.querySelector('.pourcentage1');
let nombre1 = document.querySelector('.nombre1');
let pourcentage2 = document.querySelector('.pourcentage2');
let nombre2 = document.querySelector('.nombre2');
let nombre3 = document.querySelector('.nombre3');
let pourcentage3 = document.querySelector('.pourcentage3');
let nombreTotal4 = document.querySelector('.nombreTotal4');
let nombre4 = document.querySelector('.nombre4');

const btn = document.querySelector('.bouton');
const btnAugmentation = document.querySelector('.boutonAugmentation');
const btnDiminution = document.querySelector('.boutonDiminution');
const btnConversionPourcentageNombre = document.querySelector('.conversionPourcentageNombre');

const result = document.querySelector('.resultat');
const resultatAugmentation = document.querySelector('.resultatAugmentation');
const resultatDiminution = document.querySelector('.resultatDiminution');
const resultatConversionPourcentageNombre = document.querySelector('.resultatConversionPourcentageNombre');


btn.addEventListener('click',(e)=>{ 
  result.innerHTML = '';
  if (isNaN(pourcentage3.value) || isNaN(nombre3.value) || pourcentage3.value === "" || nombre3.value === "") {
    alert("Veuillez entrer des valeurs valides pour le pourcentage et le nombre.");
    return;
}
    let total = parseFloat((pourcentage1.value * nombre1.value) / 100);
    const p = document.createElement('p');
    p.textContent = `${pourcentage1.value}% de ${nombre1.value} est égal à ${total.toFixed(2)}`;
   result.appendChild(p);
    e.preventDefault();
 })

btnAugmentation.addEventListener('click', (e)=> {
  resultatAugmentation.innerHTML = '';
  if (isNaN(pourcentage3.value) || isNaN(nombre3.value) || pourcentage3.value === "" || nombre3.value === "") {
    alert("Veuillez entrer des valeurs valides pour le pourcentage et le nombre.");
    return;
}
    let total = parseFloat((1 + pourcentage2.value / 100) * nombre2.value);
    const p = document.createElement('p');
    p.textContent = `Une augmentation de ${pourcentage2.value}% du nombre ${nombre2.value} représente ${total.toFixed(2)}`;
   resultatAugmentation.appendChild(p);
    e.preventDefault();
})

btnDiminution.addEventListener('click', (e)=> {
  resultatDiminution.innerHTML = '';
  if (isNaN(pourcentage3.value) || isNaN(nombre3.value) || pourcentage3.value === "" || nombre3.value === "") {
    alert("Veuillez entrer des valeurs valides pour le pourcentage et le nombre.");
    return;  //Avec return;, la fonction s'arrête immédiatement après l'alerte si la condition est vraie. Si je l'enlève le code de la fonction s'exécutera avec des valeurs non introduites.
}
    let total = parseFloat((1 - pourcentage3.value / 100) * nombre3.value);
    const p = document.createElement('p');
    p.textContent = `Une diminution de ${pourcentage3.value}% du nombre ${nombre3.value} représente ${total.toFixed(2)}`;
   resultatDiminution.appendChild(p);
    e.preventDefault(e);
    
})

btnConversionPourcentageNombre.addEventListener('click', (e)=> {
  resultatConversionPourcentageNombre.innerHTML = '';
//   if (isNaN(nombreTotal4.value) || isNaN(nombre4.value) || nombreTotal4.value === "" || nombre4.value === "") {
//     alert("Veuillez entrer des valeurs valides pour le pourcentage et le nombre.");
//     return;
// }
    let total = parseFloat((nombre4.value / nombreTotal4.value) * 100);
    const p = document.createElement('p');
    p.textContent = `${nombre4.value} représente ${total.toFixed(2)}% de ${nombreTotal4.value} `;
    resultatConversionPourcentageNombre.appendChild(p);
    e.preventDefault();
    
})
