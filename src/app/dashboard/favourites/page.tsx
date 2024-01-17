import { Metadata } from "next";
import { PokemonsGrid } from "../../../pokemons";

export const metadata: Metadata = {
  title: "Pókemons favoritos",
  description: "Listado de Pókemons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-3xl my-2">
        Listado de Pokemons{" "}
        <small className="text-blue-700">Global State</small>
      </span>
      <PokemonsGrid pokemons={[]} />
    </div>
  );
}
