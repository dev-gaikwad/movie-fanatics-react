import React from 'react';

function MovieTile({ image, title, rating, overview }) {
  return (
    <div className='movie'>
      <img src={image} alt='Movie Poster' />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className='rating'>{rating}</span>
      </div>
      <div className='overview'>
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
}

export default MovieTile;
