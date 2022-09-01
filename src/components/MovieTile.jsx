import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MoviesContext from '../context/MoviesContext';

function MovieTile({ movie }) {
  const { setClickedMovie } = useContext(MoviesContext);

  const img_url = 'https://image.tmdb.org/t/p/w500';
  const image = img_url + movie.poster_path;

  function ratingColorFilter(rating) {
    if (rating >= 7.5) {
      return 'green';
    } else if (rating >= 5) {
      return 'orange';
    } else return 'red';
  }

  return (
    <div
      className='movie'
      onClick={() => {
        setClickedMovie(movie);
      }}
    >
      <Link to='/info'>
        <img src={image} alt='Movie Poster' />
        <div className='movie-info'>
          <h3>{movie.title}</h3>
          <span className={ratingColorFilter(movie.vote_average)}>
            {movie.vote_average}
          </span>
        </div>
        <div className='overview'>
          <h3>Overview</h3>
          {movie.overview}
        </div>
      </Link>
    </div>
  );
}

export default MovieTile;
