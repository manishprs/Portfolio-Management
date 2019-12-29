import React from 'react';
import { Nav } from 'react-bootstrap';
import MyIcons from '../../hoc/MyIcons';

import lineGraph from '../../assets/lineGraph.svg';
import barGraph from '../../assets/barChart.svg';
import pieGraph from '../../assets/pieChart.svg';
import table from '../../assets/table.svg';

import '../../containers/App.css';

const graphTypes = (props) => {

   const logos = {
      line: lineGraph,
      bar: barGraph,
      pie: pieGraph,
      table: table
   };

   const graphs = props.graphs.map(graph => {
      return (
         <Nav.Item 
            key={ graph.id }
         >
            <Nav.Link 
               style={ graph.id === props.activeGraph ? { color: '#334660' } : { color: '#2a363a' }} 
               onClick={ props.click.bind(this, graph.id) } 
               eventKey={ graph.id }
               className={ (graph.id === props.activeGraph ? 'pm-active-graph-type' : 'pm-graph-types') }
               // className='pm-active-graph-type'
            >
               <MyIcons logo={ logos[graph.id] } />
               { graph.name}
            </Nav.Link>
         </Nav.Item>
      );
   }); 

   return (
      <Nav justify  defaultActiveKey={props.activeGraph} style={{ padding: '5px' }}>
         { graphs }
      </Nav>
   );
};
export default graphTypes;

                     