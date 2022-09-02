import { useContext } from 'react';
import MoviesContext from '../context/MoviesContext';
import MovieTile from './MovieTile';

function Main() {
  const { movies } = useContext(MoviesContext);

  return (
    <main id='main'>
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </main>
  );
}

export default Main;
