import  pokeData  from './data/pokemon/pokemon.js';
import { sortedPokemons, filterPokemons } from './data.js';

//Con esta función escondemos todas las secciones en general, menos la página de inicio
function hideAllSections() {
    document.getElementById('pag-pokedex').style.display = 'none';
    document.getElementById('pag-ranking').style.display = 'none';
    document.getElementById('pag-tips').style.display = 'none';
    document.getElementById('pag-home').style.display = 'none';
    document.getElementById('pag-details').style.display = 'none';
}
//Con esta función muestro las secciones que quiero
function showSection(section) {
    hideAllSections(); //llamo a las secciones escondidas más arriba
    document.getElementById(section).style.display = 'block'; //y le ordenamos que independiente del link, nos muestre una sección determinada
}
// llamamos al id de los <a>, y al evento click, le damos una función anónima para que muestre las secciones deseadas en los parámetros

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
   //Se le hace un clear a la lista de pokemones originales para que no se sumen los filtros
    pokemonList.innerHTML = '';

    for (const pokemon of pokemons) {
        const cardDiv = createCardForPokemon(pokemon);
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

      // Se le añade un evento de tipo click para llevar a la seccion y para crear los elementos HTML

    detail.addEventListener("click", () =>{
      showSection('pag-details');
      pokeDetail.innerHTML="";

      //Creamos los elementos en la sección Pag-Detail
      pokeDetail.innerHTML+=`
      <div id="rightDetail">
          <div id="imgPokemon">
            <p>${data[id].num}</p>
            <img src=${data[id].img} alt=${data[id].num}>
            <p>${data[id].name}</p>
            <hr>
          </div>
          <div>
            <p>Tiempo de aparición: ${data[id].spawn_time} hrs.</p>
            <div id="eggIcon">
            <img src="./Images/egg.png" alt="${data[id].egg}">
              <p>${data[id].egg}</p>
              <p>Multiplicadores: ${data[id].multipliers}</p>
            </div>
          </div>
      </div>
      <div id="rightDetail">
        <div id="typeP">
          <p>Tipo</p>
          <p>${data[id].type}</p>
        </div>
        <div id="weaknessesP">
          <p>Debilidades</p>
          <p>${data[id].weaknesses}</p>
        </div>
        <div id="detailP">
          <div id="heightP">
            <p>Altura</p>
            <p>${data[id].height}</p>
          </div>
          <div id="ratio">
            <p>Ratio de Aparición</p>
            <p>${data[id].spawn_chance}</p>
          </div>
          <div id="weightP">
            <p>Peso</p>
            <p>${data[id].weight}</p>
          </div>
          <div id="candyP">
            <p>Caramelos para evolucionar</p>
             <img src="./Images/candy.png" alt="${data[id].candy}">
            <p>${data[id].candy_count}</p>
          </div>
        </div>
      </div>`
    })
  }
}

function rankingPokemon (){
  const rankingP = document.getElementById("rankingP");
  let pokemons = sortedPokemons(pokeData.pokemon, 'spawn_chance', "ranking");
  rankingP.innerHTML = "";

  for (let i = 0; i<10; i++ ) {

    rankingP.innerHTML+= `<table>
    <tr>
      <th>Posición</th>
      <th>N° Pokedex</th>
      <th>Nombre</th>
      <th>Ratio de aparición</th>
    </tr>
    <tr>
      <td>${i+1}</td>
      <td>${pokemons[i].num}</td>
      <td><img src=${pokemons[i].img} alt=${pokemons[i].num}> ${pokemons[i].name}</td>
      <td>${pokemons[i].spawn_chance}</td>
    </tr>
  </table>`
  }
}



setupNavigationListeners();
setupSelectionsListeners();
createAllPokemonCards(pokeData.pokemon);
