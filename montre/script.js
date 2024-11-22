const heure = document.querySelector('.heure');
const day = document.getElementById('jour');
const montre = () => {
    const date = new Date(); 
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    // const jour = `${date.toLocaleDateString()}`;
    const jour = date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });


  //toString pour transformer l'heure, les minutes et les secondes en chaînes de caractères. Puis, étant une châines de caractères .padStart() permettre de manipuler les string et lui ajouter 0 au début
    const formattedTime = `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;

    heure.textContent = formattedTime;
    day.textContent = jour
};

// Mettre à jour l'heure toutes les secondes
setInterval(montre, 1000);



