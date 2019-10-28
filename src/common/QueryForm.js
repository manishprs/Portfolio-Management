import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMapMarker, faUser, faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'

// <FontAwesomeIcon icon={faHearto}/>
const QueryForm = (props) => (
    <div id="getInTouch">
        {/* <p className="getInToudhHeading">Get in touch</p>
        <hr className="ourTeamhrline"/> */}
        <div className="contactWrapper">
            <p className="contactHeading">Contact</p>
            <hr className="hrContactFirst"/>
            <p className="salutation">We'd <FontAwesomeIcon icon={faHeart}/> to help!</p>
            <p className="contactContent">{props.local.ContactUs.content}</p>
            <div className="row customeRow col-md-12">
                <div className="contactColumn left col-md-1 col-lg-1 col-xs-1 col-sm-1">
                    <p><FontAwesomeIcon icon={faUser} size="2x"/></p>
                    <p><FontAwesomeIcon icon={faMapMarker} size="2x"/></p>
                    <p><FontAwesomeIcon icon={faPhone} size="2x"/></p>
                    <p><FontAwesomeIcon icon={faEnvelope} size="2x"/></p>
                </div>
                <div className="contactColumn right col-md-11 col-lg-11 col-xs-11 col-sm-11">
                    <p className="contactName">{props.local.ContactUs.name}</p>
                    <p className="contactaddressLine1">{props.local.ContactUs.addressLine1}</p>
                    <p className="contactaddressLine2">{props.local.ContactUs.addressLine2}</p>
                    <p className="contactNumber">{props.local.ContactUs.contactNo}</p>
                    <p className="contactEmail">{props.local.ContactUs.email}</p>
                </div>
            </div>
            <hr className="hrcontactLast"/>
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