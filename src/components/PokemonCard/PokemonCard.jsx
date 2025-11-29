import {DivPokemonCard, ImgPokemon} from '../../styles/PokemonCard.js';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

export const PokemonCard = ({ pokemon }) => {

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${pokemon.id}`);
  };

  return (
    <DivPokemonCard onClick={handleCardClick} theme={theme}>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <ImgPokemon src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemon.name} />
    </DivPokemonCard>
  );
};