import React from 'react';

const QueryForm = (props) => (
    <div id="getInTouch">
        {/* <p className="getInToudhHeading">Get in touch</p>
        <hr className="ourTeamhrline"/> */}
        <div className="contactWrapper">
            <p className="contactHeading">Contact</p>
            <p className="contactName">{props.local.ContactUs.name}</p>
            <p className="contactaddressLine1">{props.local.ContactUs.addressLine1}</p>
            <p className="contactaddressLine2">{props.local.ContactUs.addressLine2}</p>
            <p className="contactNumber">{props.local.ContactUs.contactNo}</p>
            <p className="contactEmail">{props.local.ContactUs.email}</p>
        </div>
        {/* <div className="formWrapper col-md-7">
            <form onSubmit={(e)=>props.onFormSubmit(e)}>
                <input type="text"name="name"  placeholder="Name" /><br/>
                <input type="text" name="email"  placeholder="Email" /><br/>
                <input type="text" name="subject"  placeholder="Subject" /><br/>
                <textarea  name="message" placeholder="Message" /><br/>
                <input className="btn btn-success"type="submit" value="Submit" />
            </form>
        </div> */}
    </div>
);

export default QueryForm;