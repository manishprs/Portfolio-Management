import React from 'react';
import { Col } from 'react-bootstrap';

const contentContainer = props => {
    return (
        <Col md={ 10 } className='content-container'>
            { props.children }
        </Col>
    ); 
}

export default contentContainer;