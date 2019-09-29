import React from 'react';
import videourl from '../assets/videos/inviktus.mp4';

const VideosPage = (props) => (
  <div className="col-md-12">
    <div className="select-video">
      <div>
        <video 
          controls src={videourl} 
          alt='demo video' 
          preload= "true"
          onMouseOver={()=>props.mouseOverEvent()}
          onMouseOut={()=>props.mouseOutEvent()}
          ref={props.reference} />
      </div>
    </div>
  </div>
);

export default VideosPage;