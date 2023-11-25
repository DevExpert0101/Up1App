import React from "react";

import coin1 from "./../../assets/images/coins/coin1.png";
import coin3 from "./../../assets/images/coins/coin3.png";
import coin4 from "./../../assets/images/coins/coin4.png";
import superbowl from "./../../assets/images/card/superbowl.png";
import vote from "./../../assets/images/card/vote.png";
import tesla from "./../../assets/images/card/tesla.png";
import LCDclock from "./LCDclodk";

import { Card, Button, Badge } from "react-bootstrap";

const BitcoinCard = () => {
  return (
    <Card className="text-center">
      <Card.Header>
        <Badge variant="warning">
          <i className="fab fa-btc"></i>
        </Badge>{" "}
        Predict Future of Bitcoin
      </Card.Header>
      <Card.Body>
        <Card.Title>
          Predict whether Bitcoin will surpass $70,000 by December 2023.
        </Card.Title>
        <Button variant="primary">Set Wager</Button>
        <div className="timer">00:01</div>
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
        Pool: 256,321 UP1 | Total Wagers: 1444 | Number of participants: 777 |
        Market: Cryptocurrency
      </Card.Footer>
    </Card>
  );
};
const cardData = [
  // {image: coin4, title:'Bitcoin', subtitle:'BTC', price:'16,048.40', percent:'-1.26'},
  // {image: coin3, title:'Ethereum', subtitle:'ETH', price:'1,122.44', percent:'-1.55'},
  // {image: coin1, title:'Tether', subtitle:'USDT', price:'1.00', percent:'0.0099'},
  {
    image: superbowl,
    title: "Super Bowl Winner Prediction",
    subtitle: "Market Creator",
    predict: "Predict the winner of the upcoming NFL Super Bowl",
    pool: "353,533",
    total: 2854,
    participants: 2322,
    market: "Sports",
    predefined: [
      "KCC",
      "SF 49ERS",
      "B.RAVENS",
      "DALLAS C.",
      "MIAMI D.",
      "ETROIT L.",
      "BUFFALO B.",
      "SEATTLE S.",
    ],
    color: "#b3a3ff",
  },
  {
    image: coin4,
    title: "Predict Future of Bitcoin",
    subtitle: "Market Creator",
    predict: "Predict whether Bitcoin will surpass $70,000 by December 2023",
    pool: "256,321",
    total: 1444,
    participants: 777,
    market: "Cryotpcurrency",
    predefined: [
      "KCC",
      "SF 49ERS",
      "B.RAVENS",
      "DALLAS C.",
      "MIAMI D.",
      "ETROIT L.",
      "BUFFALO B.",
      "SEATTLE S.",
    ],
    color: "#b3a3ff",
  },
  {
    image: tesla,
    title: "Tesla Stock Price Prediction",
    subtitle: "Market Creator",
    predict: "Predict the closing price of Tesla stock by the end of the week.",
    pool: "256,321",
    total: 1444,
    participants: 777,
    market: "Finance & Stocks",
    predefined: [
      "KCC",
      "SF 49ERS",
      "B.RAVENS",
      "DALLAS C.",
      "MIAMI D.",
      "ETROIT L.",
      "BUFFALO B.",
      "SEATTLE S.",
    ],
    color: "#b3a3ff",
  },
  {
    image: vote,
    title: "Presidential Election Prediction",
    subtitle: "Market Creator",
    predict: "Predict the winning candidate fo the 2024 Presidential Election",
    pool: "754,333",
    total: 6432,
    participants: 5323,
    market: "Global Events",
    predefined: [
      "KCC",
      "SF 49ERS",
      "B.RAVENS",
      "DALLAS C.",
      "MIAMI D.",
      "ETROIT L.",
      "BUFFALO B.",
      "SEATTLE S.",
    ],
    color: "#b3a3ff",
  },
];

function BannerCard() {
  return (
    <>
      {cardData.map((data, index) => (
        <div
          className="col-xl-6 col-lg-6 col-md-12 m-b30 wow fadeInUp"
          style={{ maxWidth: "480px" }}
          data-wow-delay="0.2s"
          key={index}
        >
          <div
            className="icon-bx-wraper style-1 box-hover"
            style={{ backgroundColor: "#271456" }}
          >
            <div className="icon-media d-flex flex-column">
              <div className="d-flex">
                <img className="mt-3" src={data.image} alt="" />
                <div className="icon-info">
                  <div
                    style={{
                      height: "90px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h2 className="title fs-4" style={{ color: "white" }}>
                      {data.title}
                    </h2>
                  </div>
                  <div
                    className="d-flex flex-lg-col flex-md-column flex-sm-column flex-column"                    
                  >
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="fs-7">Market Creator</span>
                      <i class="fa fa-user-circle fs-5"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-5">
                <div>
                  <p className="fs-6 fw-medium" style={{ color: "white" }}>
                    {data.predict}
                  </p>
                </div>
                <div className="fs-7">
                  <p style={{ margin: "0px"}}>
                    <span>Pool: </span>{" "}
                    <span style={{ color: "white" }}>{data.pool} UP1</span>
                  </p>
                  <p style={{ margin: "0px"}}>
                    <span>Total Wagers: </span>{" "}
                    <span style={{ color: "white" }}>{data.total}</span>
                  </p>
                  <p style={{ margin: "0px"}}>
                    <span>Participants: </span>{" "}
                    <span style={{ color: "white" }}>{data.participants} </span>
                  </p>
                  <p style={{ margin: "0px"}}>
                    <span>Market: </span>{" "}
                    <span style={{ color: "white" }}>{data.market}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="icon-content">
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  backgroundColor: "white",
                }}
                className="mb-3"
              ></div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2">
                  <div
                    className="py-1 px-2 d-flex align-items-center gap-2"
                    style={{
                      cursor: "pointer",
                      border: "3px solid white",
                      borderRadius: "20px",
                      textAlign: "center",
                      backgroundColor: data.color,
                      color: "#271456",
                    }}
                  >
                    SET WAGER
                    <i class="fa fa-chevron-right" aria-hidden="true" />
                  </div>
                  <LCDclock color={data.color} />
                </div>
                <div
                  className="text-center px-4 py-1 rounded-2 d-flex align-items-center gap-1"
                  style={{
                    backgroundColor: data.color,
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <i class="fa fa-share" aria-hidden="true" />
                  Share
                </div>
              </div>
              <div className="mt-4 mb-1" style={{ color: "black" }}>
                {/* More Predefined Wagers */}
              </div>
              <div className="row text-center">
                {data.predefined.map((item, ind) => (
                  <div key={ind} className="col-3 p-2 fs-8">
                    <div
                      className="rounded-1"
                      style={{ backgroundColor: data.color, color: "#271456" }}
                    >
                      {item}
                    </div>
                  </div>
                ))}                
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <BitcoinCard /> */}
    </>
  );
}

export default BannerCard;
