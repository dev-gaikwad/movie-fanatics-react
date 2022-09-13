import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentTile from '../components/ContentTile';
import Header from '../components/Header';
import ContentContext from '../context/ContentContext';

function InfoPage() {
  const param = useParams();
  const { contentDetails, similarContent, video } = useContext(ContentContext);

  const backdrop_url = 'https://image.tmdb.org/t/p/original';
  const backdrop = backdrop_url + contentDetails.backdrop_path;
  let trailerKey = '';

  if (video.length > 0) {
    const trailer = video.find((vid) => vid.name === 'Official Trailer');
    trailerKey = trailer.key;
  }

  return (
    <>
      <Header />
      <div className='info-page'>
        <h2>
          {contentDetails.title || contentDetails.name}
          {contentDetails.tagline}
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
          <h3>
            Runtime :{' '}
            {contentDetails.runtime || contentDetails.episode_run_time} mins
          </h3>

          <div>
            <h3>Overview :</h3>
            <p>{contentDetails.overview}</p>
          </div>

          <div>
            <iframe
              width='853'
              height='480'
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Trailer Video'
            />
          </div>

          <div className='main'>
            <h3>Similar Content</h3>
          </div>
          {similarContent ? (
            similarContent.map((content) => (
              <ContentTile key={content.id} content={content} />
            ))
          ) : (
            <p>No Similar Content</p>
          )}
        </div>
      </div>
    </>
  );
}

export default InfoPage;
