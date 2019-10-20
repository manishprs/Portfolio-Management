import React from 'react';

import { Carousel} from 'react-bootstrap'
import local from '../constants/constant';

const Dashboard = () =>(
    <div>
        <Carousel indicators={false}>
            {/* <Carousel.Item key='video'>
                <div className="col-md-12">
                    <div className="select-video">
                    <div>
                        <video 
                        controls 
                        src={videourl} 
                        alt='demo video' 
                        preload= "true"
                        poster={videoImg2}
                        height="500"
                        
                        />
                    </div>
                    </div>
                </div>
            </Carousel.Item> */}
            {local.carouselItems.map((e,i)=>(
                <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={e.img}
                  alt={e.caption.alt}
                  height="500"
                />
                <Carousel.Caption className={e.caption.class}>
                  <p className="carHeading">{e.caption.smallHeader?e.caption.smallHeader:''}</p>
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