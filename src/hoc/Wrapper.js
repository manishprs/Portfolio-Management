import React from 'react';

import '../containers/App.css';

const wrapper = props => {

   let jsx = (
      <div>
         { props.children }
      </div>
   );
   
   if((props.selectorClass !== '' && props.selectorClass !== undefined) && (props.selectorID !== '' && props.selectorID !== undefined)) {
      jsx = (
         <div className={props.className} id={props.selectorID}>
            { props.children }
         </div>
      );
   }
   else if(props.selectorClass !== '' && props.selectorClass !== undefined) {
      jsx = (
         <div className={props.className}>
               { props.children }
         </div>
      );
   }
   else if(props.selectorID !== '' && props.selectorID !== undefined) {
      jsx = (
         <div id={props.selectorID}>
               { props.children }
         </div>
      );
   }

   return jsx;
}
export default wrapper;