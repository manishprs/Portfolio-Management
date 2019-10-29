import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ReadMoreReact from 'read-more-react';

const ourTeam = (props) =>(
    <div className="ourTeam">
        <p className="outTeamHeaderText">Our TEAM Members</p>
        <hr className="ourTeamhrline"/>
        <p className="ourTeamSubText">{props.local.ourTeam.desc}</p>
        <div className="teamInto row clearfix">
        {props.local.ourTeam.per.map((e,i)=>(
            <div className="perOuterWrapper col-md-4" key={i}>
                <div className="perWrapper">
                <div className="ibShap">
                    <div className="perAvatar">
                    <FontAwesomeIcon icon={faUser}  size="6x" />
                    </div>
                </div>
                <div className="perContent">
                    <div className="perName">{e.name}</div>
                    <hr className="hrname"/>
                    <p className="perDescription">
                        <ReadMoreReact text={e.perDesc}
                            readMoreText='Read more'/>
                    </p>
                </div>
                </div>
            </div>              
            ))}
        </div>
    </div>
);

export default ourTeam;