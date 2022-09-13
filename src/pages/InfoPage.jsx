import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentTile from '../components/ContentTile';
import Header from '../components/Header';
import ContentContext from '../context/ContentContext';
import VideoPlayer from '../components/VideoPlayer';

function InfoPage() {
  const param = useParams();
  const { contentDetails, similarContent, video } = useContext(ContentContext);

  const backdrop_url = 'https://image.tmdb.org/t/p/original';
  const backdrop = backdrop_url + contentDetails.backdrop_path;
  let trailerKey = '';

  if (video === true && video.length > 0) {
    const trailer = video.find((vid) => vid.name === 'Official Trailer');
    trailerKey = trailer.key;
    console.log(trailerKey);
  }

  return (
    <>
      <Header />
      <main className='info-page'>
        <div className='content-title-container'>
          <h2 className='content-title'>
            {contentDetails.title || contentDetails.name}
          </h2>
          <h4 className='content-tagline'>"{contentDetails.tagline}"</h4>
        </div>
        <div className='backdrop'>
          <img src={backdrop} alt='Backdrop' />
        </div>
        <div className='content-info-container'>
          <div className='release-date'>
            <h3>Release Date</h3>
            <h4>{contentDetails.release_date}</h4>
          </div>
          <div className='genre'>
            <h3>Genre</h3>

            {contentDetails.genres ? (
              contentDetails.genres.map(({ name, id }) => {
                return <h4 key={id}>{name}</h4>;
              })
            ) : (
              <h4>No Genres Found</h4>
            )}
          </div>
          <div className='runtime'>
            <h3>Runtime</h3>
            <h4>
              {contentDetails.runtime || contentDetails.episode_run_time} mins
            </h4>
          </div>
        </div>

        <div className='content-info-container'>
          <h3>Overview :</h3>
          <p>{contentDetails.overview}</p>

          <VideoPlayer video={video} key={trailerKey} />
        </div>
        <div className='category similar'>
          <h3>Similar Content</h3>

          {similarContent ? (
            similarContent.map((content) => (
              <ContentTile key={content.id} content={content} />
            ))
          ) : (
            <p>No Similar Content</p>
          )}
        </div>
      </main>
    </>
  );
}

export default InfoPage;
