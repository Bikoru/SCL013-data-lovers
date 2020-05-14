import  pokeData  from './data/pokemon/pokemon.js';
import { sortedPokemons, filterPokemons } from './data.js';

function hideAllSections() {
    document.getElementById('pag-pokedex').style.display = 'none';
    document.getElementById('pag-ranking').style.display = 'none';
    document.getElementById('pag-tips').style.display = 'none';
    document.getElementById('pag-home').style.display = 'none';
    document.getElementById('pag-details').style.display = 'none';
}

function showSection(section) {
    hideAllSections();
    document.getElementById(section).style.display = 'block';
  }

function relatedElements(elementsId) {
    const elements = [];

    elementsId.forEach(element => {
        elements.push( document.getElementById(element) );
    });

    return elements;
}

function setupNavigationListeners() {
    relatedElements(["pokedex-link", "nav-pokedex-link", "nav-pokedex-link2"]).forEach(element => {
        element.addEventListener('click', () => { showSection('pag-pokedex');
        const pokemons = sortedPokemons(pokeData.pokemon, 'id', "order");
        createAllPokemonCards(pokemons); });
    });
    relatedElements(["ranking-link", "nav-ranking-link", "nav-ranking-link2"]).forEach(element => {
        element.addEventListener('click', () => { showSection('pag-ranking'), rankingPokemon (); });
    });
    relatedElements(["tips-link", "nav-tips-link", "nav-tips-link2"]).forEach(element => {
        element.addEventListener('click', () => { showSection('pag-tips');  });
    });
}

function setupSelectionsListeners() {
    document.getElementById('select-alphabetic').addEventListener('change', (event) => {
        const orderBy = event.target.value;


        if (orderBy === 'order') {

            const pokemons = sortedPokemons(pokeData.pokemon, 'id', orderBy);
            createAllPokemonCards(pokemons);
        }else{
            const pokemons = sortedPokemons(pokeData.pokemon, 'name', orderBy);

          createAllPokemonCards(pokemons);
        }
    });

    document.getElementById('select-pokedex').addEventListener('change', (event) => {
        const type = event.target.value;

        if (type === 'type') {

            createAllPokemonCards(pokeData.pokemon);
            return;
        }

        const pokemons = filterPokemons(pokeData.pokemon, 'type', type);

        createAllPokemonCards(pokemons);


    });

    document.getElementById('select-eggs').addEventListener('change', (event) => {
      const eggs = event.target.value;

      if (eggs === 'eggs') {
        createAllPokemonCards(pokeData.pokemon);
        return;
      }

      const pokemons = filterPokemons(pokeData.pokemon, 'egg', eggs);

      createAllPokemonCards(pokemons);
  });

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

    const pokeTypes = document.createElement("p");
    pokeTypes.className = 'text-types';
    for (const type of pokemon.type) {
        const pokeType = document.createElement("span");
        pokeType.className = type.toLowerCase();
        pokeTypes.appendChild(pokeType);
    }
    cardDiv.appendChild(pokeTypes);

    return cardDiv;
}

function createPokemonCardWithListeners(pokemon) {
    const cardDiv = createCardForPokemon(pokemon);

    const pokeBtn = document.createElement("button");
    pokeBtn.type = 'button';
    pokeBtn.innerText = 'Ver Detalles';
    pokeBtn.classList.add("btnDetails");

    pokeBtn.addEventListener('mouseover', () => {createDetailPokemon(pokemon.id);});
    cardDiv.appendChild(pokeBtn);

    return cardDiv;
}

function createAllPokemonCards(pokemons) {
    const pokemonList = document.getElementById("pokemon-list");
    pokemonList.innerHTML = '';

    for (const pokemon of pokemons) {
        const cardDiv = createPokemonCardWithListeners(pokemon);
        pokemonList.appendChild(cardDiv);
    }
}

function createDetailPokemon(id) {
  const pokeDetail = document.getElementById("pag-details");
  const pokeBtnDetail = document.getElementsByClassName("btnDetails");
  let data = pokeData.pokemon;
  id--

    for(let i=0; i<pokeBtnDetail.length; i++){
    let detail=pokeBtnDetail[i];

    detail.addEventListener("click", () =>{
      showPokemonDetails(pokeDetail, data, data[id]);
    })

  }
}

function showPokemonDetails(pokeDetail, pokemons, selectedPokemon) {
  showSection('pag-details');
  pokeDetail.innerHTML="";

  pokeDetail.innerHTML+=`
    <div id="pokedexDetail">
        <div id="leftDetail">
            <div id="imgPokemon">
              <p class="left-style">${selectedPokemon.num}</p>
              <img src=${selectedPokemon.img} alt=${selectedPokemon.num} class="left-style">
              <p class="left-style">${selectedPokemon.name}</p>
              <hr class="left-style">
            </div>
            <div>
              <p class="left-style">Tiempo de aparición: ${selectedPokemon.spawn_time} hrs.</p>
              <div id="eggIcon">
                <img src="./Images/egg.png" alt="${selectedPokemon.egg}" class="left-style">
                  <p class="left-style">${selectedPokemon.egg}</p>
              </div>
                <div>
                  <p>Multiplicadores: ${selectedPokemon.multipliers}</p>
                </div>
            </div>
        </div>
        <div id="centerDetail">
          <div id="typeP">
            <p class="titleStyle">Tipo</p>
            <p class="centerStyle">${selectedPokemon.type}</p>
          </div>
          <div id="weaknessesP">
            <p class="titleStyle">Debilidades</p>
            <p>${selectedPokemon.weaknesses}</p>
          </div>
        </div>
        <div id="rightDetail">
          <div id="heightP">
            <p class="titleStyle">Altura</p>
            <p class="rightStyle">${selectedPokemon.height}</p>
          </div>
          <div id="ratio">
            <p class="titleStyle">Ratio de Aparición</p>
            <p class="rightStyle">${selectedPokemon.spawn_chance}</p>
          </div>
          <div id="weightP">
            <p class="titleStyle">Peso</p>
            <p class="rightStyle">${selectedPokemon.weight}</p>
          </div>
          <div id="candyP">
            <p class="titleStyle">Caramelos para evolucionar</p>
            <div id="candyStyle">
              <img src="./Images/candy.png" alt="${selectedPokemon.candy}">
              <p>${selectedPokemon.candy_count}</p>
            </div>
          </div>
        </div>
    </div>`

  const evolutionTitle = document.createElement('h2');
  evolutionTitle.className = 'evolutionTitle';
  evolutionTitle.innerHTML = 'Evoluciones';
  pokeDetail.appendChild(evolutionTitle);

  const current = selectedPokemon;

  const pokemonLine = Array()
    .concat(current.next_evolution)
    .concat(current.prev_evolution)
    .filter( (element) => element != null )
    .flatMap( (element) => {
      return pokemons.find( (pokemon) => {
        return pokemon.num === element.num;
      });
    });

  pokemonLine.push(current);

  const sortedLine = sortedPokemons(pokemonLine, 'num', 'az');
  addPokemonEvolutionsCards(pokeDetail, sortedLine);
}

function addPokemonEvolutionsCards(details, pokemons) {
    const evolutionLine = Array();

    for (const pokemon of pokemons) {
        evolutionLine.push(createCardForPokemon(pokemon));
    }
    if ( evolutionLine.length >= 2) {
        for (let index = evolutionLine.length - 1; index > 0; index--) {
            const image = document.createElement("img");
            image.className = 'arrow';
            image.src = './Images/arrow.png';
            evolutionLine.splice(index, 0, image);
        }
    }
    const evolutionDiv = document.createElement('div');
    evolutionDiv.className = 'evolution-container';

    evolutionLine.forEach( card => evolutionDiv.appendChild(card) );

    details.appendChild(evolutionDiv);
}

function rankingPokemon (){

  var rankingP = document.getElementById('tableR');
  let pokemons = sortedPokemons(pokeData.pokemon, 'spawn_chance', "ranking");
  rankingP.innerHTML = `<tr>
                          <th class="column1"> Posicion </th>
                          <th class="column2"> N° Pokedex </th>
                          <th> Nombre </th>
                          <th class="column4"> Ratio de aparición </th>
                        </tr>`

  for (let i = 0; i<10; i++ ){

  rankingP.innerHTML+= `
        <tr>
        <td class="column1">${i+1}</td>
        <td class="column1">${pokemons[i].num}</td>
        <td class="column3"><img src=${pokemons[i].img} alt=${pokemons[i].num}> ${pokemons[i].name}</td>
        <td class="column4">${pokemons[i].spawn_chance}%</td>
        </tr>`
  }
}

const pokemonSearchText = document.getElementById('search-text-input');
const pokemonSearchList = document.getElementById('search-list');

pokemonSearchText.addEventListener('change', (event) => {
  searchPokemonsAndListThem(event);
});

function searchPokemonsAndListThem(event) {
  const filteredPokemons = filterPokemons(pokeData.pokemon, 'name', event.target.value);

  addPokemonToList(filteredPokemons, pokemonSearchList);
}

function addPokemonToList(pokemons, list) {
  list.innerHTML = '';

  pokemons.forEach(pokemon => {
    const column = document.createElement('li');
    column.addEventListener('click', () => { pokemonSelected(pokemon); })

    const image = document.createElement('img');
    image.src = pokemon.img;
    image.className = 'search-image'

    const number = document.createElement('p');
    number.innerText = pokemon.num;

    const name = document.createElement('p');
    name.innerText = pokemon.name;

    column.appendChild(image);
    column.appendChild(number);
    column.appendChild(name);

    list.appendChild(column);
  });
}

function pokemonSelected(pokemon) {
    pokemonSearchList.innerHTML = '';
    pokemonSearchText.value = '';

    const pokeDetail = document.getElementById("pag-details");

    showPokemonDetails(pokeDetail, pokeData.pokemon, pokemon);
}


setupNavigationListeners();
setupSelectionsListeners();
createAllPokemonCards(pokeData.pokemon);
