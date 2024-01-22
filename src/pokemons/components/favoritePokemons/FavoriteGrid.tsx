"use client";
import { PokemonsGrid } from "@/pokemons";
import { useAppSelector } from "@/store/store";
import { NoFavorites } from "./NoFavorites";
import { useState } from "react";

export const FavoriteGrid = () => {
  const pokemonsFavoritesState = useAppSelector((state) => state.pokemons);
  const pokemonsArray = Object.values(pokemonsFavoritesState);

  const [pokemons, setPokemons] = useState(pokemonsArray);

  return (
    <>
      {pokemons.length ? <PokemonsGrid pokemons={pokemons} /> : <NoFavorites />}
    </>
  );
};
