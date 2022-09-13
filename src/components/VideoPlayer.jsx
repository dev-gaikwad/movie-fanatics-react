import React from 'react';

function VideoPlayer({ video, key }) {
  return (
    <div>
      {video ? (
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${key}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Trailer Video'
        />
      ) : (
        <p>No trailer found</p>
      )}
    </div>
  );
}

export default VideoPlayer;
