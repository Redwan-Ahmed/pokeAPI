const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

//Middleware to parse JSON data from the request body
app.use(express.json());

//Endpoint for getting the Pokemon Evolution chain
app.get("/pokemon/:name", async (req, res) => {
  const pokemonName = req.params.name;

  try {
    const speciesResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    );

    const speciesData = speciesResponse.data;
    if (!speciesData) {
      throw new Error(
        `Missing Pokemon (${pokemonName}) Species Data. Please check Pokemon name.`
      );
    }

    const evoChainUrl = speciesData.evolution_chain.url;
    const evoResponse = await axios.get(evoChainUrl);
    const evoChainData = evoResponse.data.chain;
    if (!evoChainData) {
      throw new Error(`Missing Pokemon (${pokemonName}) Evolution Data.`);
    }

    const evolutionChain = parseEvolutionChain(evoChainData);

    res.status(200).json(evolutionChain);
  } catch (error) {
    console.error("Error fetching data from PokeAPI:", error.message);
    res
      .status(500)
      .json({ error: "An Error occured while fetching data from PokeAPI." });
  }
});

/**
 * A parse function that makes the evolution chain output
 * @param {*} chain
 * @returns JSON object of the Pokemon Evolution chain
 */
function parseEvolutionChain(chain) {
  // Destructure the properties for clarity
  const { species, evolves_to } = chain;
  const result = {
    name: species.name,
    variations: [],
  };

  // use a map to push each variation to result variation array 
  if (evolves_to && evolves_to.length > 0) {
    result.variations = evolves_to.map((variation) =>
      parseEvolutionChain(variation)
    );
  }

  return result;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; // Export the app object
