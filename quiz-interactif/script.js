const questionnaire = document.querySelector('#questionnaire');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const resultat = document.getElementById('resultat');
const start = document.getElementById('start');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const question1 = document.querySelectorAll('input[name="question1"]');
const question2 = document.querySelectorAll('input[name="question2"]');
const question3 = document.querySelectorAll('input[name="question3"]');
const question4 = document.querySelectorAll('input[name="question4"]');



questionnaire.style.visibility = 'hidden';


let total = 0


start.addEventListener('click', () =>{
    // document.getElementById('restart').innerHTML = '';
    first.style.visibility = 'visible';
    console.log('Question 1 affichée');
});

question1.forEach((choice) => {
    choice.addEventListener('click', () => {
        let point = 1
        if (choice.value === 'vrai') {
            total += point;
            console.log(total);
            
        } else {
            let p = document.createElement('p');
            p.textContent = 'vous avez fait une erreur';
            p.style.color='red';
            p.style.fontSize='12 px'
            document.querySelector('#first div').appendChild(p)
            
        }
    });
})


btn1.addEventListener('click', (e) =>{
    e.preventDefault();
    second.style.visibility = 'visible';
    first.style.display = 'none';
    
});

question2.forEach((choice) => {
    choice.addEventListener('click', () => {
        let point = 1
        if (choice.value === 'faux') {
            total += point;
            console.log(total);
            
        } else {
            let p = document.createElement('p');
            p.textContent = 'vous avez fait une erreur';
            p.style.color='red';
            p.style.fontSize='12 px'
            document.querySelector('#second div').appendChild(p)
            
        }
        
    });
})

btn2.addEventListener('click', (e) =>{
    e.preventDefault();
    third.style.visibility = 'visible';
    second.style.display = 'none';
  
   
});

question3.forEach((choice) => {
    choice.addEventListener('click', () => {
        let point = 1
        if (choice.value === 'vrai') {
            total += point;
            console.log(total);
            
        } else {
            let p = document.createElement('p');
            p.textContent = 'vous avez fait une erreur';
            p.style.color='red';
            p.style.fontSize='12 px'
            document.querySelector('#third div').appendChild(p)
            
        }
        
    });
})

btn3.addEventListener('click', (e) =>{
    e.preventDefault();
    fourth.style.visibility = 'visible';
    third.style.display = 'none';   
});

question4.forEach((choice) => {
    choice.addEventListener('click', () => {
        let point = 1
        if (choice.value === 'faux') {
            total += point;
            console.log(total);
            
        } else {
            let p = document.createElement('p');
            p.textContent = 'vous avez fait une erreur';
            p.style.color='red';
            p.style.fontSize='12 px'
            document.querySelector('#fourth div').appendChild(p)
            
        }
        
    });
})


btn4.addEventListener('click', (e) =>{
    e.preventDefault();
    fourth.style.display = 'none';
    resultat.textContent = `le résultat est ${total}`;
    // let button = document.createElement('button');
    // button.textContent = 'recommencer';
    // document.getElementById('restart').appendChild(button);
    // button.addEventListener('click', () => {
    //    resultat.textContent ='';
    //    first.innerHTML = '';
    //    second.innerHTML = '';
    //    third.innerHTML = '';
    //    fourth.innerHTML = '';
               
        
    // });

});

