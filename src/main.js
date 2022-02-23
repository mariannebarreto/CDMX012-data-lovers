import data from './data/rickandmorty/rickandmorty.js';
import generatorHtml from "./generatorHtml.js"
import { alphabeticOrder } from "./data.js";
import { alphabeticOrderBack } from "./data.js";
import { maleOrder } from "./data.js";
import { femaleOrder } from "./data.js";
import { speciesOrder } from "./data.js";


//-----------------CONSTANTE para el llamado de todas las tajetas de personajes
const resultsData = data.results;

window.addEventListener('DOMContentLoaded', () => {
   
    let allHTML = ""
    let allCards = document.getElementById("allCards")
    resultsData.forEach(character => {
        allHTML += generatorHtml(character)
    })
    allCards.innerHTML = allHTML
 
});

//pruebas del domingo se comentan lineas anteriores para que funcione el filtro A-Z, se crea un boton de prueba
//a-z
let allCards = document.getElementById("allCards")
let abcOrderLi = document.getElementById("abcOrder");
abcOrderLi.addEventListener("click", (event) => { // eslint-disable-line

    let alphabeticOrderResults = alphabeticOrder(resultsData); // eslint-disable-line

    let allHTML = ""
    resultsData.forEach(alphabeticOrderResults => {
        allHTML += generatorHtml(alphabeticOrderResults);
    })
    allCards.innerHTML = allHTML;
});


//boton z-a
let cbaOrderLi = document.getElementById("cbaOrder");
cbaOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let alphabeticOrderBackResults = alphabeticOrderBack(resultsData);// eslint-disable-line
    let allHTML = ""
    resultsData.forEach(alphabeticOrderBackResults => {
        allHTML += generatorHtml(alphabeticOrderBackResults);
    })
    allCards.innerHTML = allHTML;
});


//boton Male
let maleOrderLi = document.getElementById("maleOrder");
maleOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let maleOrderResults = maleOrder(resultsData);
    let allHTML = ""
    for (let i = 0; i < maleOrderResults.length; i++) {
        allHTML += generatorHtml(maleOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});


//boton Female
let femaleOrderLi = document.getElementById("femaleOrder");
femaleOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let femaleOrderResults = femaleOrder(resultsData);
    let allHTML = ""
    for (let i = 0; i < femaleOrderResults.length; i++) {
        allHTML += generatorHtml(femaleOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});


//boton Species
let testButton5 = document.getElementById("testButton5");
testButton5.addEventListener("click", (event) => { // eslint-disable-line

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


let buttonEnter = document.getElementById("portalEnter")

buttonEnter.addEventListener("click", (event) => { // eslint-disable-line

    document.getElementById("welcomePortalContainer").innerHTML = "";
    console.log("welcomePortalContainer");
})

let buttonBack = document.getElementById("portalBackHome")
buttonBack.addEventListener("click", (event) => { // eslint-disable-line

    location.reload();
    
    console.log("portalBackHome");

});

let speciesBox= document.getElementById("speciesBox")
speciesBox.addEventListener("change", (event) => {// eslint-disable-line

    let speciesFilterResults = speciesOrder(resultsData, speciesBox.value)
    let allHTML = " "
       for (let i = 0; i < speciesFilterResults.length; i++){
        allHTML += generatorHtml(speciesFilterResults[i]);
    }
    allCards.innerHTML = allHTML;
 });