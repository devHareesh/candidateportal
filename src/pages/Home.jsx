import React, { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import CandidateCard from "../components/CandidateCard";

const Home = () => {
  const [candidates, setCandidates] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/candidates.json")
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  const handleFilter = (query) => {
    const q = query.toLowerCase();
    setFiltered(
      candidates.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.skills.join(",").toLowerCase().includes(q) ||
          c.branch.toLowerCase().includes(q) ||
          c.college.toLowerCase().includes(q)
      )
    );
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4"><br></br>
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((c) => (
          <CandidateCard key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
};

export default Home;
