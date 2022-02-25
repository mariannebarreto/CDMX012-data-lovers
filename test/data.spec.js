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