import React from 'react';
import PokemonInfo from './PokemonInfo.js';
import '../styles/PokemonModal.css';

const PokemonModal = ({closeModal, show, pokemon, openModal}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (

        <div className={showHideClassName}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{!(pokemon) ? null : pokemon.name}</h2>
                    <h2>{!(pokemon) ? null : "Basic Stats" }</h2>
                </div>
                <div className="modal-body">
                    {(!pokemon) ? null :
                        <PokemonInfo pokemon={pokemon} />
                    }
                </div>
                <div className="modal-footer">
                    <button className="btn btn-modal-close" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default PokemonModal;