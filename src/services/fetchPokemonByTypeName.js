import axios from "axios";

export async function fetchPokemonByTypeName(typeName, limit = 10) {
  try {
    // Pega todos os Pokémon do tipo
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
    const allPokemon = response.data.pokemon.map(p => p.pokemon); // só name + url

    // Limita pelo parâmetro `limit`
    const pokemonToFetch = allPokemon.slice(0, limit);

    const results = [];
    for (const p of pokemonToFetch) {
      try {
        const res = await axios.get(p.url);
        results.push(res.data);
        await new Promise(resolve => setTimeout(resolve, 100)); // pausa pra não dar 429
      } catch (err) {
        console.error(`Erro ao buscar Pokémon ${p.name}:`, err.message);
      }
    }

    return results;
  } catch (error) {
    console.error(`Erro ao buscar Pokémon do tipo ${typeName}:`, error);
    throw error;
  }
}