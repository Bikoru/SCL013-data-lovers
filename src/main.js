import  pokeData  from './data/pokemon/pokemon.js';
import { sortedPokemons } from './data.js';

//Con esta función escondemos todas las secciones en general, menos la página de inicio
function hideAllSections() {
    document.getElementById('pag-pokedex').style.display = 'none';
    document.getElementById('pag-ranking').style.display = 'none';
    document.getElementById('pag-tips').style.display = 'none';
}
//Con esta función muestro las secciones que quiero
function showSection(section) {
    hideAllSections(); //llamo a las secciones escondidas más arriba
    document.getElementById(section).style.display = 'block'; //y le ordenamos que independiente del link, nos muestre una sección determinada
}
// llamamos al id de los <a>, y al evento click, le damos una función anónima para que muestre las secciones deseadas en los parámetros
function setupNavigationListeners() {
    document.getElementById('pokedex-link').addEventListener('click', () => { showSection('pag-pokedex'); });
    document.getElementById('ranking-link').addEventListener('click', () => { showSection('pag-ranking'); });
    document.getElementById('tips-link').addEventListener('click', () => { showSection('pag-tips'); });
}

function setupSelectionsListeners() {
    document.getElementById('select-alphabetic').addEventListener('change', (event) => {
        const pokemons = sortedPokemons(pokeData.pokemon, 'name', event.target.value);

        createAllPokemonCards(pokemons);
    })

}

function createCardForPokemon(pokemon) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("poke-card");

    const pokeNumber = document.createElement("p");
    pokeNumber.innerText = pokemon.num;
    cardDiv.appendChild(pokeNumber);

    const pokeName = document.createElement("p");
    pokeName.innerText = pokemon.name;
    cardDiv.appendChild(pokeName);

    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.img;
    cardDiv.appendChild(pokemonImg);

    const pokeType = document.createElement("p");
    pokeType.innerText = pokemon.type;
    cardDiv.appendChild(pokeType);
    
    return cardDiv;
}

function createAllPokemonCards(pokemons) {
    const pokemonList = document.getElementById("pokemon-list");
   //Se le hace un clear a la lista de pokemones originales para que no se sumen los filtros
    pokemonList.innerHTML = '';

    for (const pokemon of pokemons) {
        const cardDiv = createCardForPokemon(pokemon);
        pokemonList.appendChild(cardDiv);
    }
}

setupNavigationListeners();
setupSelectionsListeners();
createAllPokemonCards(pokeData.pokemon);
