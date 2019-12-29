import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import { Row, ListGroup } from 'react-bootstrap';

import './Columns.css';
import '../../containers/App.css';
import Search from '../Search/Search';

class Columns extends Component {

   state = {
      searchActive: false,
      searchValue: ''
   }

   searchActiveHandler = () => {
      
      this.setState(prevState => {
         return { 
            searchActive: !prevState.searchActive
         }
      });
   }

   searchHandler = event => {
      
      this.setState({
         searchValue: event.target.value
      });
   }

   render() {
      
      let columns = null;
      let search = null;
      if(this.props.isLoading) {
         columns = <Loader active />;
      }
      else{

         let columnList = this.props.columns;
         columnList = ['ret', 'ret_1y', 'wet_avg_mgt', 'ret_2yd', 'ret_1ya', 'ret_1'];

         if(this.state.searchActive && this.searchValue !== '') {
            columnList = this.props.columns.filter(current => current.includes(this.state.searchValue))
         }

         columns = columnList.map(column => {
            return (
               <ListGroup.Item
                  as='span'
                  key={ column }
                  onClick={ this.props.click.bind(null, column) }
                  className={`pm-column-list-item ${this.props.activeColumns.indexOf(column) !== -1 ? 'pm-active-column-list-item' : ''}`}
                  title={ column }
               >
                  { column }
               </ListGroup.Item>
            );
         });

         if(columns.length > 0) {
            search = (
               <Search 
                  searchValue={ this.state.searchValue }
                  searchHandler={ this.searchHandler }
                  placeholder='Search Attributes'
                  containerClass='pm-attribute-search-container'
                  itemClass='pm-attributes-search'
               />
            );
         }
      }

      return (
         <section>
            <Row className='pm-attributes-header'>
               Attributes
            </Row>
            { search }
            <ListGroup className='pm-attributes-list-group'>
               { columns }
            </ListGroup>
         </section>
      );
   }
}

export default Columns;