import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Layout from '../../Layout';
import Login from './Login';

const customer = props => {

    return(
        <Layout>
            <section className='pm-login-container'>
                <Row>
                    <Col xs={ 12 } md={ 6 }>
                        <Login {...props} loginType="customer" loginText="Login to Inviktus" /> 
                    </Col>
                </Row>
            </section>      
        </Layout>
    );    
}

export default customer;