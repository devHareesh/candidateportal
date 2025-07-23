import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  if (!movies.length) return <p>No movies found.</p>;
const slugify = str =>
  str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} slugify={slugify}/>
      ))}
    </div>
  );
};

export default MovieList;