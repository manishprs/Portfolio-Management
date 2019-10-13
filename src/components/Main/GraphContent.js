import React from 'react';
import { Container, Col, Row, Alert } from 'react-bootstrap';
import { Breadcrumb, Loader, Segment, Button, Icon } from 'semantic-ui-react';
import GraphTypes from '../Graphs/GraphTypes';
import ShowGraph from '../Graphs/ShowGraph';
import PMContainer from '../../hoc/PMContainer';

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

   let graphTypes = null;
   if(props.activeAccount !== '' && props.activeReportType !== '') {
      graphTypes = (
         <PMContainer>
            <GraphTypes 
               graphs={ props.graphs }
               click={ props.manageActiveGraph }
               activeGraph={ props.activeGraph }
            />
         </PMContainer>
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
            accounts = { props.accounts }
            onAccountClick = { props.onAccountClick }
            activeGraph={ ((props.activeAccount === '' || props.activeReportType === '') ? 'accounts' : props.activeGraph) } 
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

   const fsMarkup = ( props.screenWidth < 992 ? 'none' : 'block');

   return (
      <PMContainer>
         <Container className="pm-bread-crumb-icon">
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
         </Container>
         <Segment className="pm-graph-content">
            { graphTypes }
            <Container fluid={true} className="pm-graph">
               { graphContainer }
            </Container>
         </Segment>
      </PMContainer>         
   );
}
export default graphContent;