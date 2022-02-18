//declaramos de donde obtendremos nuestra data
import data from './data/rickandmorty/rickandmorty.js';

//------------WOMEN|| FEMALE DATA--------------

// importamos funciones para obtener data FEMALE
import { alphabeticOrder, femaleSeccOrder, femaleInfo } from './data.js';
//declaramos variables
let resultsData = data.results;
alphabeticOrder ( resultsData )
for (let i = 0; i <= 10; i++){ //ciclo

}
//guarda variable de FEMALE
femaleSeccOrder(resultsData);//llamar a la funcion

 /*resultsFemale = maleSeccOrder(resultsData);//resultados se guardan en la variable*/

let femaleData = document.getElementById("women");
let femaleHtml = ``
let femaleFilter = femaleInfo(resultsData);

/*maleFilter.forEach(girls=>{
    
    maleHtml += '<h3>${girls.name}</h3>'
    
});*/
femaleFilter.forEach(women=>{
    femaleHtml+=`<article><h3>${women.name}</h3></article>`
    
})
femaleData.innerHTML = femaleHtml;


