import React from 'react';

// ---------------------------------------------------------------------------
const prevRangeText = "«";
const nextRangeText = "»";
const prevPageText = '‹';
const nextPageText = '›';
const ellipsesText = '...';
const btn_classes = "btn btn-page ";
const btn_active_classes = btn_classes.concat("btn-page-active");
const btn_disabled_classes = btn_classes.concat(" btn-page-disabled");

// ---------------------------------------------------------------------------
const btnCreate = (key, className, onClick, innerHTML, value) => {
    return (<button key={key} value={value} className={className} onClick={onClick}>{innerHTML}</button>)
}

// ---------------------------------------------------------------------------
const btnEllipses = () => {
    return btnCreate("ellipses"+Math.random(), btn_classes.concat(btn_disabled_classes), () => {}, ellipsesText, "ellipses");
}

// ---------------------------------------------------------------------------
const itemsAdd = (current_items, btn) => {
    return current_items.push(btn);
}

// ---------------------------------------------------------------------------
const itemsAddEllipses = (items) => {
    return itemsAdd(items, btnEllipses());
}

// ---------------------------------------------------------------------------
const itemsAddNextPage = (items, onClick) => {
    return itemsAdd(items, btnCreate("next_page", btn_classes, onClick, nextPageText, "next_page"));  
}

// ---------------------------------------------------------------------------
const itemsAddPrevPage = (items, onClick) => {
    return itemsAdd(items, btnCreate("prev_page", btn_classes, onClick, prevPageText, "prev_page"));
}

// ---------------------------------------------------------------------------
const itemsAddNextRange = (items, onClick) => {
    return itemsAdd(items, btnCreate("next_range", btn_classes, onClick, nextRangeText, "next_range"));
}

// ---------------------------------------------------------------------------
const itemsAddPrevRange = (items, onClick) => {
    return itemsAdd(items, btnCreate("prev_range", btn_classes, onClick, prevRangeText, "prev_range"))
}
// ---------------------------------------------------------------------------
const itemsAddFirstPage = (items, onClick) => {
    return itemsAdd(items, btnCreate(1, btn_classes, onClick, 1, 1))
}

// ---------------------------------------------------------------------------
const itemsAddLastPage = (items, onClick, lastPage) => {
    return itemsAdd(items, btnCreate(lastPage, btn_classes, onClick, lastPage, lastPage))
}


// ---------------------------------------------------------------------------
const itemsAddBtnRange = (items, start, end, activePage, onClick) => {
    for(let i = start; i <= end; i++) {
        let button = {};
        if (i === activePage) {
            button = btnCreate(i, btn_active_classes, onClick, i, i);
        } else {
            button = btnCreate(i, btn_classes, onClick, i, i);
        }
        itemsAdd(items, button);
    }
}

// ---------------------------------------------------------------------------
const PaginationItems = ({totalPages, activePage, handlePageChange, pageRange}) => {
    let items = [];
    if(totalPages > 1) {
        itemsAddPrevRange(items, handlePageChange);
        itemsAddPrevPage(items, handlePageChange);
        
        if (activePage > pageRange) {
            itemsAddFirstPage(items, handlePageChange);
            itemsAddEllipses(items);
        }

        if (activePage <= pageRange) {
            itemsAddBtnRange(items, 1, pageRange, activePage, handlePageChange);
        } else if (activePage >= pageRange) {
            if (activePage > (totalPages - pageRange)) {
                itemsAddBtnRange(items, totalPages - pageRange, totalPages, activePage, handlePageChange);
            } else {
                itemsAddBtnRange(items, activePage - 2, activePage + 2, activePage, handlePageChange);
            }
        }
        
        if(activePage <= (totalPages - pageRange)) {
            itemsAddEllipses(items);
            itemsAddLastPage(items, handlePageChange, totalPages);
        }

        itemsAddNextPage(items, handlePageChange);
        itemsAddNextRange(items, handlePageChange);
    }
    return items;
}

// ---------------------------------------------------------------------------
export default PaginationItems;