import axios from 'axios';

export async function fetchAbilityDescription(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;

    // A descrição em inglês geralmente está em effect_entries
    const effectEntry = data.effect_entries.find(
      (entry) => entry.language.name === 'en'
    );

    // Retorna só o texto da descrição
    return effectEntry ? effectEntry.effect : 'No description available.';
  } catch (error) {
    console.error(`Error fetching Ability data: ${error.message}`);
    throw error;
  }
}