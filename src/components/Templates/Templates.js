import React from 'react';
import { ListGroup, Accordion } from 'react-bootstrap';
import { Icon } from  'semantic-ui-react';
import MyIcons from '../../hoc/MyIcons';

import '../../containers/App.css';
import logo from '../../assets/template.svg';

const templates = (props) => {

   const iconName = (props.isOpen ? 'angle down' : 'angle right');

   const templates = props.templates.map(template => {
      return (
         <ListGroup.Item  
            onClick={props.click.bind(null, template.id)} 
            key={template.id}
            className={ `list-item ${template.id === props.active ? 'active-item' : '' }` }
         >
            {/* {stringCutter(template.name, 10)} */}
            { template.name }
         </ListGroup.Item>
      );
   });

   return (
      <ListGroup.Item className="left-sidebar-list-item">
         <Accordion.Toggle 
            as={ListGroup.Item} 
            eventKey="templates"
            className='pm-sidebar-items'
            onClick={ props.openHandler.bind(null, 'templates') }
         >
            <MyIcons logo={logo} />
            Saved Templates
            <Icon style={{ float: 'right'}} name={ iconName } />
         </Accordion.Toggle>
         <Accordion.Collapse eventKey="templates">
            <ListGroup variant="flush">
               { templates }
            </ListGroup>
         </Accordion.Collapse>
      </ListGroup.Item>
   );
};
export default templates;