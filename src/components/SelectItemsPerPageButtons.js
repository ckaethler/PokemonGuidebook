import React from 'react';

const SelectItemsPerPageButtons = ({ options, onOptionSelected, selectedValue, total_pokemon}) => {
    return (
        <div className="limit-per-page" id="limit-per-page">
            <label className="label-filterNavbar" id="label-limit">Limit Per Page:</label>

            {options.map((option) => {
                return (
                    <button 
                        key={option} 
                        onClick={onOptionSelected} 
                        className={selectedValue === option ? 'btn btn-active ' : 'btn '}>{option}
                    </button>
                )
            })}

            {total_pokemon ? 
                <button 
                    key={total_pokemon} 
                    onClick={onOptionSelected} 
                    className={selectedValue === total_pokemon ? 'btn btn-active ' : 'btn '}>
                        All
                </button> : false
            }
        </div>
    )
}

export default SelectItemsPerPageButtons;