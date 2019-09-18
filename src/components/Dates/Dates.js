import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { Menu } from 'semantic-ui-react';

import "react-datepicker/dist/react-datepicker.css";
import PMContainer from '../../hoc/PMContainer';

const dates = props => {

   return (
      <PMContainer>
         <Menu.Item as='a'>
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
         </Menu.Item>
      </PMContainer>
   );
}

export default dates;