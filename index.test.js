const request = require("supertest");
const app = require("./index.js");

//Test 1: Butterfree
describe("GET /pokemon/:butterfree", () => {
  it("should return the evolution chain for Butterfree", async () => {
    const pokemonName = "butterfree";
    const response = await request(app).get(`/pokemon/${pokemonName}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      name: "caterpie",
      variations: [
        {
          name: "metapod",
          variations: [
            {
              name: "butterfree",
              variations: [],
            },
          ],
        },
      ],
    });
  });
});

//Test 2: Pikachu
describe("GET /pokemon/:pikachu", () => {
  it("should return the evolution chain for Pikachu", async () => {
    const pokemonName = "pikachu";
    const response = await request(app).get(`/pokemon/${pokemonName}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      name: "pichu",
      variations: [
        {
          name: "pikachu",
          variations: [
            {
              name: "raichu",
              variations: [],
            },
          ],
        },
      ],
    });
  });

  it("should handle missing Pokemon species data", async () => {
    const invalidPokemonName = "invalidpokemon";
    const response = await request(app).get(`/pokemon/${invalidPokemonName}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "An Error occured while fetching data from PokeAPI."
    );
  });
});

//Test 3: Charmander
describe("GET /pokemon/:charmander", () => {
  it("should return the evolution chain for Charmander", async () => {
    const pokemonName = "charmander";
    const response = await request(app).get(`/pokemon/${pokemonName}`);

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      name: "charmander",
      variations: [
        {
          name: "charmeleon",
          variations: [
            {
              name: "charizard",
              variations: [],
            },
          ],
        },
      ],
    });
  });

  it("should handle pokemon name typos (Charmender)", async () => {
    const invalidPokemonName = "charmender";
    const response = await request(app).get(`/pokemon/${invalidPokemonName}`);

    expect(response.status).toBe(500);
    expect(response.body.error).toBe(
      "An Error occured while fetching data from PokeAPI."
    );
  });
});
