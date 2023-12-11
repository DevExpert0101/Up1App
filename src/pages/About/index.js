import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

import PageLayout from "./../../layouts/PageLayout";
import Team from "./Team";

//Images
import Shape1 from "./../../assets/images/home-banner/shape1.png";
import Shape3 from "./../../assets/images/home-banner/shape3.png";

import about2 from "./../../assets/images/about/about-2.png";
import about3 from "./../../assets/images/about/about-3.png";
import about4 from "./../../assets/images/about/about-4.png";
import about1 from "./../../assets/images/about/about-1.png";
import Partners from "./Partners";

const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

function AboutUs() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="page-content">
        <PageLayout pageTitle="About Us" />
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end">
                    <ImageBox image={about4} changeClass="image-box-1" />
                    <ImageBox image={about2} changeClass="image-box-1" />
                  </div>
                  <div className="row">
                    <ImageBox image={about3} changeClass="image-box-1" />
                    <ImageBox image={about1} changeClass="image-box-1" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b30 d-flex d-sm-block flex-column">
                <div className="section-head">
                  <h2 className="title">Mission & Vision</h2>
                  <p className="m-0 lh-base">
                    Revolutionize the blockchain landscape by offering an
                    innovative, secure, and scalable protocol that empowers
                    users and developers alike. Our focus is on fostering a
                    decentralized ecosystem where transparency, efficiency, and
                    trust are paramount.
                    <br />
                    <br />
                    Our vision is to establish UP1 as a leading force in the
                    blockchain revolution, where our protocol not only drives
                    innovation in decentralized finance (DeFi) and beyond but
                    also serves as a catalyst for societal and economic
                    transformation.
                  </p>
                </div>
                <Link
                  to={"/contact-us"}
                  className="btn btn-lg btn-primary btn-shadow text-uppercase"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape3} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>

        <section className="content-inner bg-light pricing-plan-wrapper2">
          <img className="bg-shape2" src={Shape1} alt="" />
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Team</h2>
            </div>
            <div className="row justify-content-center">
              <Team />
            </div>
          </div>
        </section>

        <section className="content-inner bg-light pricing-plan-wrapper2">
          <img className="bg-shape2" src={Shape1} alt="" />
          <div className="container">
            <div className="section-head text-center ">
              <h2 className="title">Partnerships</h2>
            </div>
            <div className="row justify-content-center">
              {/* <Partners /> */}
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
export default AboutUs;
