import { useNavigate, useParams } from 'react-router-dom';
import { movies } from '../data/mockData';
import MovieDetails from '../assets/components/MovieDetails';

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  const movie = movies.find(m => m.id === id);

  if (!movie) return <p>Movie not found.</p>;

  return <MovieDetails movie={movie} handleBack={handleBack} />;
};

export default MoviePage;