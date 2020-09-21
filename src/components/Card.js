import React from 'react';
import '../styles/Card.css';

const Card = ({pokemon, openModal}) => {
    let abilities;
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
                        <h4>Base Experience</h4>
                        <p>{pokemon.base_experience} points</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Height</h4>
                        <p>{pokemon.height} decimetres</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Weight</h4>
                        <p>{pokemon.weight} hectograms</p>
                    </li>
                    <li className="card-listitem">
                        <h4>Abilities</h4>
                        <p>
                            {abilities}
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