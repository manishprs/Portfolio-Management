import React from 'react';
import '../assets/styles/dashboard.css';
import { Carousel} from 'react-bootstrap'
import local from '../constants/constant';
import videourl from '../assets/videos/inviktus.mp4';
import videoImg from '../assets/videos/videoBanner.png';
import videoImg2 from '../assets/videos/videoBanner2.png';

const Dashboard = () =>(
    <div>
        <Carousel>
            <Carousel.Item key='video'>
                <div className="col-md-12">
                    <div className="select-video">
                    <div>
                        <video 
                        controls src={videourl} 
                        alt='demo video' 
                        preload= "true"
                        poster={videoImg2}
                        height="500"
                        />
                    </div>
                    </div>
                </div>
            </Carousel.Item>
            {local.carouselItems.map((e,i)=>(
                <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={e.img}
                  alt={e.caption.alt}
                  height="500"
                />
                <Carousel.Caption className={e.caption.class}>
                  <span>{e.caption.smallHeader?e.caption.smallHeader:''}</span><br/>
                  <span>{e.caption.boldHeader?e.caption.boldHeader:''}</span>
                  <p>{e.caption.text1?e.caption.text1:''}</p>
                  <p>{e.caption.text2?e.caption.text2:''}</p>
                </Carousel.Caption>
              </Carousel.Item>                
            ))}
        </Carousel> 
    </div>
);

export default Dashboard;