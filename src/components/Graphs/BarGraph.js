import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Alert, Container } from 'react-bootstrap';
import { Segment, Select } from 'semantic-ui-react';

const barGraph = (props) => {

   const bars = props.activeColumns.map((columnId, index) => {
      return <Bar key={columnId} dataKey={ columnId } fill={ props.color[index] } />
   });

   let periodMarkup = null;
   if(props.activeReportType === 'attr') {

      if(props.reportPeriod.length > 0) {

         const periods = props.reportPeriod.map(current => {
            return { key:current, value: current, text: current };
         });

         periodMarkup = (
            <Segment.Inline>
               Report Period:
               <Select
                  placeholder="Select Period"
                  value={ props.activeReportPeriod }
                  options={ periods }
                  onChange={ props.onPeriodChange }
                  style={{ marginLeft: '2%' }}
               />
            </Segment.Inline>
         );
      }
   }

   let graph = null;
   if(props.account === '' && props.activeReportType === '') {
      graph = (
         <Container style={{ marginTop: '5%' }}>
            <Alert variant="warning">
               Select Account and Dashboard to Display Graph
            </Alert>
         </Container>
      );
   }
   else if(props.activeReportType === '') {
      graph = (
         <Container style={{ marginTop: '5%' }}>
            <Alert variant="warning">
               Select Dashboard to Display Graph
            </Alert>
         </Container>
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
         <Container style={{ marginTop: '5%' }}>
            <Alert variant="warning">
               No Data found for the Selected Combination.
            </Alert>
         </Container>
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