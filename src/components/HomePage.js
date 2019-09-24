import React, { Component } from 'react';
import Dashboard from '../common/Dashboard';
import Layout from '../Layout';
import VideoPage from '../common/VideosPage';

class HomePage extends Component {
    render(){
        return(
        <Layout>            
            <Dashboard/>
            <VideoPage/>
        </Layout>
        );
    }
}
      
export default HomePage;