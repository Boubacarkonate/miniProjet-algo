const numberMin = document.getElementById('numberMin');
const numberMax = document.getElementById('numberMax');
const longueurArray = document.getElementById('longueurArray');

const array = document.querySelector('#array ul');
const btnDisplayArray = document.getElementById('displayArray');

const btnTriGrand_au_petit = document.getElementById('tri+');
const displayGrand_au_petit = document.querySelector('#plusGrand_au_plusPetit ul');

const btnTriPetit_au_grand = document.getElementById('tri-');
const displayPetit_au_grand  = document.querySelector('#plusPetit_au_plusGrand ul'); 


const tableau = [];


const numberRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const displayArray = () => {
    tableau.forEach((element) => {
        const li  = document.createElement('li');
        li.textContent = element
        array.appendChild(li);
    })
}

btnDisplayArray.addEventListener('click',()=>{
    let valueMin = parseInt(numberMin.value);
let valueMax = parseInt(numberMax.value);
let nbrArray = parseInt(longueurArray.value);
const numberRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
    for (let i = 1; i <= nbrArray; i++) {
        let random = numberRandom(valueMin,valueMax);
        tableau.push(random);
    }
    
    displayArray();
});

btnTriGrand_au_petit.addEventListener('click',()=>{
    tableau.sort((a,b)=>{
        //return a-b;   du plus petit au plus grand
        return b-a;  //du plus grand au plus petit
    })
    tableau.forEach((el)=> {
        const li = document.createElement('li');
        li.textContent = el
        displayGrand_au_petit.appendChild(li);
    })
});

btnTriPetit_au_grand.addEventListener('click', ()=>{
    tableau.sort((a,b)=>{
        return a-b;   //du plus petit au plus grand
       // return b-a;  du plus grand au plus petit
    })
    tableau.forEach((el)=>{
        const li = document.createElement('li');
        li.textContent = el;
        displayPetit_au_grand.appendChild(li);
    })
});

function restart(){
    numberMin.value = '';
    numberMax.value = '';
    array.innerHTML = '';
    displayGrand_au_petit.innerHTML = '';
    displayPetit_au_grand.innerHTML = '';

    
}











// const tab = tableau.filter(()=>{
//     tableau.sort((a,b)=>{
//         //return a-b;   du plus petit au plus grand
//         return b-a;  //du plus grand au plus petit
//     })
// })