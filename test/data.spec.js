import { it } from 'eslint/lib/rule-tester/rule-tester';
import { alphabeticOrder, alphabeticOrderBack, maleOrder, femaleOrder, speciesOrder, relevanceOrder, computeFemale } from '../src/data.js';
import { data1, data2, dataCba, dataMale, dataFemale, dataSpecies, dataInicial,dataTop10,} from "./dataMock";



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
for (let i = 0; i < relevanceResults.length; i++)

describe('relevanceOrder', () => {
  it('is a function', () => {
    expect(typeof relevanceOrder).toBe('function');
  });
    it("return array from episode relevance apparition Order", () => {
      expect(relevanceOrder(dataInicial.results)).toEqual(dataTop10.results);
    });
});

describe('computeFemale', () => {
  it('is a function', () => {
    expect(typeof computeFemale).toBe('function');
  });
  it("percent of female in characters", () => {
    expect(computeFemale(data1.results)).toEqual(50.0);
  });
});

