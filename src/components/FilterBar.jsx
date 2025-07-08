import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name, skill, branch, college..."
        className="border p-2 w-full rounded"
        value={query}
        onChange={handleInput}
      />
    </div>
  );
};

export default FilterBar;
