import React from 'react';

const Overlay = () =>(
    <div className="featured-service col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box wow fadeIn animated animated" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeIn"}}>
            <div className="image-box">
                <figure className="image">
                    <a className="overlay-anchor" href="service-single.html">
                        <img className="overlay-img"src="http://steelthemes.com/demo/html/fortune-html/images/resource/1.jpg" alt=""/>
                    </a>
                </figure>
                    <div className="caption-box">
                        <div className="icon"><span className="icon-graphic"></span></div>
                        <h4 className="title"><a className="overlay-anchor" href="service-single.html">About Business</a></h4>
                    </div>
                    <div className="overlay-box">
                        <div className="icon_box">
                            <span className="icon-graphic"></span>
                        </div>
                        <div className="overlay-inner">
                        <div className="overlay-content">
                                <h4 className="title"><a href="service-single.html">About Business</a></h4>
                                <div className="text">Business analytics (BA) is the practice of iterative, methodical exploration of an organization's data with emphasis on statistical analysis.</div>
                            </div>
                    </div>
                </div>                    
            </div>
        </div>
    </div>
);

export default Overlay;