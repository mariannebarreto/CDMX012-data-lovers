export default function generadorHtml(unpersonaje){
    return `<div  class="cardContainer" >   
    <div class="card" >
   <h3 id="characterName">${unpersonaje.name}</h3>
   <img  src="${unpersonaje.image}" width= 100 height= 100>
    <span class="characterData" id="characterData">
     <h4 id="characterStatus">${unpersonaje.status}</h4>
     <h4 id="characterOrigin">${unpersonaje.origin.name}</h4>
     <h4 id="characterGender">${unpersonaje.gender}</h4>
     <h4 id="characterSpecie">${unpersonaje.species}</h4>
     <h4 id="numberEpisodes">${unpersonaje.episode.length}</h4> 
   </span>
 </div>   
   </div>`
}