import { PokemonsCard, SimplePokemon } from "../../pokemons";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonsCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
