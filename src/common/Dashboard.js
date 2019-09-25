import React from 'react';
import '../assets/styles/dashboard.css';
import { Carousel} from 'react-bootstrap'
import local from '../constants/constant';

const Dashboard = () =>(
    <div>
        <Carousel>
            {local.images.map((e,i)=>(
                <Carousel.Item key={i}>
                <img
                className="d-block w-100"
                src={e}
                alt="First slide"
                />
            </Carousel.Item>
            ))}
        </Carousel> 
    </div>
);

export default Dashboard;