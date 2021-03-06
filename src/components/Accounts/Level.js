import React from 'react';
import { ListGroup, Accordion } from 'react-bootstrap';
import { Icon, Input, Loader } from 'semantic-ui-react';
import MyIcons from '../../hoc/MyIcons';

import '../../containers/App.css';
import './Accounts.css';

const level = (props) => {

   const iconName = (props.isOpen ? 'angle down' : 'angle right');
   let iconMarkup = (<Icon style={{ float: 'right'}} name={ iconName } />);
   if(props.isLoading) {
      iconMarkup = (<Loader inline active size="tiny" style={{ float: 'right'}} />);
   }

   let list = props.levelList;
   if(props.searchValue !== '' && props.levelList.length > 0) {
      list = props.levelList.filter(current => current.name.toLowerCase().includes(props.searchValue.toLowerCase()));
   }

   let levelList = list.map(current => {
      return (
         <ListGroup.Item 
            title={current.name} 
            className={ `list-item ${(props.level === props.active.level && current.id === props.active.id) ? 'active-item' : ''}` } 
            key={ current.id } 
            onClick={ props.click.bind(null, props.level, current.id) }
         >
            {/* { stringCutter(current.name, 20) } */}
            { (props.level === props.active.level && current.id === props.active.id) ? <Icon className="pm-active-icon" name="angle right" /> : '' }
            { current.name }
         </ListGroup.Item>
      );
   });

   let search = null;
   if(props.isOpen && props.levelList.length > 2) {
      search = (
         <Input 
            placeholder="search..."
            icon
            // onClick={ this.searchActiveHandler } 
            labelPosition='right corner'
            size="mini"  
            style={{ padding: '5%' }}            
         >
            <Input 
               placeholder="search..." 
               value={ props.searchValue }
               onChange={ props.searchHandler }
            />
            <Icon 
               name="search"  
               style={{ padding: '5%' }} 
            />
         </Input>
      );
   }

   if(levelList.length === 0 && props.isLoading === false) {
      levelList = (
         <ListGroup.Item 
            title="No level Found" 
            className={ `list-item` } 
            key="no-level-found"
         >
            { `No ${ (props.level === '1' ? 'Filters' : 'Sub Filters') }` }
         </ListGroup.Item>
      );
   }

   return (
      <ListGroup.Item className="left-sidebar-list-item">
         <Accordion.Toggle 
            as={ListGroup.Item} 
            eventKey={`level-${props.level}`}
            className='pm-sidebar-items'
            onClick={ props.openHandler.bind(null, `level-${props.level}`) }
         >
            <MyIcons logo={ props.icon } />
            { props.name }
            {/* <Icon style={{ float: 'right'}} name={ iconName } /> */}
            { iconMarkup }
         </Accordion.Toggle>
         { search }
         <Accordion.Collapse eventKey={`level-${props.level}`}>
            <ListGroup variant="flush" className="accounts" id="my-scroll">
               { levelList }
            </ListGroup>
         </Accordion.Collapse>
      </ListGroup.Item>
   );
}

export default level;

                      