import React, { Component } from 'react';
import { Menu, Icon, Input, Loader } from 'semantic-ui-react';
import PMContainer from '../../hoc/PMContainer';
import MyIcons from '../../hoc/MyIcons';
import { Row } from 'react-bootstrap';

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
            {/* <MyIcons logo={logo} /> */}
            Attributes 
            {/* <Icon name="search" style={{ float: 'right' }} /> */}
         </div>
      );

      let columns = null;
      if(this.props.isLoading) {
         columns = <Loader active />;
      }
      else{

         let columnList = this.props.columns;
         columnList = ['ret', 'ret_1y', 'wet_avg_mgt', 'ret_1y', 'ret_2yd', 'ret_1', 'ret_1ya', 'ret_1', 'ret_1y'];

         if(this.state.searchActive && this.searchValue !== '') {
            columnList = this.props.columns.filter(current => current.includes(this.state.searchValue))
         }

         // <Menu.Item
         //    name={ current.name }
         //    active={ props.activeReportType === current.id }
         //    key={ current.id }
         //    onClick={ props.click.bind(null, current.id) }
         // />

         columns = columnList.map(column => {
            return (
               <Menu.Item
                  as='span'
                  key={ column }
                  onClick={ this.props.click.bind(null, column) }
                  className={`pm-column-list-item ${this.props.activeColumns.indexOf(column) !== -1 ? 'pm-active-column-list-item' : ''}`}
                  title={ column }
                  style={{ color: '#2A363A', margin: 0, padding: 0, padding: '10px 20px' }}
               >
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
         <section>
            <Row style={{ padding: '15px', fontSize: '14px', backgroundColor: '#1263a1', color: '#FFFFFF'  }}>
               Attributes
            </Row>
            <Menu secondary vertical>
               { columns }
            </Menu>
         </section>
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