import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onTermSubmit = (term) => {
        console.log(term);
        console.log('calling from app');
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }

}

export default App;