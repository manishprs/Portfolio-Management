import React, { Component } from 'react';
import Dashboard from '../common/Dashboard';
import Layout from '../Layout';
import '../assets/styles/dashboard.css';
import IntoductionText from '../common/IntroComponent';
import OverlayComponent from '../common/Overlay';
import IntroVideo from '../common/IntroVideo';
import OurTeam from '../common/ourTeam';
import QueryForm from '../common/QueryForm';
import local from '../constants/constant';
import {Container, Row, Col} from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.videoPlay = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
      
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }
       
    async playVideo () {
        try {
          await this.videoPlay.current.play();
        } catch(err) {
          console.log(err);
          console.log(err.name);
          console.log(err.code);
          console.log(err.message);
        }
    }

    async pauseVideo () {
        try {
          await this.videoPlay.current.pause();
        } catch(err) {
          console.log(err);
          console.log(err.name);
          console.log(err.code);
          console.log(err.message);
        }
    }

    handleScroll= (event)=>{
        const elem = document.getElementById('videoDiv');
        let coords = elem.getBoundingClientRect();
        let windowHeight = document.documentElement.clientHeight;
        let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
        if(topVisible || bottomVisible){
            this.playVideo();
        } else {
            this.pauseVideo();
        }
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
    }

    render(){
        return(
        <Layout>            
            <Dashboard/>
            <Container>
                <Row> 
                <IntoductionText
                local={local}
                />
                </Row>
                <Row>
                {/* <div className="row clearfix"> */}
                   
                    {local.ServicesOverlay.map((data,index)=>(
                        <OverlayComponent 
                            data={data}
                            key={index}
                        />
                    ))}
                </Row>
                {/* </div> */}
                <Row>
                <Col lg={12} sm={12} md={12} xs={12}>
                    
                <IntroVideo
                    reference = {this.videoPlay}
                    local={local}
                    handleScroll = {this.handleScroll}
                />
                </Col>
                </Row>
                <Row>
                <OurTeam
                local={local}
                />   
                <QueryForm
                onFormSubmit={this.formSubmitHandler}
                local={local}
                />        
                </Row>  
            {/* </div> */}
            </Container>
        </Layout>
        );
    }
}
      
export default HomePage;