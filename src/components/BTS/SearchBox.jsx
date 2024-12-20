import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';

function SearchBox() {
    return (
        <div className="searchBar">
            <input type="text" className="searchInput" placeholder="Search..."/>
            <button className="searchButton">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBox;
