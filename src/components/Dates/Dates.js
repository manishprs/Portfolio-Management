import React from 'react';
import moment from 'moment';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import _isEmpty from 'lodash/isEmpty';

import DatetimeRangePicker from '../../lib/react-DateTime-Range';
import 'bootstrap-daterangepicker/daterangepicker.css';

const dates = props => {

   let start = (props.startDate ? moment(props.startDate).format('YYYY-MM-DD') : null);
   let end = (props.endDate ? moment(props.endDate).format('YYYY-MM-DD') : null);
   let label = start ? start + ' - ' + end : null;
   if (start === end) label = start;

   return (
      <section className='col-12 pm-date-range-container'>
         <Row className='pm-date-range-header'>
            Date Range
         </Row>
         <Row>
            <Col xs={ 12 }>
               <DatetimeRangePicker
                  className="col-12 p-0"
                  startDate={ moment(props.startDate) }
                  endDate={ moment(props.endDate) }
                  // onEvent={this.handleEvent}
                  onEvent={ () => console.log('Date clicked') }
               >                  
                  <InputGroup className='pm-date-range-input-group'>
                     <FormControl
                        type='text'
                        placeholder='Date Range'
                        value={label}
                        className={ 'pm-date-range-input' }
                     />
                  </InputGroup>
               </DatetimeRangePicker>
            </Col>
         </Row>
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