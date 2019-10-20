import React from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react';

const dashboard = props => {

    const reportTypesMarkup = props.reportTypes.map(current => {
        return (
            <Menu.Item
                name={ current.name }
                active={ props.activeReportType === current.id }
                key={ current.id }
                onClick={ props.click.bind(null, current.id) }
            />
        );
    });
    return (
        <div>
            <h1 style={{ color: '#33567E' }}>Dashboard</h1>
            <Container style={{ paddingTop: '5%' }}>
                <Menu secondary vertical>
                    { reportTypesMarkup }
                </Menu>
            </Container>
        </div>
    );
}

export default dashboard;