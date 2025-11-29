import { useState } from "react";
import { PokemonList } from "../components/PokemonList/PokemonList.jsx";
import { PokedexHeader } from "../components/PokedexHeader/PokedexHeader.jsx";

const Home = () => {
  
  const [selectedType, setSelectedType] = useState("");

  return (
    <>
      <PokedexHeader onTypeSelect={setSelectedType} />
      <PokemonList selectedType={selectedType} />
    </>
  );
};

export default Home;