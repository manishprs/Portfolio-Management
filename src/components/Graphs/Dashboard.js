import React from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react';

const dashboard = props => {

    // const reportTypesMarkup = props.reportTypes.map(current => {
    const reportTypesMarkup = [{ name: 'Portfolio Attribution', id: 'attr' },  { name: 'Portfolio Performance', id: 'returns' }, { name: 'Portfolio Characteristics', id: 'char' }].map(current => {
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
        <section>
            <div className='section-heading-container'>
                <span className='section-heading-text'>Dashboard</span>
            </div>
            <Container style={{ padding: '15px' }}>
                <Menu secondary vertical>
                    { reportTypesMarkup }
                </Menu>
            </Container>
        </section>
    );
}

export default dashboard;