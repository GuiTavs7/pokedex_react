import axios from 'axios';
import { fetchPokemonById } from '../services/fetchPokemonById';

jest.mock('axios');

describe('fetchPokemonById', () => {

    it('deve buscar e retornar os dados do Pokémon para um ID válido  ', async () => {

        const mockPokemon = { id: 1, name: 'bulbasaur' };

        //Simula axios.get para retornar dados simulados
        axios.get.mockResolvedValue({ data: mockPokemon });

        const result = await fetchPokemonById(1);

        expect(result).toEqual(mockPokemon);
        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');

    });

    it('deve lançar um erro para um ID de Pokémon inválido', async () => {

        const mockError = new Error('Pokémon não encontrado');

        //Simula axios.get para lançar um erro
        axios.get.mockRejectedValue(mockError);

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        //Como a função lança um erro, usamos .rejects para testar
        await expect(fetchPokemonById(1)).rejects.toThrow('Pokémon não encontrado');

        consoleSpy.mockRestore();
    });
    
});