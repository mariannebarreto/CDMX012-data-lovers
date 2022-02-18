import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/

/* funcion jalar seccion Male*/
import { alphabeticOrder, maleSeccOrder, maleInfo } from './data.js';

let resultsData = data.results;
/*console.log(resultsData[1].name)*/
alphabeticOrder ( resultsData )
for (let i = 0; i <= 10; i++){ //ciclo

    /*console.log(resultsData [i].name)*/
}
/* guardar variable de Male*/
maleSeccOrder(resultsData);//llamar a la funcion

const resultsMale = [];

 /*resultsMale = maleSeccOrder(resultsData);//resultados se guardan en la variable*/

let maleData = document.getElementById("men");

let maleHtml = ``

let maleFilter = maleInfo(resultsData);

/*maleFilter.forEach(girls=>{
    
    maleHtml += '<h3>${girls.name}</h3>'

    
});*/
maleFilter.forEach(movie=>{
    maleHtml+=`<article><h3>${movie.name}</h3></article>`
})

maleData.innerHTML = maleHtml;



//*************************SEGUNDA OPCIÓN CÓDGIO***************************/

//declaramos de donde obtendremos nuestra data

import data from './data/rickandmorty/rickandmorty.js';
import {alphabeticOrder} from './data.js';

const resultsData = data.results;    
const abcOrder= alphabeticOrder; 


window.onload = function reviewData() {    // esta funcion se ejecuta en cada recarga de la pagina
    for(let i=0;i < resultsData.length; i++){            //recorremos la data (++)
       const cardName    = resultsData[i]["name"];            //accede a los datos especificos en el array en este caso name y los guarda en la nueva variable
       const cardStatus    = resultsData[i].status;
       const cardOrigin    = resultsData[i].origin.name;
       const cardGender    = resultsData[i].gender;
       const cardEpisode = resultsData[i].episode.length;
       const cardImage    = resultsData[i].image;
       const cardSpecies  = resultsData[i].species;
       cloneData(cardName,cardStatus, cardOrigin, cardGender, cardImage, cardEpisode, cardSpecies) //ejecutamos la funcion clonar con los datos del parametro
    }
   document.getElementById("card").style.display="none"
   
  }

  function cloneData(cardName,cardStatus, cardOrigin, cardGender, cardImage, cardEpisode, cardSpecies) {//Creamos esta función declarando los parametros a usar
  
    var container = document.getElementById("card");//reservamos un id en html
    var clone= container.cloneNode(true);        //a contenedor le aplicamos el metodo cloneNode para clonar
  
    clone.style.display = "inline-block";       //aplicamos un estilo display y una margen para los nuevos div´s
    clone.style.margin = "1em"

     //variable para el contenedor de las tarjetas
    let cardContainer =document.getElementById("cardContainer");
    cardContainer.appendChild(clone);  
    
    //variables para los datos dentro de cada tarjeta

    let characterName = document.getElementById("characterName");//reservamos un id en html
    characterName.innerHTML = cardName               //imprimimos el dato requerido
    
    let characterStatus = document.getElementById("characterStatus");
    characterStatus.innerHTML = "Status: "+ cardStatus
  
    let characterOrigin = document.getElementById("characterOrigin");
    characterOrigin.innerHTML  = "Origin: "+ cardOrigin
                     
    let numberEpisodes = document.getElementById("numberEpisodes");
    numberEpisodes.innerHTML = "Number of episodes: "+ cardEpisode
     
    let characterGender = document.getElementById("characterGender");
    characterGender.innerHTML = "Gender: "+ cardGender
  
    let characterSpecie = document.getElementById("characterSpecie");
    characterSpecie .innerHTML  = "Specie: "+ cardSpecies
  
    document.getElementById("characterImg").src = cardImage
  }

  //*******************SPECIES SECTION*******************/