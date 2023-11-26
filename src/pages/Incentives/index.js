import React from "react";

import PageLayout from "../../layouts/PageLayout";

//Images
import Shape1 from '../../assets/images/home-banner/shape1.png';
import Shape3 from "./../../assets/images/home-banner/shape3.png";

import decentralized1 from "./../../assets/images/features/decentralized1.jpg";
import decentralized2 from "./../../assets/images/features/decentralized2.jpg";

const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt=""/>
      </div>
    </div>
  );
};

function Incentives() {
    
  return (
    <>
      <div className="page-content">
        <PageLayout pageTitle="Incentives" desc="Staking and liquidity provision rewards"/>
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="about-bx2 style-1 align-items-center">
            <div className="">
                <div className="dz-media">
                  <div className="justify-content-center m-b70 d-flex">
                    <ImageBox image={decentralized2} changeClass="image-box-2" />
                  </div>                                    
                </div>
              </div>
              <div className="about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title text-center">Reward Systems</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape3} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
        <section className="content-inner about-sec bg-light">
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
                  <h2 className="title">Staking Mechanism</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="bg-shape3" src={Shape3} alt="" />
        </section>
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="about-bx2 style-1 align-items-center">
                <div className="about-content ps-lg-5 m-b100">
                    <div className="section-head">
                    <h2 className="title">Liquidity Provision Rewards</h2>
                    <p className="m-0 lh-base">
                        Explain how blockchain ensures transparency, security, and
                        fairness in prediction outcomes. Highlight the advantages of
                        decentralized prediction markets.
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex col-4 flex-column">
                        <img src={decentralized2} changeClass="image-box-1" alt="decentral"/>
                        <span className="text-center">hello</span>
                    </div>
                    <div className="d-flex col-4 flex-column">
                        <img src={decentralized2} changeClass="image-box-1" alt="decentral"/>
                        <span className="text-center">white</span>
                    </div>
                    <div className="d-flex col-4 flex-column">
                        <img src={decentralized2} changeClass="image-box-1" alt="decentral"/>
                        <span className="text-center">blue</span>
                    </div>
              </div>
            </div>
          </div>
          <img className="bg-shape1" src={Shape1} alt="" />
          <img className="bg-shape2" src={Shape3} alt="" />
          <img className="bg-shape3" src={Shape3} alt="" />
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
        <section className="content-inner about-sec bg-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
              
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end justify-content-center m-b70">
                    <ImageBox image={decentralized1} changeClass="image-box-1" />
                  </div>                                    
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Prediction and Accuracy Bonuses</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Governance Participation</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70 justify-content-center">
                    <ImageBox image={decentralized1} changeClass="image-box-1" />
                  </div>                                    
                </div>
              </div>
            </div>
          </div>
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>   
      </div>
    </>
  );
}
export default Incentives;
