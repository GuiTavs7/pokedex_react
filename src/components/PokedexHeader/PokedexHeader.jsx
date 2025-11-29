import {Header} from '../../styles/PokedexHeader.js';
import { ThemeTogglerButton } from '../ThemeTogglerButton/ThemeTogglerButton.jsx';
import { PokemonFilter } from '../PokemonFilter/PokemonFilter.jsx'; 
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';

export const PokedexHeader = ({ onTypeSelect }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <ThemeTogglerButton />
            <Header>
                <h1>Pokédex</h1>
                <p>Welcome to the Pokédex! Here you can find information about various Pokémon.</p>
                <PokemonFilter onTypeSelect={onTypeSelect} />
            </Header>
        </>
    );
};