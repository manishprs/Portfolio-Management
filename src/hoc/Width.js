import React from 'react';
import { Col } from 'react-bootstrap';

const width = props => {
   return (
      <Col sm={props.width} >
         { props.children }
      </Col>
   );
}
export default width;