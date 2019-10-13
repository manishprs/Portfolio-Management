import React, { Component } from 'react';
import Dashboard from '../common/Dashboard';
import Layout from '../Layout';
import VideoPage from '../common/VideosPage';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.videoPlay = React.createRef();
    }
    handleMouseEvent =() => {
        this.playVideo();
    }
    handleMouseOutEvent =()=>{
        this.pauseVideo();
    }
   
    async playVideo () {
        try {
          await this.videoPlay.current.play();
        } catch(err) {
          console.log(err);
        }
    }

    async pauseVideo () {
        try {
          await this.videoPlay.current.pause();
        } catch(err) {
          console.log(err);
        }
    }
    render(){
        return(
        <Layout>            
            <Dashboard 
                mouseOverEvent = {this.handleMouseEvent}
                reference = {this.videoPlay}
                mouseOutEvent = {this.handleMouseOutEvent}
            />
            <div className="dummy">
                <h3>Inviktus is Big Data, AI and Blockchain based Middle and Front Office Solution for Investment Industry. Inviktus is Cloud based low cost solution for Data Processing, Reporting and Distribution platform. Inviktus provides platform for Portfolio Analytics, Client Reporting, Report Distribution platform.</h3>
                <h3 className="comingsoon"><p>Please Contact<br/>Shoven Shrivastava <br/>@617-583-3126 <br/>for Demo.</p></h3>
            </div>
            <VideoPage 
                mouseOverEvent = {this.handleMouseEvent}
                reference = {this.videoPlay}
                mouseOutEvent = {this.handleMouseOutEvent}
            />
        </Layout>
        );
    }
}
      
export default HomePage;