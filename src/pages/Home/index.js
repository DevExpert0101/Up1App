import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import BannerCard from "./BannerCard";
import OneStop from "./OneStop";
import RecentNews from "./RecentNews";

//images
import baner1 from "./../../assets/images/home-banner/img1.png";
import baner2 from "./../../assets/images/home-banner/img2.png";
import Shape1 from "./../../assets/images/home-banner/shape1.png";
import Shape3 from "./../../assets/images/home-banner/shape3.png";
import wallet from "./../../assets/images/icons/wallet.svg";
import friend from "./../../assets/images/icons/friend.svg";
import participation from "./../../assets/images/icons/participation.svg";
import outcome from "./../../assets/images/icons/outcome.svg";

import bloglg from "./../../assets/images/blog/blog-ig.png";
import avatar3 from "./../../assets/images/avatar/avatar3.jpg";
import videobox from "./../../assets/images/about/videobx.png";
import ModalVideo from "react-modal-video";

const trustBlog = [
  {
    image: wallet,
    title: "Decentralization Unleashed",
    description:
      "Harnessing the power of blockchain technology, ensuring decentralization, transparency, and security in every prediction.",
  },
  {
    image: friend,
    title: "Accurate Community-Powered Insights ",
    description:
      "UP1 isn't just about making predictions, it's about leveraging collective wisdom. Join a vibrant community of visionaries, where insightful predictions drive market outcomes.",
  },
  {
    image: participation,
    title: "Incentivized Participation",
    description:
      "UP1 token rewards accuracy, engagement and liquidity provision with reflection and ecosystem split, ensuring that every action you take within the platform contributes to your success.",
  },
  {
    image: outcome,
    title: "Transparent and Fair Outcomes",
    description:
      "With our blockchain-based infrastructure, every prediction outcome is transparently settled, eliminating any room for manipulation or bias. Trust in fair and accurate results.",
  },
];

function Home() {  
  
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="page-content">
        <div className="main-bnr style-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 text-center">
                <h1 style={{ paddingLeft: "80px", paddingRight: "80px"}}>
                  Elevating Predictive Insights to New Heights
                </h1>
                <p className="text text-primary ">
                  Welcome to the Future of Decentralized Prediction Markets
                </p>
                <Link
                  to={"/about-us"}
                  className="btn space-lg btn-gradient btn-shadow btn-primary "
                >
                  Explore Markets
                </Link>
                <ul className="image-before">
                  <li className="left-img">
                    <img src={baner1} alt="" />
                  </li>
                  <li className="right-img">
                    <img src={baner2} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape1} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </div>
        <div className="clearfix bg-primary-light">
          <div className="container">
            <div className="currancy-wrapper" style={{ width: "100%" }}>
              <div className="row justify-content-center g-5">
                <BannerCard />
              </div>
            </div>
          </div>
        </div>
        <section className="content-inner p-0 bg-primary-light video-bx-wrapper">
          <img className="bg-shape1" src={Shape1} alt="" />
          <div className="container wow fadeInUp" data-wow-delay="0.4s">
            <div className="section-head text-center">
              <h2 className="title pt-5">How it works?</h2>
              <p>Predict the Future, Elevate Your Insights with UP1.</p>
            </div>
            <div className="video-bx style-1">
              <div className="video-media">
                <img src={videobox} alt="" />
                <Link
                  to={"#"}
                  className="popup-youtube play-icon"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.25 3.75L23.75 15L6.25 26.25V3.75Z"
                      stroke="#9467FE"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="clearfix section-wrapper1 bg-primary-light">
          <div className="container">
            <div className="content-inner-1">
              <div className="section-head text-center">
                <h2 className="title">
                  Why UP1 is Revolutionizing Predictions?
                </h2>
                <p>
                  Embrace the Future of Forecasting and Decentralized
                  Prediction Markets
                </p>
              </div>
              <div className="row">
                {trustBlog.map((data, ind) => (
                  <div className="col-lg-6 m-b30" key={ind}>
                    <div className="icon-bx-wraper style-2" style={{position: 'relative'}}>
                      <div className="icon-media">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="icon-content mb-5" >
                        <h4
                          className="title d-flex flex-column justify-content-center"
                          // style={{ height: "60px" }}
                        >
                          {data.title}
                        </h4>
                        <p >{data.description}</p>
                        <Link
                          className="btn btn-primary btn-gradient btn-shadow"
                          style={{position: 'absolute', bottom: '10px'}}
                          to={"/about-us"}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="form-wrapper-box style-1 text-center">
              <div className="section-head ">
                <div className="section-head text-center">
                  <h2 className="title">
                    From Exploration to Rewards - Navigating UP1's
                    Prediction Markets
                  </h2>
                </div>
              </div>
              
              <div className="row d-flex" style={{rowGap: '24px'}}>
                <div className="col-xl-4 col-md-6">
                  <div className="icon-bx-wraper style-5 text-center d-flex flex-column justify-content-center">
                    <div className="icon-content">
                      <h4 className="title">Explore Diverse Markets</h4>
                      <span>Discover a World of Diverse Prediction Markets</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="icon-bx-wraper style-5 text-center d-flex flex-column justify-content-center">
                    <div className="icon-content">
                      <h4 className="title">Make Precise Predictions</h4>
                      <span>Leverage Insights to Make Accurate Forecasts</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="icon-bx-wraper style-5 text-center d-flex flex-column justify-content-center">
                    <div className="icon-content">
                      <h4 className="title">Reap Rewards of Accuracy</h4>
                      <span>Receive Incentives for Your Astute Predictions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
        </section>
        <section className="content-inner bg-light icon-section section-wrapper2">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">
                Explore
                <span className="text-primary">
                  {" "}
                  Markets and Predictions{" "}
                </span>{" "}
                Tailored to Your Interests
              </h2>
            </div>
            <div className="row sp60">
              <OneStop />
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
        </section>
        <section className="content-inner bg-white blog-wrapper">
          <img className="bg-shape1" src={Shape1} alt="" />

          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="section-head ">
                  <h6 className="sub-title text-primary">FROM OUR BLOG</h6>
                  <h2 className="title">Recent News &amp; Updates</h2>
                </div>
                <RecentNews />
              </div>
              <div className="col-xl-5 col-lg-12 m-b30 ">
                <div
                  className="dz-card style-2"
                  style={{ backgroundImage: "url(" + bloglg + ")" }}
                >
                  <div className="dz-category">
                    <ul className="dz-badge-list">
                      <li>
                        <Link to={"#"} className="dz-badge">
                          14 Fan 2022
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    {/* <h2 className="dz-title"> */}
                    <Link to={"/blog-details"} className="text-white fs-5 ">
                      <span>
                        Blockchain and Beyond - UP1's Impact on Revolutionizing
                        Prediction Markets
                      </span>
                    </Link>
                    {/* </h2> */}
                    <div className="dz-meta mt-4">
                      <ul>
                        <li className="post-author">
                          <Link to={"#"}>
                            <img src={avatar3} alt="" className="me-2" />
                            <span>By Noare</span>
                          </Link>
                        </li>
                        <li className="post-date">
                          <Link to={"#"}> 12 May 2022</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="cfmQFW1DpA0"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
export default Home;
