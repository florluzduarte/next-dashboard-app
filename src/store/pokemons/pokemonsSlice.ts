import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PokemonsFavoritesState {
    [key: string]: SimplePokemon;
}

const initialState: PokemonsFavoritesState = {}

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (state[id]) {
                delete state[id];
                return;
            }

            state[id] = pokemon;
        }
    }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer