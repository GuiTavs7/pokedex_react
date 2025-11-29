import axios from "axios";
import { fetchAbilityDescription } from "../services/fetchAbilityDescription";

jest.mock("axios");

describe("fetchAbilityDescription", () => {

  // 1) Teste para quando a descrição em inglês está disponível
  
  it("deve retornar a descrição em inglês quando disponível", async () => {
    const fakeUrl = "https://pokeapi.co/api/v2/ability/65";

    axios.get.mockResolvedValue({
      data: {
        effect_entries: [
          { effect: "Descrição em japonês", language: { name: "ja" } },
          { effect: "Ability description in English.", language: { name: "en" } }
        ]
      }
    });

    const result = await fetchAbilityDescription(fakeUrl);

    expect(result).toBe("Ability description in English.");
    expect(axios.get).toHaveBeenCalledWith(fakeUrl);
  });

  // 2) Teste para quando a descrição em inglês NÃO está disponível

  it("deve retornar mensagem padrão quando NÃO houver descrição em inglês", async () => {
    const fakeUrl = "https://pokeapi.co/api/v2/ability/66";

    axios.get.mockResolvedValue({
      data: {
        effect_entries: [
          { effect: "日本語の説明", language: { name: "ja" } },
          { effect: "Descripción en español.", language: { name: "es" } }
        ]
      }
    });

    const result = await fetchAbilityDescription(fakeUrl);

    expect(result).toBe("No description available.");
  });

  // 3) Teste para quando a chamada axios falha

  it("deve lançar erro quando axios falhar", async () => {

    const fakeUrl = "https://pokeapi.co/api/v2/ability/99";

    const errorMessage = "Network Error";

    axios.get.mockRejectedValue(new Error(errorMessage));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(fetchAbilityDescription(fakeUrl)).rejects.toThrow(errorMessage);

    consoleSpy.mockRestore();
  });
});