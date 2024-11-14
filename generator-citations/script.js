                            ////// ASYNC AWAIT ////

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
//             method: 'GET',
//             headers: { 'X-Api-Key': 'AKpmxkZ5MOBW6Bn82Sp4Fg==GsEafaAIwfVCLszX' }
//         });

//         if (!response.ok) throw new Error(`Erreur : ${response.status}`);

//         const data = await response.json(); // Ajout des parenthèses pour appeler la méthode
//         console.log(data[0].quote);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//     }
// }

// fetchData();

                                                                    ////// AXIOS ASYNC AWAIT ////

// const fetchDataAxiosAsync = async () => {
//     try {
//         const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
//             headers: { 'X-Api-Key': 'AKpmxkZ5MOBW6Bn82Sp4Fg==GsEafaAIwfVCLszX' }
//         });

//         const data = response.data;
//         console.log(data);
//     } catch (error) {
//         console.error("Erreur lors de la récupération des données :", error);
//     }
// };

// fetchDataAxiosAsync();

                                                                    ////// AXIOS THEN ////
const apiKey = 'AKpmxkZ5MOBW6Bn82Sp4Fg==GsEafaAIwfVCLszX';

const fetchDataAxiosThen = () => {
    axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key':  apiKey}
    })
    .then(response => {
        const data = response.data;
     // Vider l'ancienne citation (si existante)
     div.innerHTML = '';

     // Créer un paragraphe pour la nouvelle citation
     let paragraphe = document.createElement('p');
     paragraphe.textContent = data[0].quote + " - " + data[0].author; // Ajoute l'auteur
     div.appendChild(paragraphe);
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
    });
};




const div = document.getElementById('citation');
const btn = document.querySelector('button');

btn.addEventListener('click', fetchDataAxiosThen);