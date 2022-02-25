//****************DECLARAMOS FUNCIONES PARA LAS SECCIONES******/

//ordenado alfabético
/*export const alphabeticOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name < character2.name) ? -1 : 1; //algoritmo de ordenamiento
});*/
export const alphabeticOrder = (resultsData) => {
  let testArray = [];//declaro un array vacio
  for (let i = 0; i < resultsData.length; i++) {// recorro cadena de array
    testArray.push(resultsData[i]);//se declara un nuevo array para que se pueda pasar todos los datos y pueda encuentrar sort es funcion de la clase array pero resultData es un argumento y sort no aplica ahi
  }
  return testArray.sort((character1, character2) => {
    return (character1.name < character2.name) ? -1 : 1; //algoritmo de ordenamiento
  });
};


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

//Claculo del top 10 personajes que salen en la serie

export const relevanceOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character2.episode.length - character1.episode.length);// de mayor a menor top ten
});


