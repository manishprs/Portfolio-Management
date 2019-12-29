import React from 'react';
import { Col } from 'react-bootstrap';

const pmColumn = props => {
    return (
        <Col md={ 2 } style={{ padding: 0, ...props.style }}>
            { props.children }
        </Col>
    );
}

export default pmColumn;
