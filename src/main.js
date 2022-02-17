import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/* funcion jalar seccion Male*/
import { alphabeticOrder, maleSeccOrder } from './data.js';

let resultsData = data.results;
console.log(resultsData[1].name)
alphabeticOrder ( resultsData )
for (let i = 0; i <= 10; i++){ //ciclo

    console.log(resultsData [i].name)
}
/* guardar variable de Male*/
maleSeccOrder(resultsData);//llamar a la funcion

const resultsMale = [];

resultsMale = maleSeccOrder(resultsData);//resultados se guardan en la variable


/*datos dentro de la cuadro de Male*/
/*function addCard (name, status, species, type, gender, origin, location, imagen, episode) {
    
    let card = document.getElementById("tarjeta")
    let newCard = card.cloneNode(true);

    newCard.style.display = "inline - block";
    newCard.style.margin = "1em";
    
    let nameCharacter = document.getElementById('nameCharacter'); 
    nameCharacter*/



