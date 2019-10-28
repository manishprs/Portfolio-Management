import React from 'react';
// "http://steelthemes.com/demo/html/fortune-html/images/resource/1.jp
const Overlay = (props) =>(
    <div className="featured-service col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box wow fadeIn animated animated" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "0ms", animationName: "fadeIn"}}>
            <div className="image-box">
                <figure className="image">
                    <a className="overlay-anchor" href="#">
                        <img className="overlay-img"src={props.data.image} alt=""/>
                    </a>
                </figure>
                    <div className="caption-box">
                        <div className="icon">
                            <span className="icon-graphic"><img src={props.data.iconImg} width="40" height="40" alt={props.data.headingTitle}/></span>
                        </div>
                        <h4 className="title">
                            <a className="overlay-anchor" href="#">{props.data.headingTitle}</a>
                        </h4>
                    </div>
                    <div className="overlay-box">
                        <div className="icon_box">
                            <span className="icon-graphic"></span>
                        </div>
                        <div className="overlay-inner">
                        <div className="overlay-content">
                                <h4 className="title"><a href="#">{props.data.headingTitle}</a></h4>
                                <div className="text">{props.content}</div>
                            </div>
                    </div>
                </div>                    
            </div>
        </div>
    </div>
);

export default Overlay;