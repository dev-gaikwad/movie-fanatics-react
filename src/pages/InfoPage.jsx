import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentContext from '../context/ContentContext';

function InfoPage() {
  const param = useParams();
  const { contentDetails } = useContext(ContentContext);

  const backdrop_url = 'https://image.tmdb.org/t/p/original';
  const backdrop = backdrop_url + contentDetails.backdrop_path;

  console.log(contentDetails);

  return (
    <>
      <div className='info-page'>
        <h2>
          {contentDetails.title} : {contentDetails.tagline}
        </h2>

        <div className='movie-info-container'>
          <img src={backdrop} alt='Backdrop' />
          <div>
            <h3>Release Date : {contentDetails.release_date} </h3>
          </div>
          <div>
            <h3>
              Genre :
              {contentDetails.genres ? (
                contentDetails.genres.map(({ name, id }) => {
                  return <p key={id}>{name}</p>;
                })
              ) : (
                <p>No Genres Found</p>
              )}
            </h3>
          </div>
          <h3>Runtime : {contentDetails.runtime} mins</h3>

          {/* <h3>
            Genre :
            {contentDetails.genres.map(({ name }) => {
              return <p>{name}</p>;
            })}
          </h3> */}
          <div>
            <h3>Overview :</h3>
            <p>{contentDetails.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
