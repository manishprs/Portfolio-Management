import React, { Component } from 'react';
import { Menu, Icon, Input, Loader } from 'semantic-ui-react';
import PMContainer from '../../hoc/PMContainer';
import MyIcons from '../../hoc/MyIcons'; 

import './Columns.css';
import '../../containers/App.css';
import logo from '../../assets/attributes.svg';

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
      
      let header = (
         <div onClick={ this.searchActiveHandler }>
            <MyIcons logo={logo} />
            Attributes 
            <Icon name="search" style={{ float: 'right' }} />
         </div>
      );

      let columns = null;
      if(this.props.isLoading) {
         columns = <Loader active />;
      }
      else{

         let columnList = this.props.columns;

         if(this.state.searchActive && this.searchValue !== '') {
            columnList = this.props.columns.filter(current => current.includes(this.state.searchValue))
         }

         columns = columnList.map(column => {
            return (
               <Menu.Item
                  as='span'
                  key={ column }
                  onClick={ this.props.click.bind(null, column) }
                  className={`column-list-item ${this.props.activeColumns.indexOf(column) !== -1 ? 'column-active-item' : ''}`}
                  title={ column }
               >
                  {/* { stringCutter(column, 18) } */}
                  { column }
               </Menu.Item>
            );
         });

         if(this.state.searchActive) {
            header = (
                  <Input 
                     placeholder="search..."
                     onClick={ this.searchActiveHandler } 
                     labelPosition='right corner'
                     size="mini"              
                  >
                     <Input 
                        placeholder="search..." 
                        value={ this.state.searchValue }
                        onChange={ this.searchHandler }
                     />
                     <Icon 
                        name="close" 
                        onClick={ this.searchActiveHandler } 
                        style={{ padding: '5%' }} 
                     />
                  </Input>
            );
         }
      }

      return (
         <PMContainer>
            <Menu.Item as='a' header style={{ color: 'rgb(61, 107, 130)' }}>
              { header }
            </Menu.Item>
            <div className="columns" id="my-scroll">
               { columns }
            </div>
         </PMContainer>
      );
   }
}
// const columns = (props) => {
//    return (
//       <PMContainer>
//          <Menu.Item as='a' header style={{ color: 'rgb(61, 107, 130)' }}>
//             Columns
//             <Icon name="search" />
//             {/* <Form.Group>
//                <Form.Control placeholder="search"  className="pm-search" />   
//             </Form.Group>      */}
//          </Menu.Item>
//          <div className="columns" id="my-scroll">
//             { columns }
//          </div>
//       </PMContainer>
//    );
// };
export default Columns;