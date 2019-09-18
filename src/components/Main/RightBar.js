import React from 'react';
import Dates from '../Dates/Dates';
import Columns from '../Columns/Columns';
import { Sidebar, Menu } from 'semantic-ui-react';

import '../../containers/App.css';

const rightBar = props => {

   return (
      <Sidebar
         as={Menu}
         animation='overlay'
         direction='right'
         vertical
         visible={props.toggle}
         className="pm-right-sidebar"
      >
         <Dates
            startDate={ props.startDate}
            endDate={ props.endDate}
            startDateChange={ props.startDateChange }
            endDateChange={ props.endDateChange }
            activeGraph={ props.activeGraph }
         />                        
         <Columns 
            columns={ props.columns }
            activeColumns = { props.activeColumns }
            click = { props.manageActiveColumns }
            isLoading = { props.isLoading }
         />
      </Sidebar>
   );
}

export default rightBar;