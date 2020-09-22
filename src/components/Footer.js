// ---------------------------------------------------------------------------
import React from 'react';
import '../styles/Footer.css';

// ---------------------------------------------------------------------------
const Footer = () => {
  // -------------------------------------------------------------------------
  return (
    <footer className="footer">
      <div className="copywrite">
        &#169; Catherine Kaethler 2020
      </div>
      <div className="api_ref">
        Information from <a href="https://pokeapi.co">PokeApi</a>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
export default Footer;