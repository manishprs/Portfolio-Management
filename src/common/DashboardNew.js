import React from 'react';

import { Carousel} from 'react-bootstrap'
import local from '../constants/constant';

const Dashboard = () =>(
    <div>
        <Carousel indicators={false}>
            {local.carouselItems.map((e,i)=>(
                <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={e.img}
                  alt={e.caption.alt}
                  height="500"
                />
                <Carousel.Caption className={e.caption.class}>
                  <p className="carHeading">{e.caption.smallHeader?e.caption.smallHeader:''}</p><br/>
                  <p className="carSubHeading">{e.caption.boldHeader?e.caption.boldHeader:''}</p>
                  <p className="carSubText">{e.caption.text1?e.caption.text1:''}</p>
                  <p className="carSubText">{e.caption.text2?e.caption.text2:''}</p>
                </Carousel.Caption>
              </Carousel.Item>                
            ))}
        </Carousel> 
    </div>
);

export default Dashboard;