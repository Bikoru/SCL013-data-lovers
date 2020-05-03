// estas funciones son de ejemplo
//crear filtro que muestre a todos los pokemons en la section pokedex

export const sortedPokemons = (data, sortBy, condition) => {
  if (condition === "az") {
    return data.sort((a, b)=> (a[sortBy] > b[sortBy]) ? 1 : -1);
  } else {
    return data.sort((a, b)=> (a[sortBy] < b[sortBy]) ? 1 : -1);
  }
}


