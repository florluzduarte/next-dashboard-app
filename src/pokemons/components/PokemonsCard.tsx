"use client";
import Link from "next/link";
import { SimplePokemon } from "..";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonsCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  const isFavorite = useAppSelector(
    (state) => state.pokemons[id] !== undefined
  );

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <div className="w-100 h-100">
            <Image
              className="w-auto h-auto"
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={name}
              priority={false}
            />
          </div>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>

          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más Información
            </Link>
          </div>
        </div>
        <div className="border-b cursor-pointer">
          <div
            onClick={handleToggleFavorite}
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">
                Elige tus pokemons favoritos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
