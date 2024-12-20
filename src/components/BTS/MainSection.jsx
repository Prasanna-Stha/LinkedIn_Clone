import React from 'react';
import SearchBox from './SearchBox';
import './MainSection.css';

function MainSection() {
    return (
        <div className="mainSection">
            <div className="searchBarWrapper">
                <SearchBox />
            </div>
        </div>
    );
}

export default MainSection;
