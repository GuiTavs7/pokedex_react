import axios from "axios";

export async function fetchPokemonByType() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");

    // Filtra apenas os tipos válidos (remove 'shadow', 'unknown' e 'stellar')
    const validTypes = response.data.results.filter(
      (t) => t.name !== "shadow" && t.name !== "unknown" && t.name !== "stellar"
    );

    return validTypes;
  } catch (error) {
    console.error("Erro ao carregar tipos:", error);
    throw error;
  }
}