import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMapMarker, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
// import { Nav } from 'react-router-dom';
import { Nav, Row } from 'react-bootstrap';
// import { Container, Alert, , Col, Form } from 'react-bootstrap';

// <FontAwesomeIcon icon={faHearto}/>
const QueryForm = (props) => (
    <div id="getInTouch">
        {/* <p className="getInToudhHeading">Get in touch</p>
        <hr className="ourTeamhrline"/> */}
        <div className="contactWrapper">
            <p className="contactHeading">Contact</p>
            <hr className="hrContactFirst"/>
            {/* <p className="salutation">We'd <FontAwesomeIcon icon={faHeart}/> to help!</p> */}
            <p className="contactContent">{props.local.ContactUs.content}</p>
            <div className="row">
                <div className="offset-lg-4 col-lg-4 offset-lg-4 offset-sm-4 col-sm-4 offset-sm-4 offset-md-4 col-md-4 offset-md-4 col-xs-12">
                    <p className="contactName"><FontAwesomeIcon icon={faUser} size="1x"/>{' '}{props.local.ContactUs.name}</p>
                    <p className="contactaddressLine1"><FontAwesomeIcon icon={faMapMarker} size="1x"/>{' '}{props.local.ContactUs.addressLine1}</p>
                    <p className="contactaddressLine2">{props.local.ContactUs.addressLine2}</p>
                    <p className="contactNumber"><FontAwesomeIcon icon={faPhone} size="1x"/>{' '}{props.local.ContactUs.contactNo}</p>
                    <p className="contactEmail"><FontAwesomeIcon icon={faEnvelope} size="1x"/>{' '}{props.local.ContactUs.email}</p>
                </div>
            </div>
            <hr className="hrcontactLast"/>
            <Row>
                <div className="brandClass offset-lg-4 col-lg-4 offset-lg-4 offset-sm-4 col-sm-4 offset-sm-4 offset-md-4 col-md-4 offset-md-4 col-xs-12">
                    <Nav> 
                        <Nav.Link className="c-name" title="Linkedin" href="https://www.linkedin.com/in/shovenshrivastava/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></Nav.Link>
                        <Nav.Link className="c-name" title="Twitter" href="https://twitter.com/AviLogicInc" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></Nav.Link>
                    </Nav>
                </div>
            </Row>
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