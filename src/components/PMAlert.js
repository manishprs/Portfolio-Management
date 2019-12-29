import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const pmAlert = props => {
    return (
        <Container style={{ padding: '2%' }}>
            <Alert variant='default' className='pm-alert'>
                <span>{ props.message }</span>
            </Alert>
        </Container>
    );
}

export default pmAlert;