import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import _isEmpty from 'lodash/isEmpty';

// import "react-datepicker/dist/react-datepicker.css";

import DatetimeRangePicker from '../../lib/react-DateTime-Range';
import 'bootstrap-daterangepicker/daterangepicker.css';

import PMContainer from '../../hoc/PMContainer';

const dates = props => {

   let start = (props.startDate ? moment(props.startDate).format('YYYY-MM-DD') : null);
   let end = (props.endDate ? moment(props.endDate).format('YYYY-MM-DD') : null);
   let label = start ? start + ' - ' + end : null;
   if (start === end) label = start;

   console.log('start', start, 'end', end);

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
                  {/* <Button variant='light' className='pm-date-range-button'>
                     <i className="calendar alternate outline icon" />
                        &nbsp;
                     <span>
                        { label }
                     </span>
                  </Button> */}
                  
                  <InputGroup className='pm-date-range-input'>
                     {/* <InputGroup.Prepend>
                        <InputGroup.Text id="btnGroupAddon"><i className="calendar alternate outline icon" /></InputGroup.Text>
                     </InputGroup.Prepend> */}
                     <FormControl
                        type='text'
                        placeholder='Date Range'
                        value={label}
                        // size='sm'
                        style={{ border: 'none', borderRadius: 0, borderBottom: '1px solid #1263a1', width: 'auto' }}
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