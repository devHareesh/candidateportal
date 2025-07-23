import { useParams } from 'react-router-dom';
import { movies } from '../data/mockData';
import PersonProfile from '../assets/components/PersonProfile';

const PersonPage = () => {
  const { name } = useParams();
  return <PersonProfile name={name} movies={movies} />;
};

export default PersonPage;