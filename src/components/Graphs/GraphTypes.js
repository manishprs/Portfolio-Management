import React from 'react';
import { Nav } from 'react-bootstrap';
import MyIcons from '../../hoc/MyIcons';

import lineGraph from '../../assets/lineGraph.svg';
import barGraph from '../../assets/barChart.svg';
import pieGraph from '../../assets/pieChart.svg';
import table from '../../assets/table.svg';

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
            >
               <MyIcons logo={ logos[graph.id] } />
               { graph.name}
            </Nav.Link>
         </Nav.Item>
      );
   }); 

   return (
      <Nav justify variant="tabs" defaultActiveKey={props.activeGraph}>
         { graphs }
      </Nav>
   );
};
export default graphTypes;

                     