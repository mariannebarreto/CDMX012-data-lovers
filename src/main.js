import data from './data/rickandmorty/rickandmorty.js';
import generatorHtml from "./generatorHtml.js"
import { alphabeticOrder } from "./data.js";
import { alphabeticOrderBack } from "./data.js";
import { maleOrder } from "./data.js";
import { femaleOrder } from "./data.js";
import { speciesOrder } from "./data.js";
//import { Episode } from "./data.js";

//let order = document.getElementById("order")
const resultsData = data.results;

window.addEventListener('DOMContentLoaded', () => {
    // for(let i=0;i < dataHTML.length; i++){
    let allHTML = ""
    let allCards = document.getElementById("allCards")
    resultsData.forEach(character => {
        allHTML += generatorHtml(character)
    })
    allCards.innerHTML = allHTML
    //}
});
///a z
/*order.addEventListener('change',(event)=>{
    alphabeticOrder(dataHTML)/// mandar la data aqui
    console.log("Recibi ...",event.target.value)
});*/

/*order.addEventListener('change',(event)=>{
    alphabeticOrderBack(dataHTML)/// mandar la data aqui
    console.log("Recibi ...",event.target.value)
})*/
//pruebas del domingo se comentan lineas anteriores para que funcione el filtro A-Z, se crea un boton de prueba
let allCards = document.getElementById("allCards")
let buttonTest = document.getElementById("testButton");
buttonTest.addEventListener("click", (event) => {
    let alphabeticOrderResults = alphabeticOrder(resultsData);
    let allHTML = ""
    resultsData.forEach(alphabeticOrderResults => {
        allHTML += generatorHtml(alphabeticOrderResults);
    })
    allCards.innerHTML = allHTML;
});
//boton z-a
let testButton2 = document.getElementById("testButton2");
testButton2.addEventListener("click", (event) => {
    let alphabeticOrderBackResults = alphabeticOrderBack(resultsData);
    let allHTML = ""
    resultsData.forEach(alphabeticOrderBackResults => {
        allHTML += generatorHtml(alphabeticOrderBackResults);
    })
    allCards.innerHTML = allHTML;
});
//boton Male
let testButton3 = document.getElementById("testButton3");
testButton3.addEventListener("click", (event) => {
    let maleOrderResults = maleOrder(resultsData);
    let allHTML = ""
    for (let i = 0; i < maleOrderResults.length; i++) {
        allHTML += generatorHtml(maleOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});
//boton Female
let testButton4 = document.getElementById("testButton4");
testButton4.addEventListener("click", (event) => {
    let femaleOrderResults = femaleOrder(resultsData);
    let allHTML = ""
    for (let i = 0; i < femaleOrderResults.length; i++) {
        allHTML += generatorHtml(femaleOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});
//boton Species
let testButton5 = document.getElementById("testButton5");
testButton5.addEventListener("click", (event) => {
    let speciesOrderResults = speciesOrder(resultsData, "Robot");
    let allHTML = ""
    for (let i = 0; i < speciesOrderResults.length; i++) {
        allHTML += generatorHtml(speciesOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});

//prueba del domingo --menu burger botton
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});

// prueba landingpage borrar pagina y recargarla con boton home


let buttonInicio = document.getElementById("portalInicio")
buttonInicio.addEventListener("click", (event) => {
    document.getElementById("welcomePortalContainer").innerHTML = "";
    console.log("welcomePortalContainer");
})

let buttonRegreso = document.getElementById("portalBackHome")
buttonRegreso.addEventListener("click", (event) => {
    location.reload();
    console.log("portalBackHome");

});
