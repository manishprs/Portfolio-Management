import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Form } from 'react-bootstrap';

import PMAlert from '../PMAlert';

const lineGraph = (props) => {

   const lines = props.activeColumns.map((columnId, index) => {
      return <Line 
               key={columnId} 
               type="monotone" 
               dataKey={ columnId } 
               strokeWidth={1.5} 
               stroke={ props.color[index] } 
            />
   });

   let periodMarkup = null;
   if(props.activeReportType === 'attr') {

      if(props.reportPeriod.length > 0) {

         const periods = props.reportPeriod.map(current => {
            return { key:current, value: current, text: current };
         });

         periodMarkup = (
            // <Segment.Inline>
            //    Report Period:
            //    <Select
            //       placeholder="Select Period"
            //       value={ props.activeReportPeriod }
            //       options={ periods }
            //       onChange={ props.onPeriodChange }
            //       style={{ marginLeft: '2%' }}
            //    />
            // </Segment.Inline>
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
               <LineChart
                  width={500}
                  height={300}
                  data={props.data}
                  margin={{
                     top: 5, right: 30, left: 20, bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="5 3" />
                  <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
                  <YAxis domain={['auto', 'auto']} scale='auto' />
                  <Tooltip />
                  <Legend />
                  { lines }
               </LineChart>
            </ResponsiveContainer>
         </div>
      );
   }
   else {
      graph = (
         <PMAlert 
            message={ 'No Data found for the Selected Combination' }
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

export default lineGraph;