import React from 'react';
import { ListGroup, Accordion } from 'react-bootstrap';
import { Icon, Input, Loader } from 'semantic-ui-react';
import MyIcons from '../../hoc/MyIcons';

import '../../containers/App.css';
import './Accounts.css';
import logo from '../../assets/accounts.svg';
import Search from '../Search/Search';

const accounts = (props) => {

   const iconName = (props.isOpen ? 'angle down' : 'angle right');
   
   let iconMarkup = (<Icon style={{ float: 'right'}} name={ iconName } />);
   if(props.isLoading) {
      iconMarkup = (<Loader inline active inverted size="tiny" style={{ float: 'right'}} />);
   }
   
   let accountList = props.accounts;
   accountList = ['Manulife Balanced', 'Manulife UnBalanced', 'Manulife Technologies', 'Manulife Technologies Pvt Limited', 'Manulife Balanced', 'Manulife UnBalanced', 'Manulife Technologies', 'Manulife Technologies Pvt Limited'];
   if(props.searchValue !== '' && props.accounts.length > 2) {
      accountList = props.accounts.filter(current => current.toLowerCase().includes(props.searchValue.toLowerCase()));
   }

   let accounts = accountList.map((account, index) => {
      return (
         <ListGroup.Item 
            title={account} 
            className={ `pm-side-bar-sub-list-item ${account === props.active ? 'pm-side-bar-sub-list-item-active' : ''}` }
            key={ `${account} - ${index}` } 
            onClick={ props.click.bind(null, account) }
         >
            { account === props.active ? <Icon name="angle right" /> : '' }
            { account }
         </ListGroup.Item>
      );
   });

   let search = null;
   if(props.isOpen && props.accounts.length >= 0) {
      search = (
         <Search 
            searchValue={ props.searchValue }
            searchHandler={ props.searchHandler }
            placeholder='Search Accounts'
         />
      );
   }

   if(accounts.length === 0 && props.isLoading === false) {
      accounts = (
         <ListGroup.Item 
            title="No Data Found" 
            className={ `pm-side-bar-sub-list-item` } 
            key="no-data-found"
         >
            Accounts List Empty
         </ListGroup.Item>
      );
   }

   return (
      <ListGroup.Item className='pm-side-bar-list-group-item'>
         <Accordion.Toggle 
            as={ListGroup.Item} 
            className='pm-side-bar-accordion-toggle' 
            eventKey="accounts"
            onClick={ props.openHandler.bind(null, 'accounts') }
         >
            {/* <MyIcons logo={logo} /> */}
            Accounts 
            { iconMarkup }
         </Accordion.Toggle>
         { search }
         <Accordion.Collapse eventKey="accounts">
            <ListGroup 
               className="pm-side-bar-sub-list-group"
               id="my-scroll"
            >
               { accounts }
            </ListGroup>
         </Accordion.Collapse>
      </ListGroup.Item>
   );
}

export default accounts;