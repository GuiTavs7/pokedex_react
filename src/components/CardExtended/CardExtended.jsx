import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { CardExtendedContainer, PokemonName, PokemonImage, PokemonContainerInfo, BackButton, AbilitiesList, ContainerDiv} from '../../styles/CardExtended';
import {fetchPokemonById} from '../../services/fetchPokemonById.js';
import { fetchAbilityDescription } from '../../services/fetchAbilityDescription.js';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // biblioteca de ícones recomendada

export const CardExtended = () => {

  // Pega o tema atual do contexto

  const { theme } = useContext(ThemeContext);

  // Parâmetros do React Router

  const { id } = useParams(); // pega o ID da URL
  const navigate = useNavigate();

  // Estados para os dados do Pokémon e descrições das habilidades

  const [pokemon, setPokemon] = useState(null);
  const [abilitiesWithDesc, setAbilitiesWithDesc] = useState([]);

  // Um único useEffect para os dois useStates acima

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const data = await fetchPokemonById(id);
        setPokemon(data);

        // Buscar descrições das habilidades
        const abilitiesData = await Promise.all(
          data.abilities.map(async (a) => {
            const description = await fetchAbilityDescription(a.ability.url);
            return {
              name: a.ability.name,
              description
            };
          })
        );

        setAbilitiesWithDesc(abilitiesData);

      } catch (error) {
        console.error("Erro ao buscar dados do Pokémon:", error);
      }
    }

    fetchPokemonData();
  }, [id]);

  // Exibir carregamento enquanto os dados não são buscados

  if (!pokemon) return <p>Carregando...</p>;

  // Funções para navegação entre Pokémons

  const handleBack = () => {
    navigate('/');
  };

  const handlePrev = () => {
    const prevId = Math.max(1, Number(id) - 1);
    navigate(`/card/${prevId}`);
  };

  const handleNext = () => {
    const nextId = Number(id) + 1;
    navigate(`/card/${nextId}`);
  };

  // JSX para renderizar os detalhes do Pokémon

  return (
    <>
      <ContainerDiv>

        <ArrowLeft size={36} style={{ cursor:'pointer', marginRight: '10px' }} onClick={handlePrev} />

        <CardExtendedContainer theme={theme}>
          <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
          <PokemonImage
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <PokemonContainerInfo theme={theme}>
            <p><strong>Altura:</strong> {pokemon.height}</p>
            <p><strong>Peso:</strong> {pokemon.weight}</p>
            <p><strong>Tipo(s):</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
            <p><strong>Moves:</strong> {pokemon.moves.slice(0,4).map(m => m.move.name).join(", ")}, <i>etc</i></p>
            <p><strong>Abilities:</strong></p>
            <AbilitiesList>
              {abilitiesWithDesc.map(a => (
                <li key={a.name}>
                <strong>{a.name.charAt(0).toUpperCase() + a.name.slice(1)}:</strong> {a.description}
               </li>
              ))}
           </AbilitiesList>
         </PokemonContainerInfo>
        </CardExtendedContainer>

        <ArrowRight size={36} style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={handleNext} />
        
      </ContainerDiv>

      <BackButton onClick={handleBack}>Voltar</BackButton>
    </>
  );
};