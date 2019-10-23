import React, { PureComponent } from 'react';
import { Container, Accordion, ListGroup } from 'react-bootstrap';

import Templates from '../Templates/Templates';
import ReportTypes from '../ReportTypes/ReportTypes';
import Accounts from '../Accounts/Accounts';
import Level from '../Accounts/Level';
import filters from '../../assets/filters.svg';
import subFilters from '../../assets/subFilters.svg';

class SideBarContent extends PureComponent {

   state = {
      searchValue: '',
      defaultActiveKey: ''
   }

   openHandler = type => {
      this.setState(prevState => {
         return {
            searchValue: '',
            defaultActiveKey: (prevState.defaultActiveKey === '' || prevState.defaultActiveKey !== type ? type : '')
         }
      });
   }

   manageSearchHandler = event => {
      this.setState({
         searchValue: event.target.value
      });
   }

   componentDidUpdate(prevProps) {

      if(this.props.activeAccount !== '' && prevProps.activeAccount !== this.props.activeAccount) {
         this.setState({
            defaultActiveKey: 'report-types'
         });
      }
   }

   render() {

      let reportTypeMarkup, filterMarkup, subFilterMarkup;
      let activeKey = this.state.defaultActiveKey;

      if(this.props.activeAccount === '' || activeKey === 'accounts') {
         activeKey = 'accounts';
      }
      else if(this.props.activeReportType === '') {
         activeKey = 'report-types'
      }

      // reportTypeMarkup = null;
      // if(this.props.activeAccount !== '') {
      //    reportTypeMarkup = (
      //       /* Report Types */
      //       <ReportTypes 
      //          account={ this.props.activeAccount }
      //          reportTypes={ this.props.reportTypes } 
      //          click={ this.props.onReportTypeClick }
      //          active={ this.props.activeReportType }
      //          isOpen={ activeKey === 'report-types' }
      //          openHandler={ type => this.openHandler(type) }
      //       />
      //    );
      // }

      filterMarkup = null;
      if(this.props.activeReportType !== '') {
         filterMarkup = (
            /* Level 1 List */
            <Level 
               levelList={ this.props.levelOneList } 
               level="1"
               name="Filters"
               icon={ filters }
               click={ this.props.onLevelClick } 
               active={ this.props.activeLevel }
               isOpen={ activeKey === 'level-1' }
               openHandler={ type => this.openHandler(type) }
               searchHandler={ event => this.manageSearchHandler(event) }
               searchValue={ this.state.searchValue }
               isLoading={ this.props.isLevelOneLoading }
            />
         );
      }

      subFilterMarkup = null;
      if(this.props.activeReportType !== '') {
         subFilterMarkup = (
            /* Level 2 List */
            <Level 
               levelList={ this.props.levelTwoList } 
               level="2"
               name="Sub Filters"
               icon={ subFilters }
               click={ this.props.onLevelClick } 
               active={ this.props.activeLevel }
               isOpen={ activeKey === 'level-2' }
               openHandler={ type => this.openHandler(type) }
               searchHandler={ event => this.manageSearchHandler(event) }
               searchValue={ this.state.searchValue }
               isLoading={ this.props.isLevelTwoLoading }
            />
         );
      }
      
      return (
         <Container >
            <ListGroup variant="flush">
               <Accordion activeKey={ activeKey }>
                  {/* Accounts */}
                  <Accounts 
                     accounts={ this.props.accounts } 
                     click={ this.props.onAccountClick } 
                     active={ this.props.activeAccount }
                     isOpen={ activeKey === 'accounts' }
                     openHandler={ type => this.openHandler(type) }
                     searchValue={ this.state.searchValue }
                     searchHandler={ event => this.manageSearchHandler(event) }
                     isLoading={ this.props.isAccountLoading }
                  />
                  {/* { reportTypeMarkup } */}
                  { filterMarkup }
                  { subFilterMarkup }
                  {/* Listing Templates */}
                  <Templates
                     templates={ this.props.templates } 
                     click={ this.props.onTemplateClick }
                     active={ this.props.activeTemplate }
                     isOpen={ activeKey === 'templates' }
                     openHandler={ type => this.openHandler(type) }
                  />               
               </Accordion>
            </ListGroup>
         </Container>
      );
   }
}
export default SideBarContent;