import React, { Component } from 'react';

// Escribir barra de búsqueda
class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="City, Country"></input>
      </div>
    );
  }
}

export default SearchBar;