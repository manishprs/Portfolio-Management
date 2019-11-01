import React from 'react';
import VideoPage from '../common/VideosPage';
import Analytics_Network from '../assets/videos/Video_BG.jpg';
import ReadMoreReact from 'read-more-react';


const IntroVideo = (props) =>(
    <div id="videoDiv" onScroll={(e)=>props.handleScroll(e)}>
        <img className="vidImagOverlay" src={Analytics_Network} alt="videimage"/>
        <div className="overlayText col-md-5 col-xs-12 col-sm-12 col-lg-5">
            <p className="vidHeadingText">{props.local.AboutUs.heading}</p>
            <hr className="vidHr"/>
            <div className="vidSubText">
            <ReadMoreReact 
                text={props.local.AboutUs.text}
                readMoreText='Learn more >'
            />
            </div>
        </div>
        <div className="videoDivOverlay col-md-7 col-xs-12 col-sm-12 col-lg-7">
            <VideoPage 
                reference = {props.reference}
            />  
        </div>
    </div>
);

export default IntroVideo;