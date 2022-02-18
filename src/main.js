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