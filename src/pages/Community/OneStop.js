import React from 'react';
import {Link} from 'react-router-dom';

//Images
import github from './../../assets/images/icons/github.svg';
import discord from './../../assets/images/icons/discord.svg';
import telegram from './../../assets/images/icons/telegram.svg';
import events from './../../assets/images/icons/events.svg';
import Icon13 from './../../assets/images/icons/icon13.svg';
import pic1 from './../../assets/images/about/pic1.jpg';
import support1 from './../../assets/images/icons/support1.png';
import plus from './../../assets/images/icons/plus.png';



const cardData = [
    {image: github, title:'Github', description: "Forecasting Trends in the Crypto Sphere"},
    {image: discord, title:'Discord', description: "Predicting Sports Outcomes with Precision"},
    {image: telegram, title:'Telegram', description: "Predict World Events and Trends"},
    {image: events, title:'Events', description: "Anticipate Stock Movements and Trends"},
];

function OneStop(){
    return(
        <>
            {cardData.map((item, ind)=>(
                <div className="col-6 m-b60" key={ind} style={{cursor: 'pointer'}}>
                    <Link>
                        <div className="icon-bx-wraper style-3 text-center">
                            <div className="icon-media">
                                <img src={item.image} style={{ width: "80px"}} alt="" />
                            </div>
                            <div className="icon-content">
                                <h4 className="title">{item.title}</h4>
                                <p className="m-b0">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {/* <div className="col-xl-4 col-md-6 m-b60">
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
            </div> */}
        </>
    )
}
export default OneStop;