import { Link } from 'react-router-dom';

const PersonProfile = ({ name, movies }) => {
  const related = movies.filter(
    m => m.director === name || m.cast.includes(name)
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <h2 className="text-lg font-semibold">Movies:</h2>
      <ul>
        {related.map(m => (
          <li key={m.id}><Link to={`/movie/${m.id}`} className="text-blue-600">{m.title}</Link></li>
        ))}
      </ul>
      
        {related.map(m => (
          <button  key={m.id}><Link to={`/movie/${m.id}`} className="text-blue-600">Back</Link></button>
        ))}
      
    </div>
  );
};

export default PersonProfile;