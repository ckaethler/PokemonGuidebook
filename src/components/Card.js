import React from 'react';
// import { idText } from 'typescript';
import '../styles/Card.css';

const Card = ({pokemon, openModal}) => {
    let types='';

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
                        <h4>ID #{pokemon.id}</h4>
                    </li>
                    
                    <li className="card-listitem">
                        <h4>Types</h4>
                        <p>{types}</p>
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