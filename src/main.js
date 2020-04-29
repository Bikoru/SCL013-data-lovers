import  pokeData  from './data/pokemon/pokemon.js';

/*const selectPokedex = document.getElementById('select-pokedex');
selectPokedex.options[selectPokedex.selectedIndex].text;*/

function createCard(pokemon) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("poke-card");

    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.img;

    cardDiv.appendChild(pokemonImg);
    
    const pokemonList = document.getElementById("pokemon-list");
    pokemonList.appendChild(cardDiv);
}

for (const pokemon of pokeData.pokemon) {
    createCard(pokemon);
}

/*document.querySelectorAll('#start-page').forEach(function(button) {
    button.addEventListener("click, ")
    )}*/

//botón que da 

/*const pokedexBtn = getElementById("start-page");
pokedexBtn.querySelectorAll*/
// eslint-disable-next-line no-unused-vars


//select.options[select.selectedIndex].text --> reconoce cuál de los select fue seleccionado y devuelve ese valor




console.log(pokeData.pokemon[0].num);
console.log(pokeData.pokemon[0].name);
console.log(pokeData.pokemon[0].type);
console.log(pokeData.pokemon[0].img);



