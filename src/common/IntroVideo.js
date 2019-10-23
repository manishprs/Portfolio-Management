import React from 'react';
import VideoPage from '../common/VideosPage';
import Analytics_Network from '../assets/Dashboard/Analytics_Network.jpg';
import ReadMoreReact from 'read-more-react';


const IntroVideo = (props) =>(
    <div id="videoDiv">
        <img className="vidImagOverlay" src={Analytics_Network} alt="videimage"/>
        <div className="overlayText col-md-5">
            <p className="vidHeadingText">{props.local.AboutUs.heading}</p>
            <hr className="vidHr"/>
            <p className="vidSubText">
            <ReadMoreReact 
                text={props.local.AboutUs.text}
                readMoreText='Learn more >'
            />
            </p>
        </div>
        <div className="videoDivOverlay">
            <VideoPage 
                mouseOverEvent = {props.mouseOverEvent}
                reference = {props.reference}
                mouseOutEvent = {props.mouseOutEvent}
            />  
        </div>
    </div>
);

export default IntroVideo;