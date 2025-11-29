import axios from 'axios';

export async function fetchPokemonRange(start, end) {
  const results = [];

  for (let i = start; i <= end; i++) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      results.push(response.data);
      await new Promise(resolve => setTimeout(resolve, 100)); // 100ms de pausa
    } catch (error) {
      console.error(`Erro ao buscar Pokémon ${i}: ${error.message}`);
    }
  }

  return results;
}