import React from 'react';
// import { idText } from 'typescript';
import '../styles/Card.css';

const Card = ({pokemon, openModal}) => {
    let abilities='', types='';
    const height_feet = Math.floor(pokemon.height * 3.937 / 12);
    const height_inches = Math.floor(pokemon.height * 3.937 % 12);
    const weight = Math.round(pokemon.weight * 0.220462)

    // If pokemon has no abilities, writes "none"
    if(pokemon.abilities.length > 0) {
        abilities = pokemon.abilities.map((ability, index) => {
            if (index < pokemon.abilities.length - 1) {
                return ability.ability.name + " | "
            }
            else return ability.ability.name;
        })
    } else {
        abilities = "None";
    }

    // If pokemon has types
    if(pokemon.types) {
        types = pokemon.types.map((type, index) => {
            if (index < pokemon.types.length - 1) {
                return type.type.name + " | "
            } else return type.type.name;
        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <img className="card-img" src={pokemon.sprites.front_default} alt="" />
                <br></br>
                <h2 className="card-title">{pokemon.name}</h2>
            </div>

            <div className="card-body">
                <ul className="card-listgroup">
                    <li className="card-listitem">
                        <h4>ID</h4>
                        <p>{pokemon.id}</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Base Experience</h4>
                        <p>{pokemon.base_experience} points</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Height</h4>
                        <p>{height_feet}' {height_inches}"</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Weight</h4>
                        <p>{weight} lbs</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Abilities</h4>
                        <p>
                            {abilities}
                        </p>
                    </li>
                    <li className="card-listitem">
                        <h4>Types</h4>
                        <p>
                            {types}
                        </p>
                    </li>
                </ul>
                <div className="card-footer">
                    <button className="btn btn-stats" onClick={openModal}>View Statistics</button>
                </div>
            </div>
            
        </div>
    );
}

export default Card;