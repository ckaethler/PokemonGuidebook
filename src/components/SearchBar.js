import React from 'react';

const SearchBar = ({searchfield, searchChange}) => {
    return (
        <div className="search-bar-container">
            <label className="label-filterNavbar">Search Pokémon:</label>
            <input 
                className="searchbox"
                type="search" 
                placeholder="Enter Name..."
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;