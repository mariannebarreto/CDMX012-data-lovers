//declaramos funciones para cada sección 
//ordenado alfabético
export const alphabeticOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name < character2.name) ? -1 : 1; //algoritmo de ordenamiento

});

//--------------------- WOMEN------------

//función para obtener data para la sección
export const femaleSeccOrder = (resultsData) => {
  const resultsFemale= [ ]
  for (let i = 0; i < resultsData.length; i++) {   //recorrer lista de datos
    if (resultsData[i].gender == "Female") {//evaluando parametro resultsdata y para indicar la posicion detro del array , gender es lo que vamos a comparar
      /*console.log(resultsData[i].name);*/
      resultsFemale.push(resultsData[i]); 
    } 
  
  }
  return resultsFemale;
}
export const femaleInfo = (results) => {
  return ( results.filter(element => element.gender == "Female")) 
}