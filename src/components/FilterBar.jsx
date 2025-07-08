import React, { useState } from "react";
import '../index.css';
const FilterBar = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
   <div className="search-wrapper">
  <input
    type="text"
    placeholder="Search..."
    value={query}
    onChange={handleInput}
    className="search-input"
  />
  <button className="search-button">🔍</button>
</div>

  );
};

export default FilterBar;
