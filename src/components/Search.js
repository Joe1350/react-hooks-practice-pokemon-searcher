import React from "react";

function Search({ search, onPokemonSearch }) {
  function handleSearchChange(e) {
    onPokemonSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          name={search}
          id={search} 
          value={search}
          onChange={handleSearchChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
