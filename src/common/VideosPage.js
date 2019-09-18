import React from 'react';
import videourl from '../assets/videos/inviktus.mp4';

const VideosPage = () => (
  <div className="col-md-4">
    <div className="select-video">
      <div>
        <video controls src={videourl} alt='demo video' />
      </div>
    </div>
  </div>
);

export default VideosPage;