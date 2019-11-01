import React from 'react';
import videourl from '../assets/videos/inviktus_new.mp4';

import transparent from '../assets/Dashboard/transparent.png';

const VideosPage = (props) => (
    <div className="select-video">
        <video 
          controls
          src={videourl} 
          alt='demo video' 
          preload= "true"
          autoplay
          poster={transparent}
          onMouseOver={()=>props.mouseOverEvent()}
          onMouseOut={()=>props.mouseOutEvent()}
          ref={props.reference}
          type="video/mp4" />
    </div>
);

export default VideosPage;