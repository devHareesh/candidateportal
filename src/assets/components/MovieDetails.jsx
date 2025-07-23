import { Link } from 'react-router-dom';

const MovieDetails = ({ movie,handleBack }) => (
  
  <div className="p-4 border rounded">
    <h1 className="text-2xl font-bold">{movie.title} ({movie.year})</h1><button onClick={handleBack}>Back</button>
    <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
    <p><strong>Director:</strong> <Link className="text-blue-500" to={`/person/${movie.director}`}>{movie.director}</Link></p>
    <p><strong>Cast:</strong> {movie.cast.map(actor => (
      <Link key={actor} className="text-blue-500 mr-2" to={`/person/${actor}`}>{actor}</Link>
    ))}</p>
  </div>
);

export default MovieDetails;