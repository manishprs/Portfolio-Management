import React, { Component } from 'react';
import Header from '../common/Header';
import Dashboard from '../common/Dashboard';

class HomePage extends Component {
    render(){
        return(
        <div>
            <Header/>
            <Dashboard/>
        </div>
        );
    }
}
      
export default HomePage;