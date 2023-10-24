import usePokemonStore from "../store/pokemonStore";
import PokemonCard from "./PokemonCard";


const PokemonList = () => {
    const pokemons = usePokemonStore( state => state.pokemons)
    return(
        <section className="pokemon__container">
            {pokemons.map( pokemon => (
                <PokemonCard pokemon={pokemon} />
            ))}
        </section>
        
    )
}

export default PokemonList;