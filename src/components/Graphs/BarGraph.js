import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Form } from 'react-bootstrap';

import PMAlert from '../PMAlert';

const barGraph = (props) => {

   const bars = props.activeColumns.map((columnId, index) => {
      return <Bar key={columnId} dataKey={ columnId } fill={ props.color[index] } />
   });

   let periodMarkup = null;
   if(props.activeReportType === 'attr') {

      if(props.reportPeriod.length > 0) {

         const periods = props.reportPeriod.map(current => {
            // return { key:current, value: current, text: current };
            return <option key={ current } value={ current }>{ current }</option>;
         });

         periodMarkup = (
            <Form.Group>
               <Form.Control 
                  as="select"
                  value={ props.activeReportPeriod }
                  onChange={ props.onPeriodChange }
                  className='pm-select-input'
               >
                  {periods}
               </Form.Control>
            </Form.Group>
         );
      }
   }

   let graph = null;
   if(props.account === '' && props.activeReportType === '') {
      graph = (
         <PMAlert 
            message={ 'Select Account and Dashboard to Display Graph' }
         />
      );
   }
   else if(props.activeReportType === '') {
      graph = (
         <PMAlert 
            message={ 'Select Dashboard to Display Graph' }
         />
      );
   }
   else if(props.data.length > 0) {
      graph = (
         <div style={{ width: '100%', height: 400, marginTop: '5%' }}>
            <ResponsiveContainer>
               <BarChart
                  width={500}
                  height={300}
                  data={props.data}
                  margin={{
                     top: 5, right: 30, left: 20, bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  { bars }
               </BarChart>
            </ResponsiveContainer>
         </div>
      );
   }
   else {
      graph = (
         <PMAlert 
            message={ 'No Data found for the Selected Combination.' }
         />
      );
   }

   return (
      <Container>
         { periodMarkup }
         { graph }
      </Container>
   );
}

export default barGraph;