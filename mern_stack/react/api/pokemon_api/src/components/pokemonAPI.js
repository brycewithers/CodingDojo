import React, { useState } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    
    function fetchPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then(response => response.json())
            .then(response => setPokemon(response.results))

    }
 
    return (
        <div>
            <button onClick = {fetchPokemon}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<ul><li>{pokemon.name}</li></ul>);
            })}
        </div>
    );
}
export default Pokemon;