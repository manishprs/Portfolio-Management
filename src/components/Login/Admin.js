import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Layout from '../../Layout';
import Login from './Login';

const Admin = props => {

    return(
        <Layout>
            <section className='pm-login-container'>
                <Row>
                    <Col xs={ 12 } md={ 6 }>
                        <Login {...props}  loginType="admin" loginText="Login to Inviktus Admin" /> 
                    </Col>
                </Row>
            </section>      
        </Layout>
    );    
}

export default Admin;