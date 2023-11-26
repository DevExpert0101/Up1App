import React from "react";


import PageLayout from "../../layouts/PageLayout";


//Images
import Shape1 from '../../assets/images/home-banner/shape1.png';
import Shape3 from "./../../assets/images/home-banner/shape3.png";

import decentralized1 from "./../../assets/images/features/decentralized1.jpg";
import decentralized2 from "./../../assets/images/features/decentralized2.jpg";
import accurate1 from "./../../assets/images/features/accurate1.jpg";
import accurate2 from "./../../assets/images/features/accurate2.jpg";


const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt="" style={{visibility : 'visible!important'}}/>
      </div>
    </div>
  );
};

function Features() {
  
  return (
    <>
      <div className="page-content">
        <PageLayout pageTitle="Features" />
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
              
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox image={decentralized1} changeClass="image-box-1" />
                    <ImageBox image={decentralized2} changeClass="image-box-2" />
                  </div>                                    
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Infrastructure</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Prediction Markets</h2>
                  <p className="m-0 lh-base">
                    Detail how UP1 provides accurate and timely insights into
                    various market trends and events. Emphasize the platform's
                    commitment to data accuracy and real-time updates.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox image={accurate1} changeClass="image-box-1" />
                    <ImageBox image={accurate2} changeClass="image-box-2" />
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox image={decentralized1} changeClass="image-box-1" />
                    <ImageBox image={decentralized2} changeClass="image-box-2" />
                  </div>                                    
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Integration</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>



              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Accesibility </h2>
                  <p className="m-0 lh-base">
                    Detail how UP1 provides accurate and timely insights into
                    various market trends and events. Emphasize the platform's
                    commitment to data accuracy and real-time updates.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox image={accurate1} changeClass="image-box-1" />
                    <ImageBox image={accurate2} changeClass="image-box-2" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape3} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
        
        
      </div>
    </>
  );
}
export default Features;
