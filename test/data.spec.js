import { sortedPokemons, filterPokemons } from '../src/data.js';

const unsortedPokemons = [
  {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
  },
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "egg": "2 km",
  },
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
  }
];

const alphabeticalPokemons = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "egg": "2 km",
  },
  {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "0.99 m",
    "weight": "13.0 kg",
    "candy": "Bulbasaur Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
  }
];

describe('sortedPokemons', () => {
  test('is a function', () => {
    expect(typeof sortedPokemons).toBe('function');
  });

  test('Returns sorted pokemons names from A to Z ', () => {
    expect(sortedPokemons(unsortedPokemons, 'name', 'az')).toStrictEqual(alphabeticalPokemons);
  });

  test('Returns sorted pokemons names from Z to A', () => {
    expect(sortedPokemons(unsortedPokemons, 'name', 'za')).toStrictEqual(alphabeticalPokemons.reverse());
  });
});

describe('filterPokemons', () => {
  test('is a function', () => {
    expect(typeof filterPokemons).toBe('function');
  });

  test('Returns pokemons by egg ', () => {
    expect(filterPokemons(unsortedPokemons, 'egg', '2 km').length).toBe(1);
  });

  test('Returns pokemons by type ', () => {
    expect(filterPokemons(unsortedPokemons, 'type', 'Grass').length).toBe(3);
  });
});