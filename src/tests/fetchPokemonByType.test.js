import axios from "axios";
import { fetchPokemonByType } from "../services/fetchPokemonByType";

jest.mock("axios");

describe("fetchPokemonByType", () => {
  it("deve retornar apenas tipos válidos, filtrando 'shadow' e 'unknown'", async () => {
    const mockResponse = {
      data: {
        results: [
          { name: "fire" },
          { name: "water" },
          { name: "shadow" },
          { name: "unknown" },
          { name: "grass" }
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchPokemonByType();

    expect(result).toEqual([
      { name: "fire" },
      { name: "water" },
      { name: "grass" }
    ]);

    expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/type");
  });

  it("deve lançar erro quando a requisição falha", async () => {
    const errorMessage = "Network Error";

    axios.get.mockRejectedValue(new Error(errorMessage));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(fetchPokemonByType()).rejects.toThrow(errorMessage);

    consoleSpy.mockRestore();
  });
});