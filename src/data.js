//****************DECLARAMOS FUNCIONES PARA LAS SECCIONES******/

//ordenado alfabético
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


//Cálculo del top 10 personajes que salen en la serie


export const relevanceOrder = (resultsData) => resultsData.sort((character1, character2) => {
  return (character2.episode.length - character1.episode.length);// de mayor a menor top ten
});


// Cálculo género de personajes

export const statusCh= (resultsData) => {
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

//************************ejemplo test unitarios********************//

import { it } from 'eslint/lib/rule-tester/rule-tester';
import {alphabeticOrder, alphabeticOrderBack, maleOrder, femaleOrder, speciesOrder, relevanceOrder } from '../src/data.js';

let data1 = {
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    },
    {
      "id": 441,
      "name": "Allen Mexican Armada",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male",
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "female",
    }

  ]
};

let data2 = {
  "results": [
    {
      "id": 441,
      "name": "Allen Mexican Armada",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male",
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "female",
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
    }

  ]
};

describe('alphabeticOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });
  it("return array order from A-Z", () => {
    expect(alphabeticOrder(data1.results)).toEqual(data2.results);
  });
});

describe('alphabeticOrderBack', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderBack).toBe('function');
  });

});

describe('maleOrder', () => {
  it('is a function', () => {
    expect(typeof maleOrder).toBe('function');
  });

});
describe('femaleOrder', () => {
  it('is a function', () => {
    expect(typeof femaleOrder).toBe('function');
  });

});
describe('speciesOrder', () => {
  it('is a function', () => {
    expect(typeof speciesOrder).toBe('function');
  });

});
describe('relevanceOrder', () => {
  it('is a function', () => {
    expect(typeof relevanceOrder).toBe('function');
  });
}); 