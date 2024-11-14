const input = document.querySelector('input');
const btnCreateTask = document.getElementById('creer');
const btnModifyTask = document.getElementById('modifier');
const btnDeleteTask = document.getElementById('supprimer');
const task = document.getElementById('tache');

let taskToEdit = null;
                                                             ///////////////////////////////////

// Fonction pour obtenir la date locale en français
const getDateLocale = () => {
    return new Date().toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
};
                                                             ///////////////////////////////////

// Fonction pour créer un élément de liste de tâches
const createItem = () => {
    const valueReceived = input.value.trim();
    if (!valueReceived) return; // Empêche la création de tâches vides
    
    const displayValue = document.createElement('li');
    displayValue.textContent = `${valueReceived} - ${getDateLocale()}`;

                                                               ///////////////////////////////////
  
   
    // Ajout d'un événement de clic sur chaque tâche pour la sélectionner
    displayValue.addEventListener('click', () => {
        taskToEdit = displayValue;
        input.value = taskToEdit.textContent.split(' - ')[0];
        console.log('tâche selectionnée');
    });
    
    task.appendChild(displayValue);
    input.value = '';
    taskToEdit = null;
};
                                                             ///////////////////////////////////


// Gérer la création et la modification de tâches
btnCreateTask.addEventListener('click', () => {
    if (taskToEdit) {
        const valueReceived = input.value.trim();
        if (!valueReceived) return; // Empêche la modification si l'input est vide
        
        taskToEdit.textContent = `${valueReceived} - ${getDateLocale()}`;
        input.value = '';
        taskToEdit = null;
    } else {
        createItem();
    }
});
                                                             ///////////////////////////////////


// Fonction pour supprimer la tâche sélectionnée
const deleteItem = () => {
    if (taskToEdit) {
        taskToEdit.remove();
        taskToEdit = null;
        input.value = '';
    } else {
        alert("Veuillez sélectionner une tâche à supprimer.");
    }
};

btnDeleteTask.addEventListener('click', deleteItem);

                                                             ///////////////////////////////////
// Fonction pour activer la modification d'une tâche
btnModifyTask.addEventListener('click', () => {
    if (taskToEdit) {
        input.value = taskToEdit.textContent.split(' - ')[0];
      
    } else {
        alert("Veuillez sélectionner une tâche à modifier.");
    }
});
