import React from 'react';
import { Table, Container } from 'react-bootstrap';
import { Segment, Select } from 'semantic-ui-react';

import PMAlert from '../PMAlert';
import '../../containers/App.css';

const table = (props) => {

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

   let content = null;
   if(props.account === '' && props.activeReportType === '') {
      content = (
         <PMAlert 
            message={ 'Select Account and Dashboard to Display Graph' }
         />
      );
   }
   else if(props.activeReportType === '') {
      content = (
         <PMAlert 
            message={ 'Select Dashboard to Display Graph' }
         />
      );
   }
   else if(props.data.length > 0) {
      const columns = props.activeColumns.map(current => {
         return (<th key={current}>{current}</th>);
      });

      const rows = props.data.map((current, index) => {

         let restRows = props.activeColumns.map((active, index) => {
            return (
               <td key={ `cell-${index}` }>{ current[active] }</td>
            );
         });
   
         return (
            <tr key={ `row-${index}`}>
               <td>{current.name}</td>
               { restRows }
            </tr>
         );
      });

      content = (
         <div className="pm-table" id="my-scroll">
            <Table striped bordered hover responsive="sm">
               <thead>
                  <tr>
                     <td>Date</td>
                     {columns}
                  </tr>
               </thead>
               <tbody>
                  { rows }
               </tbody>
            </Table>
         </div>
      );
   }
   else{
      content = (
         <PMAlert 
            message={ 'No Data found for the Selected Combination' }
         />
      );
   }

   // const columns = props.activeColumns.map(current => {
   //    return (<Table.HeaderCell key={current}>{current}</Table.HeaderCell>)
   // });

   // const rows = props.data.map((current, index) => {

   //    let restRows = props.activeColumns.map((active, index) => {
   //       return (
   //          <Table.Cell key={ `cell-${index}` }>{ current[active] }</Table.Cell>
   //       );
   //    });

   //    return (
   //       <Table.Row key={ `row-${index}`}>
   //          <Table.Cell>{current.name}</Table.Cell>
   //          { restRows }
   //       </Table.Row>
   //    );
   // });

   return (
      <Container>
         { periodMarkup }
         { content }
      </Container>
   );
}
export default table;