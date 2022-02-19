import data from './data/rickandmorty/rickandmorty.js';
import generatorHtml from "./generatorHtml.js"
import {alphabeticOrder} from './data.js';
import {alphabeticOrderBack} from "./data.js"

let order = document.getElementById("order")
const dataHTML = data.results; 

window.addEventListener('DOMContentLoaded', () => {
    for(let i=0;i < dataHTML.length; i++){
    let allHTML=""
    let allCards = document.getElementById("allCards")
    dataHTML.forEach(character=>{
        allHTML+=generatorHtml(character)
    })
    allCards.innerHTML=allHTML
}});
///a z
order.addEventListener('change',(event)=>{
    alphabeticOrder(dataHTML)/// mandar la data aqui
    console.log("Recibi ...",event.target.value)
});

order.addEventListener('change',(event)=>{
    alphabeticOrderBack(dataHTML)/// mandar la data aqui
    console.log("Recibi ...",event.target.value)
})
