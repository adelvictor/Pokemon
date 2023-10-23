import { create } from "zustand";

interface PokemonState {
    pokemon: Pokemon[]
    allPokemon: Pokemon[]
    setPokemon: (pokemon: Pokemon[]) => void
    setAllPokemon: (allPokemon: Pokemon[]) => void
}

const usePokemonStore = create<PokemonState>()((set) => ({
    pokemon: [],
    allPokemon: [],
    setPokemon: (pokemon) => set({pokemon}),
    setAllPokemon: (allPokemon) => set({allPokemon: allPokemon})
}))

fetch("/pokemon.json")
    .then(response => response.json())
    .then(pokemon => usePokemonStore.getState().setAllPokemon(pokemon))

export default usePokemonStore;

