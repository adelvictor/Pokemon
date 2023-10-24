import usePokemonStore from "../store/pokemonStore";



const SearchInput = () => {
    
    const search = usePokemonStore(state => state.search)
    const setSearch = usePokemonStore(state => state.setSearch)

    return (
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Enter search input" className="pokemon__searchInput" />
    )
}

export default SearchInput;