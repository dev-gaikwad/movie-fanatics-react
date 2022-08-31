import React from 'react';

function MovieTile({ movie }) {
  const img_url = 'https://image.tmdb.org/t/p/w500';
  const image = img_url + movie.poster_path;
  return (
    <div className='movie'>
      <img src={image} alt='Movie Poster' />
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <span className='rating'>{movie.vote_average}</span>
      </div>
      <div className='overview'>
        <h3>Overview</h3>
        {movie.overview}
      </div>
    </div>
  );
}

export default MovieTile;
