import React from 'react';

import coin1 from './../../assets/images/coins/coin1.png';
import coin3 from './../../assets/images/coins/coin3.png';
import coin4 from './../../assets/images/coins/coin4.png';
import superbowl from './../../assets/images/card/superbowl.png';
import vote from './../../assets/images/card/vote.png';
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
    {image: superbowl, title:'Super Bowl Winner Prediction', subtitle: 'Market Creator', pool:'353,533', total: 2854, 
        participants: 2322, market: 'Sports', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: '#b3a3ff'},
    {image: coin4, title:'Predict Future of Bitcoin', subtitle: 'Market Creator', pool:'256,321', total: 1444, 
        participants: 777, market: 'Cryotpcurrency', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: 'orange'},
    {image: vote, title:'Presidential Election Prediction', subtitle: 'Market Creator', pool:'754,333', total: 6432, 
        participants: 5323, market: 'Global Events', predefined: ['37,568', '48,756', '65,000', '75,000', '95,000', '101,454', '108,654'], color: '#b3a3ff'}
];

function BannerCard(){
    return(
        <>
            {cardData.map((data, index)=>(
                <div className="col-lg-6 col-md-6 m-b30 wow fadeInUp"  style={ {maxWidth: '600px'} }data-wow-delay="0.2s" key={index}>
                    <div className="icon-bx-wraper style-1 box-hover">
                        <div className="icon-media">
                            <img className='mt-3' src={data.image} alt="" />
                            <div className="icon-info">
                                <h2 className="title fs-4" >{data.title}</h2>
                                <div className='d-flex flex-xxl-row flex-xl-row flex-md-column flex-sm-column' style={{gap: '10px'}}>
                                    <div>
                                        <p>Market Creator</p>
                                        <p className='fs-8 fw-medium' style={{color: 'black', width: '200px'}}>Predict whether Bitcoin will surpass $70,000 by December 2023.</p>
                                    </div>
                                    <div style={{fontSize: '13px'}}>
                                        <p>Pool: 256,321 UP1</p>
                                        <p>Total Wagers: 1444</p>
                                        <p>Number of participants: 777</p>
                                        <p>Market: Cryptocurrency</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icon-content">
                            <div style={{width: '100%', height: '5px', backgroundColor: 'black'}} className='mb-3'></div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex gap-2'>
                                    <div className='py-1 px-2 d-flex align-items-center gap-2' style={{cursor: 'pointer', border: '3px solid black', borderRadius: '20px', textAlign: 'center', color: 'black'}}>
                                        Set Wager
                                        <i class="fa fa-chevron-right" aria-hidden="true" />
                                    </div>
                                    <LCDclock />
                                </div>
                                <div className="text-center px-4 py-1 rounded-2 d-flex align-items-center gap-1" style={{backgroundColor: 'rgba(30, 137, 228)', color: 'white', cursor: 'pointer'}}>
                                    <i class="fa fa-share" aria-hidden="true" />
                                    Share
                                </div>
                            </div>
                            <div className='mt-4 mb-1' style={{color: 'black'}}>More Predefined Wagers</div>
                            <div className='d-flex' style={{gap: '10px'}}>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>37,568</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>48,756</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>56,000</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>65,000</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>75,000</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>95,000</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>101,454</div>
                                <div style={{backgroundColor: data.color, width: '15%', textAlign: 'center', color: 'black'}}>108,654</div>
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