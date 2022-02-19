export default function generatorHtml(unpersonaje){
    return `<div  class="cardContainer" >   
    <div class="card" >
   <h3 id="characterName">Name: ${unpersonaje.name}</h3>
   <img  src="${unpersonaje.image}" width= 100 height= 100>
    <span class="characterData" id="characterData">
     <h4 id="characterStatus"> Status: ${unpersonaje.status}</h4>
     <h4 id="characterOrigin">Origin: ${unpersonaje.origin.name}</h4>
     <h4 id="characterGender">Gender: ${unpersonaje.gender}</h4>
     <h4 id="characterSpecie">Specie: ${unpersonaje.species}</h4>
     <h4 id="numberEpisodes">Episodes: ${unpersonaje.episode.length}</h4> 
   </span>
 </div>   
   </div>`
}