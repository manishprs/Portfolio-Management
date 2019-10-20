import React from 'react';
import videourl from '../assets/videos/inviktus.mp4';
import Analytics_Network from '../assets/Dashboard/Analytics_Network.jpg';

const VideosPage = (props) => (
    <div className="select-video">
      <div>
        <video 
          controls={false}
          src={videourl} 
          alt='demo video' 
          preload= "true"
          poster={Analytics_Network}
          onMouseOver={()=>props.mouseOverEvent()}
          onMouseOut={()=>props.mouseOutEvent()}
          ref={props.reference} />
      </div>
    </div>
);

export default VideosPage;