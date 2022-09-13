import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentTile from '../components/ContentTile';
import Header from '../components/Header';
import ContentContext from '../context/ContentContext';

function InfoPage() {
  const param = useParams();
  const { contentDetails, similarContent } = useContext(ContentContext);

  const backdrop_url = 'https://image.tmdb.org/t/p/original';
  const backdrop = backdrop_url + contentDetails.backdrop_path;

  console.log(similarContent);

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
          <div className='main'>
            <div className='container'>
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
      </div>
    </>
  );
}

export default InfoPage;
