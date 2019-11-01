import React from 'react';
import videourl from '../assets/videos/inviktus_new.mp4';

import transparent from '../assets/Dashboard/transparent.png';

const VideosPage = (props) => (
    <div className="select-video">
        <video 
          title="Inviktus Introduction"
          webkitplaysinline="true"
          playsInline={true}
          muted="muted"
          controls
          src={videourl} 
          alt='demo video' 
          preload= "true"
          autoPlay= {true}
          poster={transparent}
          ref={props.reference}
          type="video/mp4" 
         />
    </div>
);

export default VideosPage;