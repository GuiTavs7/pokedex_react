import { fetchPokemonByTypeName } from "../services/fetchPokemonByTypeName";
import axios from "axios";

jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("fetchPokemonByTypeName", () => {

  test("deve buscar os Pokémon de um tipo e retornar os dados limitados", async () => {
    const mockTypeResponse = {
      pokemon: [
        { pokemon: { name: "bulbasaur", url: "url/1" } },
        { pokemon: { name: "ivysaur", url: "url/2" } },
        { pokemon: { name: "venusaur", url: "url/3" } },
      ],
    };

    axios.get
      .mockResolvedValueOnce({ data: mockTypeResponse })
      .mockResolvedValueOnce({ data: { name: "bulbasaur" } })
      .mockResolvedValueOnce({ data: { name: "ivysaur" } });

    const result = await fetchPokemonByTypeName("grass", 2);

    expect(result).toEqual([
      { name: "bulbasaur" },
      { name: "ivysaur" },
    ]);

    expect(axios.get).toHaveBeenNthCalledWith(1, "https://pokeapi.co/api/v2/type/grass");
    expect(axios.get).toHaveBeenNthCalledWith(2, "url/1");
    expect(axios.get).toHaveBeenNthCalledWith(3, "url/2");
    expect(axios.get).toHaveBeenCalledTimes(3);
  });

  test("deve ignorar erros ao buscar Pokémon individuais e continuar", async () => {
    const mockTypeResponse = {
      pokemon: [
        { pokemon: { name: "bulbasaur", url: "url/1" } },
        { pokemon: { name: "ivysaur", url: "url/2" } },
      ],
    };

    axios.get
      .mockResolvedValueOnce({ data: mockTypeResponse })
      .mockRejectedValueOnce(new Error("falha no bulbasaur"))
      .mockResolvedValueOnce({ data: { name: "ivysaur" } });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const result = await fetchPokemonByTypeName("grass", 2);

    consoleSpy.mockRestore();

    expect(result).toEqual([
      { name: "ivysaur" }
    ]);

    expect(axios.get).toHaveBeenCalledTimes(3);
  });

  test("deve lançar erro caso a requisição de tipo falhe", async () => {
    axios.get.mockRejectedValueOnce(new Error("Tipo inválido"));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(fetchPokemonByTypeName("ghost")).rejects.toThrow("Tipo inválido");

    expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/type/ghost");

    consoleSpy.mockRestore();
  });

});