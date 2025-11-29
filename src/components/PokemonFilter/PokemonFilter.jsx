import { useEffect, useState } from "react";
import { fetchPokemonByType } from "../../services/fetchPokemonByType.js";
import { DropdownTypes } from "../DropdownTypes/DropdownTypes.jsx";    

export function PokemonFilter({ onTypeSelect }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function loadTypes() {
      try {
        const typesData = await fetchPokemonByType();
        setTypes(typesData.map((type) => type.name));
      } catch (error) {
        console.error(error);
      }
    }

    loadTypes();
  }, []);

  return (
    <DropdownTypes
      options={["Todos os Tipos", ...types]}
      onSelect={(value) =>
        onTypeSelect(value === "Todos os Tipos" ? "" : value)
    }
      placeholder="Filtrar por tipo"
    />
  );
}