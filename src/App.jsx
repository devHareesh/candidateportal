import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import PersonPage from './pages/PersonPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/person/:name" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;