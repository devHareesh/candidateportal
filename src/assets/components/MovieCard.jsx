import { Link } from 'react-router-dom';
import '../../index.css'
const MovieCard = ({ movie ,slugify}) => (
  <div className="movie-card">
    {console.log(movie)}
  <div className="movie-details">
    <p><strong style={{ color: "#C77DFF" }}>{movie.title}:</strong>  {movie.title} ({movie.year})</p>
    <p><strong style={{ color: "#7DE2FC" }}>Genres:</strong> {movie.genres.join(', ')}</p>
    <p><strong style={{ color: "#C0AFFF" }}>Director:</strong> <Link className="text-blue-500" to={`/person/${movie.director}`}>{movie.director}</Link></p>
    <button className="imdb-button"><Link to={`/movie/${movie.id}`} className="text-sm text-blue-600 underline">View Details</Link></button>
  </div>
</div>

);

export default MovieCard;