import { fetchPokemonRange } from "../services/fetchPokemonRange";
import axios from "axios";

jest.mock("axios");

beforeEach(() => {
  jest.useFakeTimers();
  jest.clearAllMocks();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("fetchPokemonRange", () => {

  test("deve buscar uma faixa de Pokémon e retornar os dados", async () => {
    const mockPokemon1 = { name: "bulbasaur" };
    const mockPokemon2 = { name: "ivysaur" };

    axios.get
      .mockResolvedValueOnce({ data: mockPokemon1 })
      .mockResolvedValueOnce({ data: mockPokemon2 });

    const promise = fetchPokemonRange(1, 2);

    // Resolve primeira requisição
    await Promise.resolve();  
    jest.runOnlyPendingTimers(); 
    await Promise.resolve();  

    // Resolve segunda requisição
    await Promise.resolve();  
    jest.runOnlyPendingTimers(); 
    await Promise.resolve();  

    const result = await promise;

    expect(result).toEqual([mockPokemon1, mockPokemon2]);
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  test("deve ignorar erros e continuar buscando os próximos", async () => {
    const mockPokemon2 = { name: "ivysaur" };

    axios.get
      .mockRejectedValueOnce(new Error("falha no 1"))
      .mockResolvedValueOnce({ data: mockPokemon2 });

    const promise = fetchPokemonRange(1, 2);

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Primeira iteração
    await Promise.resolve();
    jest.runOnlyPendingTimers();
    await Promise.resolve();

    // Segunda iteração
    await Promise.resolve();
    jest.runOnlyPendingTimers();
    await Promise.resolve();

    consoleSpy.mockRestore();

    const result = await promise;

    expect(result).toEqual([mockPokemon2]);
    expect(axios.get).toHaveBeenCalledTimes(2);
  });
});