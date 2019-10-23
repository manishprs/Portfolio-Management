import React, { Component } from 'react';
import Dashboard from '../common/DashboardNew';
import Layout from '../LayoutNew';
import '../assets/styles/dashboard.css';
import IntoductionText from '../common/IntroComponent';
// import OverlayComponent from '../common/Overlay';
import IntroVideo from '../common/IntroVideo';
import OurTeam from '../common/ourTeam';
import QueryForm from '../common/QueryForm';
import local from '../constants/constant';

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
    formSubmitHandler = (event) => {
        event.preventDefault();
    }
    render(){
        return(
        <Layout>            
            <Dashboard/>
            <div className="container">
                <IntoductionText
                local={local}
                />
                {/* <div className="row clearfix">
                    <OverlayComponent/>
                    <OverlayComponent/>
                    <OverlayComponent/>
                </div> */}
                <IntroVideo
                    mouseOverEvent = {this.handleMouseEvent}
                    reference = {this.videoPlay}
                    mouseOutEvent = {this.handleMouseOutEvent}
                    local={local}
                />
                <OurTeam
                local={local}
                />   
                <QueryForm
                onFormSubmit={this.formSubmitHandler}
                local={local}
                />          
            </div>
        </Layout>
        );
    }
}
      
export default HomePage;