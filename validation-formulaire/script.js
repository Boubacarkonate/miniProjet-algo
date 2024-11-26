const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const button = document.querySelector('button');
const connection = document.getElementById('connection');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');


// let longueurEmail = inputEmail.minLength = 10;
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let text = 'bonjour1@gmail.com';
// console.log(text.match(emailPattern));
// console.log(emailPattern.test(text));


// let longueurMax = 8

// const emailValidate = (fielEmail) => {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //email avec @, une extension de domaine correcte (fr, com...), et au moins 2 caracteres ou plus pour l'extension (fr; gmail...);
    
//     // const pattern = /^(?=.{8,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex idem que le dessus mais contenant le nombre de caractère minimum 8 => donc pas besoin d'utiliser la variable longueurMax

    
//   if (!fielEmail.length >= longueurMax && !fielEmail.match(emailPattern)) 
//     {
//         const p = document.createElement('p');
//         p.textContent = 'email non valide';
//         p.style.color = 'red'
//         p.style.fontSize = '12px';
//         document.getElementById('errorEmail').appendChild(p);
//   } 
// };

// const passwordValidation = (fieldPassword) => {
//     const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;  //Mot de passe avec au moins une majuscule, une minuscule, un chiffre et un caractère spécial
//     if (!fieldPassword.match(pwdPattern)) {
//         const p = document.createElement('p');
//         p.textContent = 'mot de passe non valide';
//         p.style.color = 'red'
//         p.style.fontSize = '12px';
//         document.getElementById('errorPassword').appendChild(p);
//     } 
// }

const validationConnection = (fielEmail, fieldPassword) => {
   errorEmail.innerHTML = '';
errorPassword.innerHTML = '';
connection.innerHTML = '';


    const emailPattern = /^(?=.{8,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex idem que le dessus mais contenant le nombre de caractère minimum 8 => donc pas besoin d'utiliser la variable longueurMax

    if (!fielEmail.match(emailPattern)) 
      {
          const p = document.createElement('p');
          p.textContent = 'email non valide';
          p.style.color = 'red';
          p.style.fontSize = '12px';
          document.getElementById('errorEmail').appendChild(p);
    } else{
        let span = document.createElement('span');
        span.textContent = `${fielEmail} `;
        connection.appendChild(span);
        connection.style.display = 'flex';

    }

    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;  //Mot de passe avec au moins une majuscule, une minuscule, un chiffre et un caractère spécial
    
    if (!fieldPassword.match(pwdPattern)) {
        const p = document.createElement('p');
        p.textContent = 'mot de passe non valide';
        p.style.color = 'red';
        p.style.fontSize = '12px';
        document.getElementById('errorPassword').appendChild(p);
    } else{
        let span = document.createElement('span');
        span.textContent = fieldPassword
        connection.appendChild(span);
        connection.style.display = 'flex';
    }
}

button.addEventListener('click',(e) =>{
//   let a = inputEmail.value
//     emailValidate(a);
//     let b = inputPassword.value;
//     passwordValidation(b);
let myEmail = inputEmail.value.trim();
let myPassword = inputPassword.value.trim();
    validationConnection(myEmail, myPassword);
    console.log(myEmail, myPassword);
    
    e.preventDefault();
});