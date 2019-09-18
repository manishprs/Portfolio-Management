import React from 'react';

import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import Table from './Table';

const showGraph = (props) => {

   const color = ['#8884d8', '#82ca9d', '#ffc658', '#a72461', '#dc5353', '#ff935c', '#216583', '#83b582', '#226b80', '#d6e4aa', '#f34573', '#204969', '#dadada', '#ffb961', '#f3826f', '#1c2938', '#cd3f3e', '#6e9086', '#fdc8b7', '#de356a', '#540e33', '#daa592', '#009975', '#454d66', '#943855', '#f76262'];

   let graph = null;
   switch(props.activeGraph) {
      case 'line': 
         graph = <LineGraph 
            data={props.data}
            account={ props.activeAccount }
            activeColumns={ props.activeColumns }
            color={ color }
            activeReportType={ props.activeReportType }
            reportPeriod={ props.reportPeriod }
            activeReportPeriod={ props.activeReportPeriod }
            onPeriodChange = { (event, data) => props.onPeriodChange(event, data) }
         />
         break;

      case 'bar':
         graph = <BarGraph 
            data = { props.data }
            account={ props.activeAccount }
            activeColumns={ props.activeColumns }
            color={ color }
            activeReportType={ props.activeReportType }
            reportPeriod={ props.reportPeriod }
            activeReportPeriod={ props.activeReportPeriod }
            onPeriodChange = { (event, data) => props.onPeriodChange(event, data) }
         />
         break;
      
      case 'pie':
         graph = <PieGraph 
            reportType={ props.activeReportType }
            columns={ props.activeColumns }
            account={ props.activeAccount }
            date={ props.endDate }
            onPeriodChange = { (event, data) => props.onPeriodChange(event, data) }
         />
         break;

      case 'table':
         graph = <Table size="sm"
            data={ props.data }
            account={ props.activeAccount }
            activeColumns={ props.activeColumns }
            activeReportType={ props.activeReportType }
            reportPeriod={ props.reportPeriod }
            activeReportPeriod={ props.activeReportPeriod }
            onPeriodChange = { (event, data) => props.onPeriodChange(event, data) }
         />
         break;

      default:
         graph = null;
         break;
   }

   return graph;
}
export default showGraph;