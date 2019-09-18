import React from 'react';
import { ListGroup, Accordion } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import MyIcons from '../../hoc/MyIcons';

import '../../containers/App.css';
import logo from '../../assets/dashboard.svg';

const reportTypes = props => {

   const iconName = (props.isOpen ? 'angle down' : 'angle right');

   let reportTypes;
   if(props.reportTypes.length === 0) {
      reportTypes = (
         <ListGroup.Item 
            title="No Data Found" 
            className={ `list-item` } 
            key="no-data-found"
         >
            No Report Types
         </ListGroup.Item>
      );
   }
   else {
      reportTypes = props.reportTypes.map(type => {
         return (
            <ListGroup.Item  
               key={type.id}
               title={type.name}
               className={`list-item ${props.active === type.id ? 'active-item' : ''}`}
               onClick={props.click.bind(null, type.id)}
            >
               { (props.active === type.id) ? <Icon className="pm-active-icon" name="angle right" /> : '' }
               { type.name }
            </ListGroup.Item>
         );
      });
   }

   return (
      <ListGroup.Item className="left-sidebar-list-item">
         <Accordion.Toggle 
            as={ListGroup.Item} 
            eventKey="report-types"
            className='pm-sidebar-items'
            onClick={ props.openHandler.bind(null, 'report-types') }
         >
            <MyIcons logo={logo} />
            Dashboard
            <Icon style={{ float: 'right' }} name={ iconName } />
         </Accordion.Toggle>
         <Accordion.Collapse eventKey="report-types">
            <ListGroup variant="flush">
               { reportTypes }
            </ListGroup>
         </Accordion.Collapse>
      </ListGroup.Item>
   );
};
export default reportTypes;