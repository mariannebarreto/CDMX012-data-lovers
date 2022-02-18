//****************DECLARAMOS FUNCIONES PARA LAS SECCIONES******/

//ordenado alfabético
export const alphabeticOrder= (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name < character2.name)? -1 : 1; //algoritmo de ordenamiento
});

export const alphabeticOrderBack= (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name > character2.name)? -1 : 1;
});

// status personaje
  export const characterStatus = (data) => {
    let alive = 0;
    let dead = 0;
    let unknown = 0;
  
    data.forEach((character) => {
    switch (character.status) {
      case 'Alive':
        alive += 1;
      break;
    case 'Dead':
        dead += 1;
      break;
    case 'unknown':
        unknown += 1;
  }
  });
  return [ alive, dead, unknown ]
  }












