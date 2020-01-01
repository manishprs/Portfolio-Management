import React from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import { Breadcrumb, Loader, Segment, Button, Icon } from 'semantic-ui-react';
import GraphTypes from '../Graphs/GraphTypes';
import ShowGraph from '../Graphs/ShowGraph';
import PMContainer from '../../hoc/PMContainer';
import Dashboard from '../Graphs/Dashboard';

import '../../containers/App.css';

const graphContent = props => {

   let reportType = props.reportTypes.find(type => {
      return type.id === props.activeReportType;
   });
   reportType = (reportType !== undefined ? reportType.name : '');

   const sections = [];

   if(reportType !== '') 
      sections.push({ key: 'Report', content: reportType, link: false, active: false });

   if(props.activeAccount !== undefined && props.activeAccount !== '') 
      sections.push({ key: 'Account', content: props.activeAccount, link: false, active: false });

   if(props.activeLevel.level !== "0")
      sections.push({ key: 'Level', content: props.activeLevel.id, link: false, active: false });

   // let graphTypes = null;
   // if(props.activeAccount !== '' && props.activeReportType !== '') {
      const graphTypes = (
         <PMContainer>
            <GraphTypes 
               graphs={ props.graphs }
               click={ props.manageActiveGraph }
               activeGraph={ props.activeGraph }
            />
         </PMContainer>
      );
   // }

   let accountsContainer = null;
   if(props.isAccountLoading) {
      accountsContainer = (
         <Loader active>
            Preparing Graph
         </Loader>
      );
   }
   else {
      accountsContainer = (
         <ShowGraph 
            data={ props.data }
            accounts = { props.accounts }
            accountTotal = { props.accountTotal }
            onAccountClick = { props.onAccountClick }
            activeGraph={ 'accounts' } 
            activeAccount={ props.activeAccount }
         />
      );
   }

   let graphContainer = null;
   if(props.isLoading) {
      graphContainer = (
         <Loader active>
            Preparing Graph
         </Loader>
      );
   }
   else if ((props.activeAccount !== '' && props.activeReportType !== '') && props.activeColumns.length === 0) {
      graphContainer = (
         <Container style={{ marginTop: '5%' }}>
            <Alert variant="warning">
               Please Select Attributes to Show Graph.
            </Alert>
         </Container>
      );
   }
   else {

      graphContainer = (
         <ShowGraph 
            data={ props.data }
            activeGraph={ props.activeGraph } 
            activeReportType={ props.activeReportType }
            activeAccount={ props.activeAccount }
            activeColumns={ props.activeColumns }
            endDate={ props.endDate }
            reportPeriod={ props.reportPeriod }
            activeReportPeriod={ props.activeReportPeriod }
            onPeriodChange={ props.manageActiveReportPeriod }
         />
      );
   }

   // const fsMarkup = ( props.screenWidth < 992 ? 'none' : 'block');

   let className = '';
   let accountsContainerWidth = 8;
   let dashboardContainerWidth = 4;
   if(props.activeAccount === '') {
      className = "pm-hide";
      accountsContainerWidth = 12;
      dashboardContainerWidth = 0;
   }

   return (
      <Col md={ 10 } style={{ margin: 0, padding: 0 }}>
         {/* <Container className="pm-bread-crumb-icon">
            <Row>
               <Col xs={11} sm={11} md={11} lg={11}>
                  <Breadcrumb icon='right angle' sections={sections} style={{ backgroundColor: '#ffffff', fontSize: '0.9rem'}} />
               </Col>
               <Col xs={0} sm={0} md={1} lg={1} style={{ display: fsMarkup }}>
                  <Button title={ props.toggleFSIcon === 'expand' ? 'Full Screen' : 'Exit Full Screen' } onClick={ props.toggleFullScreen }>
                     <Button.Content visible>
                        <Icon name={ props.toggleFSIcon } />
                     </Button.Content>
                  </Button>
               </Col>
            </Row>
         </Container> */}
         <Row md={ 12 }>
            <Breadcrumb className='pm-breadcrumb' icon='right angle' sections={ sections } />
            {/* <Col xs={0} sm={0} md={1} lg={1} style={{ display: fsMarkup }}>
               <Button title={ props.toggleFSIcon === 'expand' ? 'Full Screen' : 'Exit Full Screen' } onClick={ props.toggleFullScreen }>
                  <Button.Content visible>
                     <Icon name={ props.toggleFSIcon } />
                  </Button.Content>
               </Button>
            </Col> */}
         </Row>
         <Row style={{ margin: 0, padding: 0 }}>
            <Col xs={ 12 } style={{ margin: 0, padding: 0 }}>
               <Row>
                  <Col sm={ accountsContainerWidth } style={{ margin: 0, padding: '10px' }}>
                     <section style={{ margin: 0, padding: 0, minHeight: '250px', height: '250px', backgroundColor: '#FAFAFA' }}>
                        { accountsContainer }
                     </section>
                  </Col>
                  <Col sm={ dashboardContainerWidth } className={ className } style={{ margin: 0, padding: '10px' }}>
                     <section style={{ margin: 0, padding: 0, minHeight: '250px', height: '250px', backgroundColor: '#FAFAFA' }}>
                        <Dashboard
                           reportTypes={ props.reportTypes }
                           activeReportType={ props.activeReportType }
                           click={ props.onReportTypeClick }
                        />
                     </section>
                  </Col>
               </Row>
            </Col>
            <Col xs={ 12 } style={{ margin: 0, padding: 0 }}>
               <Row>
                  <Col sm={12} style={{ margin: 0, padding: '10px' }}>
                     <section style={{ margin: 0, padding: 0, minHeight: '400px', height: '400px', backgroundColor: '#FAFAFA' }}>
                        { graphTypes }
                        <Container fluid={true} className="pm-graph">
                           { graphContainer }
                        </Container>
                     </section>
                  </Col>
               </Row>
            </Col>
            {/* { graphTypes }
            <Container fluid={true} className="pm-graph">
               { graphContainer }
            </Container> */}
         </Row>
      </Col>         
   );
}
export default graphContent;