import { useEffect, useState, useContext } from 'react';
import { fetchPokemonRange } from "../../services/fetchPokemonRange";
import { fetchPokemonByTypeName } from "../../services/fetchPokemonByTypeName"; // ✅ serviço certo
import { PokemonCard } from '../PokemonCard/PokemonCard.jsx';
import { DivPokemonListContainer, DivPokemonList, DivButtonContainer, Button } from '../../styles/PokemonList.styles.js';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

export const PokemonList = ({ selectedType }) => {

    const [pokemonList, setPokemonList] = useState([]); //lista de pokémons exibidos;
    const [rangeEnd, setRangeEnd] = useState(10); //quantidade atual (inicialmente 10)
    const [typeRangeEnd, setTypeRangeEnd] = useState(10); // para tipos
    const [loading, setLoading] = useState(true);  //estado de carregamento;

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        async function loadPokemon() {
            setLoading(true);
            try {
                let data;
                if (selectedType) {
                    // Busca por tipo
                    data = await fetchPokemonByTypeName(selectedType, typeRangeEnd);
                } else {
                    // Busca normal (range)
                    data = await fetchPokemonRange(1, rangeEnd);
                }
                setPokemonList(data);
            } catch (error) {
                console.error("Erro ao buscar pokémons:", error);
            } finally {
                setLoading(false);
            }
        }
        loadPokemon();
    }, [rangeEnd, typeRangeEnd, selectedType]); // atualiza quando mudar o tipo ou o range

    const handleLoadMore = () => {
        if (selectedType) {
            setTypeRangeEnd(prev => prev + 10); // carrega mais do tipo selecionado
        } else {
            setRangeEnd(prev => prev + 10); // carrega mais da lista normal
        }
    };

    return (
        <DivPokemonListContainer className="pokemon-list-container">
            <DivPokemonList className="pokemon-list">
                {pokemonList.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </DivPokemonList>
            <DivButtonContainer>
                <Button type="button" onClick={handleLoadMore} disabled={loading}>
                    {loading ? "Carregando..." : "Carregar Mais"}
                </Button>
            </DivButtonContainer>
        </DivPokemonListContainer>
    );
};