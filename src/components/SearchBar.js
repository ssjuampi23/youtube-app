import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onFormSearchSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSearchSubmit} className="ui form">
                <div className="field">
                    <label>Search for a video</label>
                    <input
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                        type="text"/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
