import { useState } from 'react';
import { movies as initialMovies } from '../data/mockData';
import MovieList from '../assets/components/MovieList';
import '../index.css'
const Home = () => {
  const [search, setSearch] = useState('');

  const filtered = initialMovies.filter(movie => {
    const lower = search.toLowerCase();
    return (
      movie.title.toLowerCase().includes(lower) ||
      movie.genres.some(g => g.toLowerCase().includes(lower)) ||
      movie.director.toLowerCase().includes(lower) ||
      movie.cast.some(c => c.toLowerCase().includes(lower))
    );
  });

  return (
    <div className="p-4">
      <h2 style={{ marginLeft: "348px" }}>Movie Explorer Platform – Discover Movies, Actors, Directors, and Genres</h2>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          🔍
        </button>
      </div>
      <MovieList movies={filtered} />
    </div>

  );
};

export default Home;