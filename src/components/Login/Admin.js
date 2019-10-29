import React from 'react';
import ComingSoon from '../../assets/Dashboard/Inviktus.jpg';
// import Layout from '../../Layout';
import Layout from '../../Layout';

const Admin = ()=>(
    <Layout>
        <div>
            <h1 className="demoMessage"><p>Please Contact<br/>Shoven Shrivastava <br/>@617-583-3126 <br/>for Demo.</p></h1>
        </div>   
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