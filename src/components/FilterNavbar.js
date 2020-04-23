// ---------------------------------------------------------------------------
import React from 'react';
import '../styles/FilterNavbar.css';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';
import SearchBar from './SearchBar';

// ---------------------------------------------------------------------------
const FilterNavbar = ({ options, selectedValue, total_pokemon, onOptionSelected, searchfield, searchChange}) => {
  // -------------------------------------------------------------------------
    return (
      <nav className="filter-navbar">
        <SelectItemsPerPageButtons
          options={options}
          selectedValue={selectedValue}
          total_pokemon={total_pokemon}
          onOptionSelected={onOptionSelected}
        />

        <SearchBar 
          searchfield={searchfield} 
          searchChange={searchChange} 
        />
      </nav>
    );
}

// ---------------------------------------------------------------------------
export default FilterNavbar;