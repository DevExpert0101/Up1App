import React from 'react';
import {Link} from 'react-router-dom';

//Images
import Icon9 from './../../assets/images/icons/icon9.svg';
import Icon10 from './../../assets/images/icons/icon10.svg';
import Icon11 from './../../assets/images/icons/icon11.svg';
import Icon12 from './../../assets/images/icons/icon12.svg';
import Icon13 from './../../assets/images/icons/icon13.svg';
import pic1 from './../../assets/images/about/pic1.jpg';
import support1 from './../../assets/images/icons/support1.png';
import plus from './../../assets/images/icons/plus.png';



const cardData = [
    {image: Icon9, title:'Cryptocurrency Markets', description: "Forecasting Trends in the Crypto Sphere"},
    {image: Icon10, title:'Sports Predictions', description: "Predicting Sports Outcomes with Precision"},
    {image: Icon11, title:'Global Events', description: "Predict World Events and Trends"},
    {image: Icon12, title:'Finance & Stock', description: "Anticipate Stock Movements and Trends"},
    {image: Icon13, title:'Entertainment Forecasts', description: "Predicting Entertainment Industry Outcomes"},
];

function OneStop(){
    return(
        <>
            {cardData.map((item, ind)=>(
                <div className="col-xl-4 col-md-6 m-b60" key={ind}>
                    <div className="icon-bx-wraper style-3 text-center">
                        <div className="icon-media">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="icon-content">
                            <h4 className="title">{item.title}</h4>
                            <p className="m-b0">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-xl-4 col-md-6 m-b60">
                <div className="icon-bx-wraper style-4" style={{backgroundImage: "url("+ pic1 + ")"}}>
                    <div className="inner-content">
                        <div className="icon-media m-b30">
                            <img src={plus} alt="" />
                        </div>
                        <div className="icon-content">
                            <Link to={"/contact-us"} className="btn btn-primary">Create Market</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OneStop;