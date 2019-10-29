// import Invixtos from '../assets/Dashboard/Inviktus.jpg';
// import img1 from '../assets/Dashboard/Analytics.jpg';
import img2 from '../assets/Dashboard/HeroBanner_5.jpg';
import img3 from '../assets/Dashboard/HeroBanner_6.jpg';
import bigdata from '../assets/Dashboard/HeroBanner_3.jpg';
import mobile from '../assets/Dashboard/HeroBanner_4.jpg';
// overlayImages
import Blockchain from '../assets/Dashboard/icons/Blockchain Management.jpg';
import Report from '../assets/Dashboard/icons/Reports & Anaylytics.jpg';
import Portfolio from '../assets/Dashboard/icons/Portfolio_management.jpg';
// icons
import portfolio_icon from '../assets/Dashboard/icons/portfolio Management.svg';
import Blockchain_icon from '../assets/Dashboard/icons/BlockChain.svg';
import Report_icon from '../assets/Dashboard/icons/Reports and Analytics .svg';


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
    IntorItems : 
        {
            Ques:'Why Choose INVIKTUS',
            Intro : 'Inviktus is Big Data, AI and Blockchain based Middle and Front Office Solution for Investment Industry. Inviktus is Cloud based low cost solution for Data Processing, Reporting and Distribution platform. Inviktus provides platform for Portfolio Analytics, Client Reporting, Report Distribution platform.'
        },
    ServicesOverlay:[
        {
            headingTitle:"Portfolio Management",
            image:Portfolio,
            iconImg:portfolio_icon,
            content:"Business analytics (BA) is the practice of iterative, methodical exploration of an organization's data with emphasis on statistical analysis.",
        },
        {
            headingTitle:"Block Chain",
            image:Blockchain,
            iconImg:Blockchain_icon,
            content:"Business analytics (BA) is the practice of iterative, methodical exploration of an organization's data with emphasis on statistical analysis.",
        },
        {
            headingTitle:"Report and Analytics",
            image:Report,
            iconImg:Report_icon,
            content:"Business analytics (BA) is the practice of iterative, methodical exploration of an organization's data with emphasis on statistical analysis.",
        },
    ],
    AboutUs:{
        heading:'About INVIKTUS',
        text:'An AI and Blockchain based Middle office Solution for Investement Industry we are unique fintech company which offers service as well as develop products. We uses latest Big Data Technologies to provided Cloud Based low cost platform and AI for portfolio Commentary and Portfolio Sentiment Analysis. We brings Portfolio Performance and Risk Analytics to your phone.'
    },
    ContactUs:{
        salutation:"We'd {icon} to help",
        content:"We like to create things with fun, open-minded people. Feel free to say hello!",
        name:'Shoven Shrivastava',
        addressLine1:'Inviktus - Lynnfield, MA',
        addressLine2:'',
        contactNo:'@ 617-583-3126',
        email:'shoven@avilogicinc.com',
    },
    ourTeam:{
        desc:'',
        per:[
            {
                name:'Shoven Shrivastav',
                perDesc: 'Shoven Shrivastava has very good experience in implementing digital transformation program for middle and large enterprise. Shoven is certified Salesforce Architect. Shoven Shrivastava has extensive experience in doing complicated enterprise wide system implementation with Salesforce Einstein and Salesforce Financial Service cloud. Shoven has expert level knowledge of Salesforce Einstein Analytics and Discovery and Salesforce Financial Cloud. Shoven holds master degree in Finance and Predictive Analytics from Northwestern University.'
            },
            {
                name:'Meghna Shrivastava',
                perDesc: 'Meghna Shrivastava has very good technical as well functional knowledge of Financial services domain. She has expert level knowledge of enterprise wide implementation of Salesforce and a certified Salesforce Architect, Big Data based Enterprise Data Lake as well as Blockchain based solution'
            },
            {
                name:'Praveen Prakash',
                perDesc:'Praveen is development head in India. He has very rich financial services as well retail analytics experience. He leads our India team development effort.',
            }
            
        ]
    }

};

export default data;