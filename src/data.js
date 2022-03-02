//****************DECLARAMOS FUNCIONES PARA LAS SECCIONES******/
//ordenado alfabético 
export const alphabeticOrder = (resultsData) => {
  return [].slice.call(resultsData).sort((character1, character2) => {
    return (character1.name < character2.name) ? -1 : 1; //algoritmo de ordenamiento
  });
};

//ordenado alfabético de regreso
export const alphabeticOrderBack = (resultsData) => {
  return [].slice.call(resultsData).sort((character1, character2) => {
    return (character1.name > character2.name) ? -1 : 1; //algoritmo de ordenamiento
  });
};

// ordenado hombres
export const maleOrder = (resultsData) => {
  const resultsMale = []
  for (let i = 0; i < resultsData.length; i++) {   //recorrer lista de datos
    if (resultsData[i].gender == "Male") {//evaluando parametro resultsdata y para indicar la posicion detro del array , gender es lo que vamos a comparar
      resultsMale.push(resultsData[i]); //variable donde se guardan los resultados de male
    }
  }
  return resultsMale;
}


//ordenado mujeres
export const femaleOrder = (resultsData) => {
  const resultsFemale = []
  for (let i = 0; i < resultsData.length; i++) {
    if (resultsData[i].gender == "Female") {
      resultsFemale.push(resultsData[i]);
    }
  }
  return resultsFemale;
}


//ordenado especies
export const speciesOrder = (resultsData, specie) => {
  const resultsSpecies = []
  for (let i = 0; i < resultsData.length; i++) {
    if (resultsData[i].species == specie) {
      resultsSpecies.push(resultsData[i]);
    }
  }
  return resultsSpecies;
}



// Cálculo género de personajes

export const genderCh= (resultsData) => {
  let maleCh= 0;
  let femaleCh= 0;

  resultsData.forEach((character) => {switch (character.gender) {
      case 'Male':
        maleCh += 1;
      break;
    case 'Female':
        femaleCh += 1;
  }
  });
  return [ maleCh,femaleCh]
} 



//Claculo del top 10 personajes que salen en la serie

/*export const relevanceOrder = (resultsData) => {
  return [].slice.call(resultsData).sort((character1, character2) => {
    return (character2.episode.length - character1.episode.length) ? -1 : 1;// de mayor a menor top ten
  });
};*/
export const relevanceOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character2.episode.length - character1.episode.length);// de mayor a menor top ten
});

