import React from 'react';

import coin1 from './../../assets/images/coins/coin1.png';
import coin3 from './../../assets/images/coins/coin3.png';
import coin4 from './../../assets/images/coins/coin4.png';
import superbowl from './../../assets/images/card/superbowl.png';
import vote from './../../assets/images/card/vote.png';
import tesla from './../../assets/images/card/tesla.png';
import LCDclock from './LCDclodk';

import { Card, Button, Badge } from 'react-bootstrap';

const BitcoinCard = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        <Badge variant="warning"><i className="fab fa-btc"></i></Badge> Predict Future of Bitcoin
      </Card.Header>
      <Card.Body>
        <Card.Title>Predict whether Bitcoin will surpass $70,000 by December 2023.</Card.Title>
        <Button variant="primary">Set Wager</Button>
        <div className="timer">
          00:01
        </div>
        <div>More Predefined Wagers</div>
        <div className="predefined-wagers">
          <Badge variant="secondary">37,568</Badge>
          <Badge variant="secondary">48,756</Badge>
          <Badge variant="secondary">56,000</Badge>
          <Badge variant="secondary">65,000</Badge>
          <Badge variant="secondary">75,000</Badge>
          <Badge variant="secondary">95,000</Badge>
          <Badge variant="secondary">101,454</Badge>
          <Badge variant="secondary">108,654</Badge>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        Pool: 256,321 UP1 | Total Wagers: 1444 | Number of participants: 777 | Market: Cryptocurrency
      </Card.Footer>
    </Card>
  );
}
const cardData = [
    // {image: coin4, title:'Bitcoin', subtitle:'BTC', price:'16,048.40', percent:'-1.26'},
    // {image: coin3, title:'Ethereum', subtitle:'ETH', price:'1,122.44', percent:'-1.55'},
    // {image: coin1, title:'Tether', subtitle:'USDT', price:'1.00', percent:'0.0099'},
    {image: superbowl, title:'Super Bowl Winner Prediction', subtitle: 'Market Creator', predict: 'Predict the winner of the upcoming NFL Super Bowl', pool:'353,533', total: 2854, 
        participants: 2322, market: 'Sports', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: '#b3a3ff'},
    {image: coin4, title:'Predict Future of Bitcoin', subtitle: 'Market Creator',predict: 'Predict whether Bitcoin will surpass $70,000 by December 2023', pool:'256,321', total: 1444, 
        participants: 777, market: 'Cryotpcurrency', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: '#b3a3ff'},
    {image: tesla, title:'Tesla Stock Price Prediction', subtitle: 'Market Creator',predict: 'Predict the closing price of Tesla stock by the end of the week.', pool:'256,321', total: 1444, 
        participants: 777, market: 'Finance & Stocks', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: '#b3a3ff'},
    {image: vote, title:'Presidential Election Prediction', subtitle: 'Market Creator', predict: 'Predict the winning candidate fo the 2024 Presidential Election', pool:'754,333', total: 6432, 
        participants: 5323, market: 'Global Events', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: '#b3a3ff'},
    
];

function BannerCard(){
    return(
        <>
            {cardData.map((data, index)=>(
                <div className="col-xl-6 col-lg-6 col-md-12 m-b30 wow fadeInUp"  style={ {maxWidth: '600px'} }data-wow-delay="0.2s" key={index}>
                    <div className="icon-bx-wraper style-1 box-hover">
                        <div className="icon-media">
                            <img className='mt-3' src={data.image} alt="" />
                            <div className="icon-info">
                                <div style={{height: "100px", display: "flex" , flexDirection: "column", justifyContent: "center"}}>

                                    <h2 className="title fs-4" >{data.title}</h2>
                                </div>
                                <div className='d-flex flex-lg-col flex-md-column flex-sm-column flex-column' style={{gap: '10px'}}>
                                    <div>
                                        <div className='d-flex align-items-center gap-2 mb-3'>

                                        <span>Market Creator</span>
                                        <i class="fa fa-user-circle fs-4"></i>
                                        </div>
                                        <p className='fs-8 fw-medium' style={{color: 'black'}}>{data.predict}</p>
                                    </div>
                                    <div style={{fontSize: '13px'}}>
                                        <p>Pool: {data.pool} UP1</p>
                                        <p>Total Wagers: {data.total}</p>
                                        <p>Number of participants: {data.participants}</p>
                                        <p>Market: {data.market}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icon-content">
                            <div style={{width: '100%', height: '5px', backgroundColor: 'black'}} className='mb-3'></div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-2'>
                                    <div className='py-1 px-2 d-flex align-items-center gap-2' style={{cursor: 'pointer', border: '3px solid black', borderRadius: '20px', textAlign: 'center', color: data.color}}>
                                        Set Wager
                                        <i class="fa fa-chevron-right" aria-hidden="true" />
                                    </div>
                                    <LCDclock color={data.color}/>
                                </div>
                                <div className="text-center px-4 py-1 rounded-2 d-flex align-items-center gap-1" style={{backgroundColor: data.color, cursor: 'pointer'}}>
                                    <i class="fa fa-share" aria-hidden="true"  />
                                    Share
                                </div>
                            </div>
                            <div className='mt-4 mb-1' style={{color: 'black'}}>More Predefined Wagers</div>
                            <div className='row text-center' >
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color,}}>37,568</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>48,756</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>56,000</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>65,000</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>75,000</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>95,000</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>101,454</div>
                                </div>
                                <div className='col-3 p-2' >
                                    <div style={{backgroundColor: data.color}}>108,654</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <BitcoinCard /> */}
        </>
    )
}

export default BannerCard;