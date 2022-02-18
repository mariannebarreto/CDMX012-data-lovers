// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

/*aquí comienza mi prueba-eli*/
export const alphabeticOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name < character2.name) ? -1 : 1; //algoritmo de ordenamiento

});
/* aqui funcion para jalar la data por Male-eli*/
export const maleSeccOrder = (resultsData) => {
  const resultsMale= [ ]
  for (let i = 0; i < resultsData.length; i++) {   //recorrer lista de datos
    if (resultsData[i].gender == "Male") {//evaluando parametro resultsdata y para indicar la posicion detro del array , gender es lo que vamos a comparar
      /*console.log(resultsData[i].name);*/
      resultsMale.push(resultsData[i]); //variable donde se guardan los resultados de male
    } 
  
  }
  return resultsMale;
}
export const maleInfo = (results) => {
  return ( results.filter(element => element.gender == "Female")) 

 }


 
//*********************SEGUNDA OPCIÓN CÓDIGO ********/

//****************DECLARAMOS FUNCIONES PARA LAS SECCIONES******/

//ordenado alfabético
export const alphabeticOrder= (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name < character2.name)? -1 : 1; //algoritmo de ordenamiento
});

export const alphabeticOrderBack= (resultsData) => resultsData.sort((character1, character2) => {
  return (character1.name > character2.name)? -1 : 1;
});

// status personaje
  
//****export const characterStatus = (data) => {
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
