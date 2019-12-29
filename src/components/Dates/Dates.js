import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Menu } from 'semantic-ui-react';
import { Row, Button } from 'react-bootstrap';

// import "react-datepicker/dist/react-datepicker.css";

import DatetimeRangePicker from '../../lib/react-DateTime-Range';
import 'bootstrap-daterangepicker/daterangepicker.css';

import PMContainer from '../../hoc/PMContainer';

const dates = props => {

   let start = props.startDate ? moment(props.startDate).format('YYYY-MM-DD') : null;
   let end = props.endDate ? moment(props.endDate).format('YYYY-MM-DD') : null;
   let label = start ? start + ' - ' + end : null;
   if (start === end) label = start;

   return (
      <section className='pm-date-container'>
         <DatetimeRangePicker
            className="col-12 p-0"
            startDate={ props.startDate }
            endDate={ props.endDate }
            // onEvent={this.handleEvent}
         >
            <Button className="selected-date-range-btn" color="light" style={{ width: '100%' }}>
               <div className="float-left">
                  <i className="fa fa-calendar" />
                  &nbsp;
                  <span>
                     { label }
                  </span>
               </div>
               <div className="float-right">
                  <i className="fa fa-angle-down" />
               </div>
            </Button>
         </DatetimeRangePicker>
         {/* <Menu.Item as='a'>
            <DatePicker
               className="form-group form-control"
               selected={props.startDate}
               onChange={props.startDateChange}
               dateFormat="yyyy-MM-dd"
               maxDate={moment().day(0).toDate()}
               disabled={props.activeGraph === 'pie' ? true : false}
               popperPlacement="bottom"
            />
         
            <DatePicker
               className="form-group form-control"
               selected={props.endDate}
               onChange={props.endDateChange}
               dateFormat="yyyy-MM-dd"
               minDate={ props.activeGraph === 'pie' ? new Date('1970-01-') : props.startDate}
               maxDate={moment().day(-1).toDate()}
               popperPlacement="bottom"
            />
         </Menu.Item> */}
      </section>
   );
}

export default dates;