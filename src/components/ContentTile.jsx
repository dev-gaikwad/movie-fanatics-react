import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContentContext from '../context/ContentContext';

function MovieTile({ content }) {
  const { setClickedTile, getContentDetails } = useContext(ContentContext);

  const img_url = 'https://image.tmdb.org/t/p/w500';
  const image = img_url + content.poster_path;

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
        setClickedTile(content);
        getContentDetails(content);
      }}
    >
      <Link to='/info'>
        <img src={image} alt='Poster' />
        <div className='movie-info'>
          <h3>{content.title}</h3>
          <span className={ratingColorFilter(content.vote_average)}>
            {content.vote_average}
          </span>
        </div>
        <div className='overview'>
          <h3>Overview</h3>
          {content.overview}
        </div>
      </Link>
    </div>
  );
}

export default MovieTile;
