import React from 'react';
import '../styles/PaginationContainer.css';
import PaginationItems from './PaginationItems';

const PaginationContainer = ({totalPages, activePage, onSelect, pageRange}) => {
    return (
        <footer className="pagination-container">
            <PaginationItems totalPages={totalPages} activePage={activePage} handlePageChange={onSelect} pageRange={pageRange} />
        </footer>
    );
}

export default PaginationContainer;