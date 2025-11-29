import axios from 'axios';

export async function fetchPokemonById(id) {

  try {
       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
       const data = response.data;
       return data;
   } catch (error) {
       console.error(`Error fetching Pokémon data: ${error.message}`);
       throw error;
   }
}