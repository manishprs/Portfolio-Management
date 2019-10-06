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
                <h1 className="comingsoon"><p>Please Contact<br/>Shoven Shrivastava <br/>@617-583-3126 <br/>for Demo.</p></h1>
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