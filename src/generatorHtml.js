export default function generatorHtml(aCharacter){
  return `<div  class="cardContainer" >   
  <div class="card" >
 <h3 id="characterName">Name: ${aCharacter.name}</h3>
 <img  src="${aCharacter.image}" width= 100 height= 100>
  <span class="characterData" id="characterData">
   <h4 id="characterStatus"> Status: ${aCharacter.status}</h4>
   <h4 id="characterOrigin">Origin: ${aCharacter.origin.name}</h4>
   <h4 id="characterGender">Gender: ${aCharacter.gender}</h4>
   <h4 id="characterSpecie">Specie: ${aCharacter.species}</h4>
   <h4 id="numberEpisodes">Episodes: ${aCharacter.episode.length}</h4> 
 </span>
</div>   
 </div>`
}

/***** ver cómo generar la función del menú****
 
export function menuNav(){.......
 return ..........
}*/