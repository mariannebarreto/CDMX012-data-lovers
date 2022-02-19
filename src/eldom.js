import data from './data/rickandmorty/rickandmorty.js';
import generadorHtml from "./generadorHtml.js"
import {alphabeticOrder} from './data.js';
import {alphabeticOrderBack} from "./data.js"

let ordenado = document.getElementById("ordenado")

window.addEventListener('DOMContentLoaded', () => {
    let allHTML=""
    let allCards = document.getElementById("allCards")
    data.results.forEach(character=>{
        allHTML+=generadorHtml(character)
    })
    allCards.innerHTML=allHTML
});
///a z
ordenado.addEventListener('change',(event)=>{
    alphabeticOrder(data.results)/// mandar la data aqui
    console.log("Recibi ...",event.target.value)
});

ordenado.addEventListener('change',(event)=>{
    alphabeticOrderBack(data.results)/// mandar la data aqui
    console.log("Recibi ...",event.target.value)
})
