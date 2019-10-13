// import Invixtos from '../assets/Dashboard/Inviktus.jpg';
// import img1 from '../assets/Dashboard/Analytics.jpg';
import img2 from '../assets/Dashboard/Analytics_Network.jpg';
import img3 from '../assets/Dashboard/Good_Analytics.jpg';
import bigdata from '../assets/Dashboard/shutterstock_652084264.jpg';
import mobile from '../assets/Dashboard/shutterstock_758444896.jpg';

var data = {
    carouselItems : [
        {
            img:img3,
            caption:{
                smallHeader:'Introducing',
                boldHeader: 'Inviktus',
                text1:'An AI and Blockchain based\nMiddle office Solution for Investement Industry',
                text2:'we are unique fintech company which offers service as well as develop products',
                class: 'firstSlide',
                alt:'Good_Analytics',
            }
        },
        {
            img:bigdata,
            caption:{
                smallHeader:'',
                boldHeader: 'Inviktus',
                text1:'uses latest Big Data Technologies to provided Cloud Based low cost platform.',
                text2:'Inviktus uses AI for portfolio Commentary and Portfolio Sentiment Analysis..',
                class: 'secondSlide',
                alt:'',
            }
        },
        {
            img:mobile,
            caption:{
                smallHeader:'Portfolio Analytics',
                boldHeader: 'On Your Phone',
                text1:"Inviktus brings Portfolio Performance and Risk Analytics to your phone. It's built to be used on your iPhone and iPad..",
                text2:'',
                class: 'thirdSlide',
                alt:'Analytics'
            }
        },
        {
            img:img2,
            caption:{
                smallHeader:'Financial',
                boldHeader: 'Blockchain',
                text1:'Inviktus uses Blockchain based private network or Salesforce community cloud to distribute Client Reports or Internal Reports',
                text2:'',
                class: 'fourthSlide',
                alt:'Analytics_Network'
            }
        }
    ],
};

export default data;