import { create } from "zustand";

interface PokemonState {
    pokemons: Pokemon[]
    allPokemon: Pokemon[]
    search: string
    setSearch: (search :string) => void
    setPokemons: (pokemons: Pokemon[]) => void
    setAllPokemon: (allPokemon: Pokemon[]) => void
}


const usePokemonStore = create<PokemonState>()((set, get) => ({
    pokemons: [],
    allPokemon: [],
    search: "",
    setSearch: (search) => {
        set({search})
        get().setPokemons(get().allPokemon
            .filter((p) => search!=="" && p.name.toLowerCase().includes(get().search.toLowerCase()))
            .slice(0, 10)
            .sort((a, b) => a.name.localeCompare(b.name)))
    },
    setPokemons: (pokemons) => set({pokemons}),
    setAllPokemon: (allPokemon) => set({allPokemon: allPokemon})
}))

fetch("/pokemon.json")
    .then(response => response.json())
    .then(pokemons => usePokemonStore.getState().setAllPokemon(pokemons))

export default usePokemonStore;

