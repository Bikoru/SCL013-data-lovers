import  pokeData  from './data/pokemon/pokemon.js';

function createCard(pokemon) {
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





