import React from 'react';
import { Row } from 'react-bootstrap';

const mainContainer = props => {
    return (
        // 
        <section className={ 'h-100 main-container' }>
            <Row className={ 'h-100' } xs={12}>
                { props.children }
            </Row>
        </section>
    ); 
}

export default mainContainer;