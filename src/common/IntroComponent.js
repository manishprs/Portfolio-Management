import React from 'react';

const Intro = (props) =>(
    <div className="dummy">
        <p className="whyHeader">{props.local.IntorItems.Ques}</p>
        <hr className="hrline"/>
        <p className="whySubText">{props.local.IntorItems.Intro}</p>
        {/* <h2 className="comingsoon"><p>Please Contact<br/>Shoven Shrivastava <br/>@617-583-3126 <br/>for Demo.</p></h2> */}
    </div>
);

export default Intro;