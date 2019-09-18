import React from 'react';
import { ListGroup, Accordion } from 'react-bootstrap';
import { Icon, Input, Loader } from 'semantic-ui-react';
import MyIcons from '../../hoc/MyIcons';

import '../../containers/App.css';
import './Accounts.css';
import logo from '../../assets/accounts.svg';

const accounts = (props) => {

   const iconName = (props.isOpen ? 'angle down' : 'angle right');
   
   let iconMarkup = (<Icon style={{ float: 'right'}} name={ iconName } />);
   if(props.isLoading) {
      iconMarkup = (<Loader inline active size="tiny" style={{ float: 'right'}} />);
   }

   let accountList = props.accounts;
   if(props.searchValue !== '' && props.accounts.length > 2) {
      accountList = props.accounts.filter(current => current.toLowerCase().includes(props.searchValue.toLowerCase()));
   }

   let accounts = accountList.map((account, index) => {
      return (
         <ListGroup.Item 
            title={account} 
            className={ `list-item ${account === props.active ? 'active-item' : ''}` } 
            key={ `${account} - ${index}` } 
            onClick={ props.click.bind(null, account) }
         >
            { account === props.active ? <Icon className="pm-active-icon" name="angle right" /> : '' }
            { account }
         </ListGroup.Item>
      );
   });

   let search = null;
   if(props.isOpen && props.accounts.length > 0) {
      search = (

         <Input 
            placeholder="search..."
            icon 
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

   if(accounts.length === 0 && props.isLoading === false) {
      accounts = (
         <ListGroup.Item 
            title="No Data Found" 
            className={ `list-item` } 
            key="no-data-found"
         >
            Accounts List Empty
         </ListGroup.Item>
      );
   }

   return (
      <ListGroup.Item className="left-sidebar-list-item">
         <Accordion.Toggle 
            as={ListGroup.Item} 
            className='pm-sidebar-items' 
            eventKey="accounts"
            onClick={ props.openHandler.bind(null, 'accounts') }
         >
            <MyIcons logo={logo} />
            Accounts 
            { iconMarkup }
         </Accordion.Toggle>
         { search }
         <Accordion.Collapse eventKey="accounts">
            <ListGroup className="accounts" id="my-scroll">
               { accounts }
            </ListGroup>
         </Accordion.Collapse>
      </ListGroup.Item>
   );
}

export default accounts;

                     