import {
  PokemonsGrid,
  PokemonsResponse,
  SimplePokemon,
} from "../../../pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data: PokemonsResponse = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-xl5 my-2">
        Listado de Pokemons <small>estático</small>
      </span>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
}
