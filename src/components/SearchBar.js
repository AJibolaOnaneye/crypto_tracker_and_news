
import React from 'react';
import "./Navbar.css"
import './Searchbar.css'

const SearchBar = ({ ...rest }) => {
  return (
    <div className="search-container">
    <div className="coin_search">
      <input className= "coin_input" {...rest} />
     
    </div>
    </div>
  );
};

export default SearchBar;