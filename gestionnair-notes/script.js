/*
créer un input + un buouton pour ajouter les notes 
créer et afficher (map()) un liste de notes dans un ul>li
lorsque la note est créée, on l'ajoute à la liste (dans un li créé)
chaque note est créée avec un bouton de suppression
si un note est suprimmée, alors on renvoie un nouveau liste sans cette dernière (filter())

*/

const ajoutNote = document.getElementById('ajoutNote');
const btnAjout = document.getElementById('ajout');   
const displayNote = document.getElementById('displayNote');
const moyenne = document.getElementById('moyenne');

let input = ajoutNote.value;

const notes = [];


notes.forEach((el)=>{
let li = document.createElement('li');
li.innerHTML = `<li>${el}</li>`;
displayNote.appendChild(li)
       
   
});
const created_li = (note) =>{

   let li = document.createElement('li');
   li.textContent = note;
   
   displayNote.appendChild(li);
   const boutonSup = document.createElement('button');
boutonSup.textContent =`X`;
boutonSup.style.backgroundColor = 'red';
displayNote.appendChild(boutonSup);

boutonSup.addEventListener('click', ()=>{
    li.remove();
    boutonSup.remove();
    deletedNote(li);
});

} 

const deletedNote = (note) => {
    let indexNote = notes.indexOf(note);
 notes.filter((element) => element !== note);
 notes.splice(indexNote, 1);
    console.log('removed note', notes);
    
}


btnAjout.addEventListener('click',() => {
    let inputNote = parseFloat(ajoutNote.value);
    created_li(inputNote);
    notes.push(inputNote)
    console.log(notes);
});


//moyenne => additionner toutes les notes / par le nombre de notes

const moyenneNotes = (el) => {
    let sum = parseFloat(0);
    for (let i = 0; i < notes.length; i++) {
        sum +=notes[i]
        let total = parseFloat(sum / notes.length);
        moyenne.textContent = total
    }
};
