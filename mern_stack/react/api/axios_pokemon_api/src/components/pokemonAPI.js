import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    function showPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then(response => {setPokemon(response.data.results)})
    }

    return (
        <div>
            <button onClick = {showPokemon}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<ul><li key={index}>{pokemon.name}</li></ul>);
            })}
        </div>
    );
    
}

export default Pokemon;