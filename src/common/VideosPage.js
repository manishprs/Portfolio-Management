import React from 'react';
import videourl from '../assets/videos/inviktus.mp4';
import videoImg from '../assets/videos/videoBanner.png';

const VideosPage = (props) => (
  <div className="col-md-12">
    <div className="select-video">
      <div>
        <video 
          controls src={videourl} 
          alt='demo video' 
          preload= "true"
          poster={videoImg}
          onMouseOver={()=>props.mouseOverEvent()}
          onMouseOut={()=>props.mouseOutEvent()}
          ref={props.reference} />
      </div>
    </div>
  </div>
);

export default VideosPage;