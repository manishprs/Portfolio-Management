import React from 'react';
import ComingSoon from '../../assets/comingsoon.jpg';
import Layout from '../../Layout';

const Admin = ()=>(
    <Layout>   
        <img
            alt="Invictus Analytics"
            src={ ComingSoon }
            width="100%"
            height="550px"
            className="d-inline-block align-top"
        /> 
    </Layout>   
);

export default Admin;