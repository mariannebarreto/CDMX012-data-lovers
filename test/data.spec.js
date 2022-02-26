/*import { example, anotherExample } from '../src/data.js';

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
//************************ejemplo test unitarios********************//

import { it } from 'eslint/lib/rule-tester/rule-tester';
import { alphabeticOrder, alphabeticOrderBack, maleOrder, femaleOrder, speciesOrder, relevanceOrder } from '../src/data.js';

let data1 = {
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female"
    },
    {
      "id": 441,
      "name": "Allen Mexican Armada",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male"
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "Female"
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
      "gender": "Male"
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "Female"
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female"
    }
    
  ]
};

let dataCba = {
  "results": [
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female"
    },
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "Female"
    },
    {
      "id": 441,
      "name": "Allen Mexican Armada",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male"
    }
  ]
};
let dataMale = {
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male"
    },
    
    {
      "id": 441,
      "name": "Allen Mexican Armada",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male"
    }
   
  ]
};
let dataFemale = {
  "results": [
    
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female"
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "Female"
    }

  ]
};
let dataSpecies = {
  "results": [
    {
      "id": 441,
      "name": "Allen Mexican Armada",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male"
    },
    {
      "id": 161,
      "name": "Hydrogen-F",
      "status": "Alive",
      "species": "Alien",
      "gender": "Female"
    }
    
  ]
};
let dataInicial = {
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26", "27", "28",
        "29", "30", "31"
      ]
    },
    {
      "id": 179,
      "name": "Jessica",
      "status": "Alive",
      "species": "Cronenberg",
      "type": "",
      "gender": "Female",
      "episode": [
        "1", "4", "6"
      ]
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26", "27", "28",
        "29", "30", "31"
      ]
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31"
      ]
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31"
      ]

    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31"
      ]
    },

  ]
};

let dataTop10 = {
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26", "27", "28",
        "29", "30", "31"
      ]
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19",
        "20", "21", "22", "23", "24", "25", "26", "27", "28",
        "29", "30", "31"
      ]
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31"
      ]
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31"
      ]

    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
        "16", "17", "18", "19", "20", "21", "22", "23", "24",
        "25", "26", "27", "28", "29", "30", "31"
      ]
    },
    {
      "id": 179,
      "name": "Jessica",
      "status": "Alive",
      "species": "Cronenberg",
      "type": "",
      "gender": "Female",
      "episode": [
        "1", "4", "6"
      ]
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
    it("return array in order from Z-A", () => {
      expect(alphabeticOrderBack(data1.results)).toEqual(dataCba.results);
    });
  });



describe('maleOrder', () => {
  it('is a function', () => {
    expect(typeof maleOrder).toBe('function');
  });
  it("return array from gender Male", () => {
    expect(maleOrder(data1.results)).toEqual(dataMale.results);
  });
});


describe('femaleOrder', () => {
  it('is a function', () => {
    expect(typeof femaleOrder).toBe('function');
  });
  it("return array from gender Female", () => {
    expect(femaleOrder(data1.results)).toEqual(dataFemale.results);
});
});


describe('speciesOrder', () => {
  it('is a function', () => {
    expect(typeof speciesOrder).toBe('function');
  });
  it("return array from Species", () => {
    expect(speciesOrder(data1.results,"Alien")).toEqual(dataSpecies.results);
  });
});

let relevanceResults = relevanceOrder(dataInicial.results);
for (let i = 0; i < relevanceResults.length; i++) {
  console.log(relevanceResults[i].name);
}
describe('relevanceOrder', () => {
  it('is a function', () => {
    expect(typeof relevanceOrder).toBe('function');
  });
    it("return array from episode relevance apparition Order", () => {
      expect(relevanceOrder(dataInicial.results)).toEqual(dataTop10.results);
    });
  });

 