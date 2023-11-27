import React from "react";

import PageLayout from "../../layouts/PageLayout";

//Images
import Shape1 from "../../assets/images/home-banner/shape1.png";
import Shape3 from "./../../assets/images/home-banner/shape3.png";

import decentralized1 from "./../../assets/images/features/decentralized1.jpg";
import decentralized2 from "./../../assets/images/features/decentralized2.jpg";
import reward from "./../../assets/images/incentives/reward.png";
import staking from "./../../assets/images/incentives/staking.png";
import liquidity1 from "./../../assets/images/incentives/liquidity1.png";
import liquidity2 from "./../../assets/images/incentives/liquidity2.png";
import liquidity3 from "./../../assets/images/incentives/liquidity3.png";
import prediction from "./../../assets/images/incentives/prediction.png";
import governance from "./../../assets/images/incentives/governance.png";

const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

function Incentives() {
  return (
    <>
      <div className="page-content">
        <PageLayout
          pageTitle="Incentives"
          desc="Staking and liquidity provision rewards"
        />
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="about-bx2 style-1 align-items-center">
              <div className="">
                <div className="dz-media">
                  <div className="justify-content-center m-b70 d-flex">
                    <ImageBox image={reward} changeClass="image-box-2" />
                  </div>
                </div>
              </div>
              <div className="about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title text-center">Reward Systems</h2>
                  <p className="m-0 lh-base">
                    The UP1 token ecosystem is designed to reward its users
                    proactively, creating a vibrant and participatory community.
                    Our reward systems are multifaceted, catering to different
                    aspects of user engagement.
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
                  <div className="row align-items-end m-b70 d-flex justify-content-center">
                    <ImageBox image={staking} changeClass="image-box-2" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Staking Mechanism</h2>
                  <p className="m-0 lh-base">
                    Staking UP1 tokens is more than just an investment, it's an
                    opportunity to be part of a growing community, contribute to
                    network health, and have a say in the project's direction.
                    Join us in building a robust and thriving UP1 ecosystem!
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
                    The Liquidity Provision Rewards program of the UP1 token
                    aims to create a robust and sustainable financial ecosystem,
                    where the contributions of each participant are valued and
                    rewarded. This approach not only benefits individual
                    providers but also strengthens the entire UP1 community.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="d-flex col-4 flex-column">
                  <img
                    src={liquidity1}
                    className="rounded-2"
                    changeClass="image-box-1"
                    alt="decentral"
                  />
                  {/* <span className="text-center">hello</span> */}
                </div>
                <div className="d-flex col-4 flex-column">
                  <img
                    src={liquidity2}
                    className="rounded-2"
                    changeClass="image-box-1"
                    alt="decentral"
                  />
                  {/* <span className="text-center">white</span> */}
                </div>
                <div className="d-flex col-4 flex-column">
                  <img
                    src={liquidity3}
                    className="rounded-2"
                    changeClass="image-box-1"
                    alt="decentral"
                  />
                  {/* <span className="text-center">blue</span> */}
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
            <div className="row about-bx2 style-1 align-items-center" style={{rowGap: '20px'}}>
              <div className="col-lg-6">
                <div className="dz-media d-flex justify-content-center">
                  <img src={prediction} className='rounded-2' style={{width: '209px'}}/>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Prediction and Accuracy Bonuses</h2>
                  <p className="m-0 lh-base">
                    The Prediction and Accuracy Bonuses of the UP1 token are
                    designed to incentivize and reward market analysis and
                    foresight. This feature not only enhances user engagement
                    but also contributes to a more informed and active community
                    within the UP1 ecosystem.
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
              <div className="col-lg-6 about-content ps-lg-5">
                <div className="section-head">
                  <h2 className="title">Governance Participation</h2>
                  <p className="m-0 lh-base">
                    UP1 Token's governance model is designed to promote active
                    and meaningful participation, ensuring that the UP1
                    ecosystem evolves in a way that benefits all stakeholders.
                    It's not just about holding a token; it's about being part
                    of a community that values your input and vision.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-center">
                    <img src={governance} className='rounded-2' changeClass="image-box-1" style={{width: '180px'}}/>
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
