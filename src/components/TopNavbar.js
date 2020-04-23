// ---------------------------------------------------------------------------
import React from 'react';
import '../styles/TopNavbar.css';
import PokemonLogo from '../images/Pokemon-Guidebook.png'

// ---------------------------------------------------------------------------
const TopNavbar = ({resetDefaults}) => {
  // -------------------------------------------------------------------------
  return (
    <header className="top-nav">
        <img className="top-nav-logo" src={PokemonLogo} alt="PokemonLogo" id="top-nav-logo" onClick={resetDefaults}/>
    </header>
  );
}

// ---------------------------------------------------------------------------
export default TopNavbar;