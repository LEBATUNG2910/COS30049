// SearchBar.js

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search currencies..."
        value={term}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
