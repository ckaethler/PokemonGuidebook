// ----------------------------------------------------------------------------
// LIBRARY IMPORTS
import React from 'react';
import PokemonInfo from './PokemonInfo.js';
import '../styles/PokemonModal.css';

// ----------------------------------------------------------------------------
// POKEMON MODAL FUNCTION
// RECEIVES: Close Modal Boolean, Show modal Boolean, pokemon object
// EXPORTS: Modal with Pokemon statistics and bar chart
const PokemonModal = ({closeModal, show, pokemon}) => {

    // ------------------------------------------------------------------------
    // Sets empty variables while pokemon isn't selected
    let height_feet='', height_inches='', weight='', abilities='', types='';
    let name='', id='', base_experience;
    if (pokemon) {
        // Sets selected pokemon variable definitions
        name = pokemon.name;
        id = pokemon.id;
        height_feet = Math.floor(pokemon.height * 3.937 / 12);
        height_inches = Math.floor(pokemon.height * 3.937 % 12);
        weight = Math.round(pokemon.weight * 0.220462);
        base_experience = pokemon.base_experience;

        // Creates Pokemon abilities line
        if(pokemon.abilities.length > 0) {
            abilities = pokemon.abilities.map((ability, index) => {
            if (index < pokemon.abilities.length - 1) {
                return ability.ability.name + " | "
            }
            else return ability.ability.name;
        })} else abilities = "None";

        // Sets pokemon types line
        if(pokemon.types) {
            types = pokemon.types.map((type, index) => {
                if (index < pokemon.types.length - 1) {
                    return type.type.name + " | "
                } else return type.type.name;
            })
        } else types = "None";
    }

    // ------------------------------------------------------------------------
    const showClassName = show ? "modal display-block" : "modal display-none";

    // ------------------------------------------------------------------------
    return (
        <div className={showClassName}>

            <div className="modal-content">

                <div className="modal-header">
                    <h2>{name}</h2>
                    {(!pokemon) ? null : 
                        <img 
                            className="card-img" 
                            src={pokemon.sprites.front_default} 
                            alt="" 
                        />
                    }
                </div>

                <div className="modal-body">
                    {(!pokemon) ? null : <PokemonInfo pokemon={pokemon} />}
                    

                    <table className="statistics-table">
                        <tr>
                            <td className="header">ID</td>
                            <td>{id}</td>
                        </tr>

                        <tr>
                            <td className="header">Types</td>
                            <td>{types}</td>
                        </tr>

                        <tr>
                            <td className="header">Base Experience</td>
                            <td>{base_experience} points</td>
                        </tr>

                        <tr>
                            <td className="header">Height</td>
                            <td>{height_feet}' {height_inches}"</td>
                        </tr>

                        <tr>
                            <td className="header">Weight</td>
                            <td>{weight} lbs</td>
                        </tr>

                        <tr>
                            <td className="header">Abilities</td>
                            <td>{abilities}</td>
                        </tr>
                        
                    </table>
                </div>
                
                <div className="modal-footer">
                    <button 
                        className="btn btn-modal-close" 
                        onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------------------------------------------
export default PokemonModal;