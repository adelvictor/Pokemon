import React from "react"

interface Prop{
    pokemon: Pokemon
}

const PokemonCard: React.FC<Prop> = ({pokemon}) => {
    return (
        <section className="card">
            <img 
            className="card__img" 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}  
            />
            <p className="card__text">{pokemon.name}</p>
        </section>
    )
}

export default PokemonCard