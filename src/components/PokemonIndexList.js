import React from 'react';
import Card from './Card';

const PokemonIndexList = ({display, listOfPokemon, openModal}) => {
    let pokemon = listOfPokemon.map((pokemon, index) => {
        return (
            <Card
                pokemon={pokemon}
                index={index}
                key={pokemon.id}
                openModal={openModal.bind(null, pokemon)}
            />
        );
    });

    return (
        <div className="body">
            {pokemon}
        </div>
    )
}

export default PokemonIndexList;

