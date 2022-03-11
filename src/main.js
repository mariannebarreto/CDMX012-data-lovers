import data from './data/rickandmorty/rickandmorty.js';
import generatorHtml from "./generatorHtml.js"
import { alphabeticOrder } from "./data.js";
import { alphabeticOrderBack } from "./data.js";
import { maleOrder } from "./data.js";
import { femaleOrder } from "./data.js";
import { speciesOrder } from "./data.js";
import { relevanceOrder } from "./data.js";
import { computeFemale } from './data.js';


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

    let alphabeticOrderResults = alphabeticOrder(resultsData); // eslint-disable-line//
    let allHTML = "";
    for (let i = 0; i < alphabeticOrderResults.length; i++) {
        allHTML += generatorHtml(alphabeticOrderResults[i]);
    }
    allCards.innerHTML = allHTML;
});



//------------CBA ORDEN------------
let cbaOrderLi = document.getElementById("cbaOrder");
cbaOrderLi.addEventListener("click", (event) => {// eslint-disable-line

    let alphabeticOrderBackResults = alphabeticOrderBack(resultsData);// eslint-disable-line
    let allHTML = "";
    for (let i = 0; i < alphabeticOrderBackResults.length; i++) {
        allHTML += generatorHtml(alphabeticOrderBackResults[i]);
    }

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

//-------------BOX DE ESPECIES-----------
let speciesBox = document.getElementById("speciesBox")
speciesBox.addEventListener("change", (event) => {// eslint-disable-line

    let speciesFilterResults = speciesOrder(resultsData, speciesBox.value)
    let allHTML = " "
    for (let i = 0; i < speciesFilterResults.length; i++) {
        allHTML += generatorHtml(speciesFilterResults[i]);
    }
    allCards.innerHTML = allHTML;
});


//-----BOTONES-------


//*****BOTON INGRESO PAG */

function enterSite() {
    let screenPortal = document.getElementById("welcomePortalContainer");
    screenPortal.style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}
document.getElementById("portalEnter").onclick = function () { enterSite() };

//*****BOTÓN DE REGRESO*****/
function backSite() {
    let screenMain = document.getElementById("mainPage");
    screenMain.style.display = "none";
    document.getElementById("welcomePortalContainer").style.display = "block";
}

document.getElementById("portalBackHome").onclick = function () { backSite() };


//****BOTÓN UP ********/
let buttonUp = document.getElementById("myBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonUp.style.display = "block";
    } else {
        buttonUp.style.display = "none";
    }
};

buttonUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//------- SECCION DE CÁLCULOS-------//

let femalePercent = computeFemale(resultsData);
document.getElementById("computeFemale").innerHTML = `Did you know that ${parseInt(femalePercent)}% of the characters are female?`;


//***** SECCION DE TOP TEN CHART*/

let top10orderLi = document.getElementById("top10order")
top10orderLi.addEventListener("click", (event) => { // eslint-disable-line
    let topTenChartSeccion = relevanceOrder(resultsData);
    let namesChart = []
    let episodesChart = []
    for (let i = 0; i < 9; i++) {
        namesChart.push(topTenChartSeccion[i].name);
        episodesChart.push(topTenChartSeccion[i].episode.length);
    }
    let topTenChart = document.getElementById("topTenChart")
    const topTenChartResults = new Chart(topTenChart, { // eslint-disable-line
        type: "pie",
        data: {
            labels: namesChart,
            datasets: [{
                Label: "Episodios de aparición",
                data: episodesChart,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',

                ],
                borderWidth: 1


            }]
        },
        options: {

            scales: {
                y: {
                    begInAtZero: true

                }
            }
        }
    });

    let topTenResults = relevanceOrder(resultsData); // eslint-disable-line
    let allHTML = ""
    for (let i = 0; i < 10; i++) {
        allHTML += generatorHtml(topTenResults[i]);
    }

    allCards.innerHTML = allHTML;

});