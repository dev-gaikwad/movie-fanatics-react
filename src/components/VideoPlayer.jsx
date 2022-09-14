import React from 'react';

function VideoPlayer({ video }) {
  if (video.length > 0) {
    const trailer = video.find((vid) => vid.name === 'Official Trailer');
    const trailerKey = trailer.key;
    return (
      <div>
        {video ? (
          <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/${trailerKey}`}
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
}

export default VideoPlayer;
