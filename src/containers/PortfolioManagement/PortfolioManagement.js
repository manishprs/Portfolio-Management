import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Menu, Sidebar } from 'semantic-ui-react';

import Header from '../../components/Main/Header';
import SideBarContent from '../../components/Main/SideBarContent';
import GraphContent from '../../components/Main/GraphContent';
import RightBar from '../../components/Main/RightBar';
import PMContainer from '../../hoc/PMContainer';
import * as actionCreators from '../../store/actions/actions';

class PortfolioManagement extends PureComponent{

  constructor(props) {
      super(props);

      this.state = {
         sidebarOpen: (window.innerWidth >= 992),
         rightbarOpen: (window.innerWidth >= 768),
         startDate: moment('2019-04-01').toDate(), // .day(-1)
         endDate: moment('2019-05-01').toDate(),
         dateFormat: 'YYYY-MM-DD',
         screenWidth: window.innerWidth,
      }
   }

   onSetSidebarOpen(open) {
      this.setState({ 
         sidebarOpen: open,
         rightbarOpen: open
      });
   }
   
   componentDidMount() {
      
      this.props.fetchAccounts();
      this.props.resetState({
         isAccountLoading: true,
      });
   }

   componentDidUpdate(prevProps, prevState) {
      
      /**
      * account should be selected
      * columns should be selected
      * previous account and current account should not be same
      * previous active columns length and current active columns length should not be same 
      */

      // load columns when active report type changes or active account changes
      if((this.props.activeAccount !== '' && this.props.activeReportType !== '' && (this.props.activeAccount !== prevProps.activeAccount || this.props.activeReportType !== prevProps.activeReportType))) { //  && this.props.isColumnLoading
         
         // api call to fetchColumns
         this.props.fetchColumns(this.props.activeReportType);
      }

      const activeLevel = this.props.activeLevel;
      const prevActiveLevel = prevProps.activeLevel;
      const basicCondition = this.props.activeAccount !== '' && this.props.activeReportType !== '' && this.props.activeColumns.length > 0;

      // call Level List APIs only when the Account is changed
      // this.props.activeAccount !== null
      if(this.props.activeAccount !== '' && this.props.activeReportType !== '' && (this.props.activeAccount !== prevProps.activeAccount || this.props.activeReportType !== prevProps.activeReportType)) {

         const parameters = {
            startDate: moment(this.state.startDate).format(this.state.dateFormat),
            endDate: moment(this.state.endDate).format(this.state.dateFormat),
            account: this.props.activeAccount,
            reportType: this.props.activeReportType
         }

         this.props.resetState({
            isLevelOneLoading: true,
            isLevelTwoLoading: true,
         });

         // api call to fetch levelOneList
         this.props.fetchLevelOneList(parameters);

         // api call to fetch levelOneList
         this.props.fetchLevelTwoList(parameters);            
      }

      if(basicCondition && ((this.state.startDate !== prevState.startDate || this.state.endDate !== prevState.endDate || this.props.activeReportType !== prevProps.activeReportType || activeLevel.level !== prevActiveLevel.level || activeLevel.id !== prevActiveLevel.id) || prevProps.activeColumns.length !== this.props.activeColumns.length || (this.props.activeReportType === 'attr' && this.props.activeReportPeriod !== '' && this.props.activeReportPeriod !== prevProps.activeReportPeriod))) {

         this.props.resetState({
            isGraphDataLoading: true
         });

         this.props.fetchGraphData({
            account: this.props.activeAccount,
            activeColumns: this.props.activeColumns,
            column: this.props.activeColumns.join(','),
            startDate: moment(this.state.startDate).format(this.state.dateFormat),
            endDate: moment(this.state.endDate).format(this.state.dateFormat),
            activeLevel: activeLevel,
            reportType: this.props.activeReportType,
            reportPeriod: this.props.activeReportPeriod
         });
      }
   }

   manageActiveGraphHandler = (graphId) => {
      this.props.resetState({
         activeGraph: graphId
      })
   }

   manageActiveTemplateHandler = templateId => {
      this.props.resetState({
         activeTemplate: templateId
      });
   }

   manageActiveAccountHandler = accountId => {

      const reportPeriod = (this.props.reportPeriod[accountId] !== undefined ? this.props.reportPeriod[accountId] : []);
      let activeReportPeriod = '';
      if(reportPeriod.length > 0)
         activeReportPeriod = (reportPeriod.indexOf('MTD') !== -1 ? 'MTD' : reportPeriod[0]);

      this.props.resetState({
         activeReportPeriod,
         activeReportType: '',
         levelOneList: [],
         levelTwoList: [],
         activeAccount: accountId,
         activeLevel: { level: '0', id: accountId },
      });
   }

   manageActiveReportPeriodHandler = (event, data) => {

      this.props.resetState({
         graphData: [],
         activeReportPeriod: data.value
      });
   }

   manageActiveColumnsHandler = columnId => {

      this.props.manageActiveColumns(columnId);
   }

   manageActiveLevelHandler = (level, id) => {

      this.props.resetState({
         graphData: []
      });

      this.props.manageActiveLevel({
         level, id
      });
   }

   handleStartDateChange = selectedDate => {

      if(moment(selectedDate).isValid()){
         this.props.resetState({
            // levelOneList: [],
            // levelTwoList: [],
            // isLevelOneLoading: true,
            // isLevelTwoLoading: true,
            graphData: []
         });
         this.setState({
            startDate: selectedDate,  
         });
      }
   }

   handleEndDateChange = selectedDate => {

      if(moment(selectedDate).isValid()){
         const startDate = (this.props.activeGraph === 'pie' ? selectedDate : this.state.startDate);
         this.props.resetState({
            // levelOneList: [],
            // levelTwoList: [],
            // isLevelOneLoading: true,
            // isLevelTwoLoading: true,
            graphData: []
         });
         this.setState({
            startDate: startDate,
            endDate: selectedDate,
         });
      }
   }

   toggleSideBarHandler = () => {
      this.setState(prevState => {
         return {
            sidebarOpen: !prevState.sidebarOpen
         }
      });
   }

   toggleFullScreen = () => {
      this.setState(prevState => {
         return {
            sidebarOpen: !prevState.sidebarOpen
         }
      });
   }

   toggleRightBarHandler = () => {
      this.setState(prevState => {
         return {
            rightbarOpen: !prevState.rightbarOpen
         }
      });
   }

   render() {

      const reportTypesForAccountSelected = (this.props.reportTypes[this.props.activeAccount] !== undefined ? this.props.reportTypes[this.props.activeAccount] : []);
      const graphContentClassName = (this.state.sidebarOpen ? 'pm-graph-content-container' : 'pm-graph-content-container pm-graph-content-full-screen');
      const toggleFSIcon = (this.state.sidebarOpen ? 'expand' : 'compress');
      return (
         <PMContainer>
            <header>
            <Header 
               sideClick={ this.toggleSideBarHandler }
               rightClick = { this.toggleRightBarHandler }
               screenWidth = { this.state.screenWidth }
            />
            </header>
            <Sidebar.Pushable>
               <Sidebar 
                  as={ Menu } 
                  vertical 
                  visible={this.state.sidebarOpen}
                  animation="overlay"
                  className="pm-left-sidebar"
               >
                  <SideBarContent
                     templates={ this.props.templates } 
                     onTemplateClick={ this.manageActiveTemplateHandler }
                     activeTemplate={ this.props.activeTemplate }
                     isAccountLoading={ this.props.isAccountLoading }
                     accounts={ this.props.accounts } 
                     onAccountClick={ this.manageActiveAccountHandler } 
                     activeAccount={ this.props.activeAccount }
                     reportTypes={ reportTypesForAccountSelected }
                     onReportTypeClick={ (type) => this.props.manageActiveReportType(type) }
                     activeReportType={ this.props.activeReportType }
                     levelOneList={ this.props.levelOneList }
                     isLevelOneLoading={ this.props.isLevelOneLoading }
                     levelTwoList={ this.props.levelTwoList } 
                     isLevelTwoLoading={ this.props.isLevelTwoLoading }
                     onLevelClick={ this.manageActiveLevelHandler }
                     activeLevel={ this.props.activeLevel }
                  />
               </Sidebar>

               <RightBar
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  startDateChange={(date) => this.handleStartDateChange(date)}
                  endDateChange={(date) => this.handleEndDateChange(date)}
                  activeGraph={ this.props.activeGraph }
                  columns={ this.props.columns } 
                  activeColumns={ this.props.activeColumns }
                  manageActiveColumns={ this.manageActiveColumnsHandler }
                  toggle={ this.state.rightbarOpen }
                  isLoading={ this.props.isColumnLoading }
               />
               <Sidebar.Pusher>
                  <div className={ graphContentClassName }>
                     <GraphContent 
                        graphs={ this.props.graphs }
                        manageActiveGraph={ this.manageActiveGraphHandler }
                        accounts={ this.props.accounts }
                        accountTotal={ this.props.accountTotal }
                        onAccountClick={ this.manageActiveAccountHandler }
                        data={ this.props.graphData }
                        activeGraph={ this.props.activeGraph }
                        activeReportType={ this.props.activeReportType }
                        onReportTypeClick={ (type) => this.props.manageActiveReportType(type) }
                        activeAccount={ this.props.activeAccount }
                        activeColumns={ this.props.activeColumns } 
                        activeLevel={ this.props.activeLevel }
                        reportTypes={ reportTypesForAccountSelected }
                        reportPeriod={ (this.props.reportPeriod[this.props.activeAccount] !== undefined ? this.props.reportPeriod[this.props.activeAccount] : []) }
                        activeReportPeriod={ this.props.activeReportPeriod }
                        manageActiveReportPeriod={ this.manageActiveReportPeriodHandler }
                        endDate={ this.state.endDate }
                        isLoading={ this.props.isGraphDataLoading }
                        isAccountLoading={ this.props.isAccountLoading }
                        toggleFullScreen={ this.toggleFullScreen }
                        toggleFSIcon={ toggleFSIcon }
                        screenWidth={ this.state.screenWidth }
                     />
                  </div>                     
               </Sidebar.Pusher>
            </Sidebar.Pushable>
         </PMContainer>
      );
   }
}

const mapStateToProps = state => {
   return {
      reportTypes: state.pm.reportTypes,
      graphs: state.pm.graphs,
      templates: state.pm.templates,
      accounts: state.pm.accounts,
      accountTotal: state.pm.accountTotal,
      reportPeriod: state.pm.reportPeriod,
      columns: state.pm.columns,
      levelOneList: state.pm.levelOneList,
      levelTwoList: state.pm.levelTwoList,
      graphData: state.pm.graphData,
      isColumnLoading: state.pm.isColumnLoading,
      isAccountLoading: state.pm.isAccountLoading,
      isLevelOneLoading: state.pm.isLevelOneLoading,
      isLevelTwoLoading: state.pm.isLevelTwoLoading,
      isGraphDataLoading: state.pm.isGraphDataLoading,
      activeAccount: state.pm.activeAccount,
      activeColumns: state.pm.activeColumns,
      activeGraph: state.pm.activeGraph,
      activeLevel: state.pm.activeLevel,
      activeReportPeriod: state.pm.activeReportPeriod,
      activeReportType: state.pm.activeReportType,
      activeTemplate: state.pm.activeTemplate
   }
}

const mapDispatchToProps = dispatch => {
   return {
      fetchAccounts: () => dispatch(actionCreators.fetchAccounts()),
      fetchColumns: (reportType) => dispatch(actionCreators.fetchColumns(reportType)),
      fetchLevelOneList: (parameters) => dispatch(actionCreators.fetchLevelOneList(parameters)),
      fetchLevelTwoList: (parameters) => dispatch(actionCreators.fetchLevelTwoList(parameters)),
      resetState: (parameters) => dispatch(actionCreators.resetState(parameters)),
      fetchGraphData: (parameters) => dispatch(actionCreators.fetchGraphData(parameters)),
      manageActiveColumns: (columnId) => dispatch(actionCreators.manageActiveColumns(columnId)),
      manageActiveLevel: (columnId) => dispatch(actionCreators.manageActiveLevel(columnId)),
      manageActiveReportType: (type) => dispatch(actionCreators.manageActiveReportType(type)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioManagement);
