import { useContext } from 'react';
// import { useState, useEffect } from 'react';
import MoviesContext from '../context/MoviesContext';
import MovieTile from './MovieTile';

function Main() {
  const { movies } = useContext(MoviesContext);

  const tempImage =
    'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/17/5b5a6d0f766ee148500eb20ce06e783e_500x735.jpg?t=1431919417';
  const tempTitle = 'The Departed';
  const tempRating = '9.6';
  const tempOverview =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis debitis excepturi est at dolor placeat esse aliquid maxime enim! Adipisci ratione explicabo asperiores tempore reiciendis odio accusamus in cupiditate?';

  return (
    <main id='main'>
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </main>
  );
}

export default Main;
