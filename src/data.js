//****************DECLARAMOS FUNCIONES PARA LAS SECCIONES******/

//ordenado alfabético
export const alphabeticOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name < character2.name) ? -1 : 1; //algoritmo de ordenamiento
});


//ordenado alfabético de regreso
export const alphabeticOrderBack = (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name > character2.name) ? -1 : 1;
});

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




/*export const speciesOrder = (resultsData) => {
  const resultsSpecies = []
  for (let i = 0; i < resultsData.length; i++) {
    if (resultsData[i].results == "Species") {//evaluando parametro resultsdata y para indicar la posicion detro del array , gender es lo que vamos a comparar
      /*console.log(resultsData[i].name);
      resultsMale.push(resultsData[i]); //variable donde se guardan los resultados de male
    }
  }
  return resultsMale;
}*/


