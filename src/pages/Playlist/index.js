import React from 'react';
import './playlist.css';

const Playlist = (props) => {
  return (
    <div className="Playlist" id="playlist">
      <iframe
        title="spotify"
        src="https://open.spotify.com/embed/album/3opsW5ma39VhytHUqlmJd9"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className="Spotify"
      ></iframe>
    </div>
  );
};

export default Playlist;
