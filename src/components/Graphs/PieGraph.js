import React, { Component } from 'react';
import { Container, Alert, Row, Col, Form } from 'react-bootstrap';
import { Radio, Loader } from 'semantic-ui-react';
import { Chart } from 'react-google-charts';
// import moment from 'moment';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/actions';
import PMContainer from '../../hoc/PMContainer';

class PieGraph extends Component {

   state = {
      activeLevel: 0,
      activeColumn: '',
      activePieReportPeriod: '',
      levels: [1, 2],
      dateFormat: 'YYYY-MM-DD',
   }

   componentDidMount() {
      this.setState({
         activeLevel: 1,
         activeColumn: this.props.columns[0],
         activePieReportPeriod: this.props.activeReportPeriod
      });

      // this.props.resetState({
      //    isPieGraphDataLoading: true,
      // });
   }

   componentDidUpdate(prevProps, prevState) {

      if(prevProps.activeReportPeriod !== this.props.activeReportPeriod) {
         this.setState({
            activePieReportPeriod: this.props.activeReportPeriod
         });
      }

      /**
       *    activeLevel should not be zero or empty
       *    activeColumn should not be undefined or empty
       *    previous active report type should not be equal to current active report type
       *    previous active account should not be equal to current active account
       *    previous active column should not be equal to current active column
       *    previous active level should not be equal to current active level
       *    previous date should not be equal to current date   
       */
      if((this.state.activeLevel !== 0 && this.props.activeLevel !== '' && this.state.activeColumn !== undefined && this.state.activeColumn !== '') && (prevProps.account !== this.props.account || prevProps.reportType !== this.props.reportType || prevState.activeColumn !== this.state.activeColumn || prevState.activeLevel !== this.state.activeLevel || prevProps.date !== this.props.date || (this.props.reportType === 'attr' && this.state.activePieReportPeriod !== prevState.activePieReportPeriod))) { //  && !this.props.isPieGraphDataLoading

         this.props.resetState({
            isPieGraphDataLoading: true,
         });
         // const date = moment(this.props.date).format(this.state.dateFormat);
         this.props.fetchPieGraphData({
            date: '2019-02-28',
            activeLevel: this.state.activeLevel,
            reportType: this.props.reportType,
            account: this.props.account,
            column: this.state.activeColumn,
            reportPeriod: this.state.activePieReportPeriod
         });
      }
   }

   manageCheckHandler = level => {

      this.setState({
         activeLevel: level
      });
   }

   manageActiveColumnHandler = event => {
      
      this.setState({
         activeColumn: event.target.value
      });
   }

   manageActiveReportPeriodHandler = event => {
      this.props.resetState({
         graphData: [],
      });
      this.setState({
         activePieReportPeriod: event.target.value
      });
   }

   render() {

      let periodMarkup = null, reportPeriod;

      // const columns = this.props.columns.map(current => {
      //    return { key: current, value: current, text: current }
      // });

      const columns = this.props.columns.map(current => {
         return <option value={current}>{current}</option>
      });

      if(this.props.reportType === 'attr') {

         reportPeriod = (this.props.reportPeriod[this.props.account] !== undefined ? this.props.reportPeriod[this.props.account] : []);
         if(reportPeriod.length > 0) {

            // const periods = reportPeriod.map(current => {
            //    return { key:current, value: current, text: current };
            // });

            const periods = reportPeriod.map(current => {
               return <option value={current}>{current}</option>;
            });

            periodMarkup = (
               <PMContainer>
                  
                  {/* <Select
                     placeholder="Select Period"
                     value={ this.state.activePieReportPeriod }
                     options={ periods }
                     onChange={ this.manageActiveReportPeriodHandler.bind(null) }
                     style={{ marginLeft: '1%' }}
                  /> */}
                  <Form.Group>
                     <Form.Control 
                        as="select" 
                        value={ this.state.activePieReportPeriod }
                        onChange={ this.manageActiveReportPeriodHandler.bind(null) }
                     >
                        {periods}
                     </Form.Control>
                  </Form.Group>
               </PMContainer>
            );
         }
      }

      const levels = this.state.levels.map(level => {

         return (               
            <Radio 
               key={level}
               checked={ this.state.activeLevel === level } 
               label={`Level - ${level}`} 
               name="radioGroup"
               onChange={ this.manageCheckHandler.bind(null, level) }
               style={{ marginRight: '3%' }}
            />               
         );
      });    

      const selectLevel = (
         <Container fluid={true}>
            <Row>
               <Col sm={4} md={3} lg={3} xs={2}>
                  {levels}
               </Col>               
               <Col sm={4} md={4} lg={5} xs={5}>
                  
                  {/* <Select
                     placeholder="Select Column"
                     value={ this.state.activeColumn }
                     options={ columns }
                     onChange={ this.manageActiveColumnHandler.bind(null) }
                     style={{ marginLeft: '2%' }}
                  /> */}

                  <Form.Group>
                     <Form.Control 
                        as="select"
                        value={ this.state.activeColumn }
                        onChange={ this.manageActiveColumnHandler.bind(null) }
                     >
                        {columns}
                     </Form.Control>
                  </Form.Group>
               </Col>
               <Col sm={4} md={4} lg={4} xs={5}>
                  {periodMarkup}
               </Col>
            </Row>
         </Container>
      );
      
      let markup = null;
      if(this.props.account === '' && this.props.reportType === '') {
         markup = (
            <Container style={{ marginTop: '5%' }}>
               <Alert variant="warning">
                  Select Account and Dashboard to Display Graph
               </Alert>
            </Container>
         );
      }
      else if(this.props.reportType === '') {
         markup = (
            <Container style={{ marginTop: '5%' }}>
               <Alert variant="warning">
                  Select Dashboard to Display Graph
               </Alert>
            </Container>
         );
      }
      else if(this.props.isLoading) {
         markup = (
            <Container fluid={true}>
               { selectLevel }
               <Loader active>Preparing Graph</Loader>
            </Container>
         )
      }
      else {
         let chart = null;
         if(this.props.graphData.length > 1 && !this.props.isLoading) {
            chart = (
               <Chart
                  // width='800px'
                  height='400px'
                  chartType="PieChart"
                  data={ this.props.graphData }
                  options={{
                     sliceVisibilityThreshold: 0.004, // 20%
                  }}
               />
            );
         }
         else {
            chart = (
               <Container style={{ marginTop: '5%' }}>
                  <Alert variant="warning" >
                     No Data found for the Selected Combination.
                  </Alert>
               </Container>
            );
         }

         markup = (
            <Container fluid={true}>
               { selectLevel }
               { chart }
            </Container>
         );
      }
      return markup;
   }
}

const mapStateToProps = state => {
   return {
      graphData: state.pm.pieGraphData,
      isLoading: state.pm.isPieGraphDataLoading,
      reportPeriod: state.pm.reportPeriod,
      activeReportPeriod: state.pm.activeReportPeriod
   }
}

const mapDispatchToProps = dispatch => {
   return {
      fetchPieGraphData: (paramteres) => dispatch(actionCreators.fetchPieGraphData(paramteres)),
      resetState: (paramteres) => dispatch(actionCreators.resetState(paramteres))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieGraph);