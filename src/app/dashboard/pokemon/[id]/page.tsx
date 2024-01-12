import { Pokemon } from "@/pokemons";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  });
  const data = await response.json();
  console.log("Se cargó: ", data.name);
  return data;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>Hello Pokemon {params.id}</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
