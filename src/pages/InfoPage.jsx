import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MoviesContext from '../context/MoviesContext';

function InfoPage({ movie }) {
  const param = useParams();
  const { clickedMovie, genreList } = useContext(MoviesContext);
  console.log(clickedMovie);
  console.log(clickedMovie.genre_ids);

  const backdrop_url = 'https://image.tmdb.org/t/p/original';
  const backdrop = backdrop_url + clickedMovie.backdrop_path;

  return (
    <>
      <div className='info-page'>
        <h2>{clickedMovie.title}</h2>
        <div className='movie-info-container'>
          <img src={backdrop} alt='Backdrop' />
          <h3>Release Date : {clickedMovie.release_date}</h3>
          <div>
            <h3>Overview :</h3>
            <p>{clickedMovie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
