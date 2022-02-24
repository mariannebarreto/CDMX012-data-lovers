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


// CONSTANTE MADRE --------
let allCards = document.getElementById("allCards")

//-----ABC ORDEN---------
let abcOrderLi = document.getElementById("abcOrder");
abcOrderLi.addEventListener("click", (event) => { // eslint-disable-line

    let alphabeticOrderResults = alphabeticOrder(resultsData); // eslint-disable-line
    let allHTML = ""
    resultsData.forEach(alphabeticOrderResults => {
        allHTML += generatorHtml(alphabeticOrderResults);
    })
    allCards.innerHTML = allHTML;
});


//------------CBA ORDEN------------
let cbaOrderLi = document.getElementById("cbaOrder");
cbaOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let alphabeticOrderBackResults = alphabeticOrderBack(resultsData);// eslint-disable-line
    let allHTML = ""
    resultsData.forEach(alphabeticOrderBackResults => {
        allHTML += generatorHtml(alphabeticOrderBackResults);
    })
    allCards.innerHTML = allHTML;
});


//----------MALE ORDER----------------
let maleOrderLi = document.getElementById("maleOrder");
maleOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let maleOrderResults = maleOrder(resultsData);
    let allHTML = ""
    for (let i = 0; i < maleOrderResults.length; i++) {
        allHTML += generatorHtml(maleOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});


//----FEMALE ORDER---------------
let femaleOrderLi = document.getElementById("femaleOrder");
femaleOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let femaleOrderResults = femaleOrder(resultsData);
    let allHTML = ""
    for (let i = 0; i < femaleOrderResults.length; i++) {
        allHTML += generatorHtml(femaleOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});

//-------------BOX DE ESPECIES-----------cambiar a menú vertical 
let speciesBox= document.getElementById("speciesBox")
speciesBox.addEventListener("change", (event) => {// eslint-disable-line

    let speciesFilterResults = speciesOrder(resultsData, speciesBox.value)
    let allHTML = " "
       for (let i = 0; i < speciesFilterResults.length; i++){
        allHTML += generatorHtml(speciesFilterResults[i]);
    }
    allCards.innerHTML = allHTML;
 });


//*****BOTON INGRESO PAG */

function enterSite (){
    let screenPortal = document.getElementById("welcomePortalContainer");
    screenPortal. style.display = "none";
    document.getElementById("mainPage").style.display= "block";
}
document.getElementById("portalEnter").onclick = function() {enterSite()};

//*****BOTÓN DE REGRESO*****/
function backSite(){
    let screenMain = document.getElementById("mainPage");
    screenMain. style.display = "none";
    document.getElementById("welcomePortalContainer").style.display= "block";
  }
  
  document.getElementById("portalBackHome").onclick = function() {backSite()};





//******************OPCION 1 DE ELI PARA EL SHOW AND HIDE****/


//***let buttonEnter = document.getElementById("portalEnter");****

//**buttonEnter.addEventListener("click", (event) => { // eslint-disable-line

    //**document.getElementById("welcomePortalContainer").innerHTML = "";
    //**console.log("welcomePortalContainer");
//**})

//**let buttonBack = document.getElementById("portalBackHome")
//**buttonBack.addEventListener("click", (event) => { // eslint-disable-line

// *});
