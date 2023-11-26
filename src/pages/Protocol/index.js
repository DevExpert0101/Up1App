import React from "react";

import PageLayout from "../../layouts/PageLayout";

//Images
import Shape1 from "../../assets/images/home-banner/shape1.png";
import Shape3 from "./../../assets/images/home-banner/shape3.png";

import Logo from "./../../assets/images/protocol/UP1Logo2.png";
import security from "./../../assets/images/protocol/security.png";
import up1 from "./../../assets/images/protocol/up1.png";
import amm1 from "./../../assets/images/protocol/amm1.png";
import amm2 from "./../../assets/images/protocol/amm2.png";
import amm3 from "./../../assets/images/protocol/amm3.png";
import roadmap1 from "./../../assets/images/protocol/roadmap1.png";
import roadmap2 from "./../../assets/images/protocol/roadmap2.png";
import roadmap3 from "./../../assets/images/protocol/roadmap3.png";


const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

function Protocol() {
  return (
    <>
      <div className="page-content">
        <PageLayout
          pageTitle="Protocol"
          desc="This protocol is coming best now."
        />
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="about-bx2 style-1 align-items-center">
              <div className="">
                <div className="dz-media d-flex justify-content-center">
                  <div
                    className="justify-content-center m-b70 d-flex"
                    style={{ width: "70%" }}
                  >
                    <ImageBox image={Logo} changeClass="image-box-2" />
                  </div>
                </div>
              </div>
              <div className="about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title text-center">Whitepaper</h2>
                  <p className="m-0 lh-base">
                    Discusses our commitment to robust security measures and
                    decentralized governance, ensuring transparency and
                    trustworthiness. It serves as a roadmap, guiding readers
                    through our future plans, milestones, and the overarching
                    vision of UP1 in revolutionizing the blockchain space.
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
                    
                    <ImageBox
                      image={up1}
                      changeClass="image-box-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">UP1 token</h2>
                  <p className="m-0 lh-base">
                    The UP1 Token is the native cryptocurrency of our platform,
                    designed to facilitate transactions, reward network
                    participation, and enable governance. As a utility token, it
                    plays a crucial role in the operation of Automated Market
                    Makers, staking, and payment of transaction fees. The UP1
                    Token is built with an emphasis on stability and
                    scalability, ensuring a seamless and efficient user
                    experience. It also empowers token holders with governance
                    rights, allowing them to vote on key decisions and
                    contribute to the development of the UP1 ecosystem.
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
                  <h2 className="title">Automated Market Makers</h2>
                  <p className="m-0 lh-base">
                    UP1 introduces a cutting-edge approach to trading with its
                    Automated Market Makers. By leveraging smart contract
                    technology, our AMMs provide a decentralized and transparent
                    trading environment. This system eliminates the need for
                    traditional order books, offering liquidity and price
                    discovery directly on the blockchain. Our AMMs are designed
                    to optimize efficiency and minimize slippage, providing
                    users with a reliable and user-friendly trading experience.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="d-flex col-4 flex-column">
                  <img
                    src={amm1}
                    changeClass="image-box-1"
                    alt="decentral"
                  />
                  <span className="text-center">First</span>
                </div>
                <div className="d-flex col-4 flex-column">
                  <img
                    src={amm2}
                    changeClass="image-box-1"
                    alt="decentral"
                  />
                  <span className="text-center">Second</span>
                </div>
                <div className="d-flex col-4 flex-column">
                  <img
                    src={amm3}
                    changeClass="image-box-1"
                    alt="decentral"
                  />
                  <span className="text-center">Third</span>
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
                    <ImageBox
                      image={security}
                      changeClass="image-box-1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Security</h2>
                  <p className="m-0 lh-base">
                    Foundation of our entire blockchain ecosystem. We have
                    engineered our platform with the highest security standards
                    to safeguard user data and assets. Our multi-layered
                    security architecture includes advanced encryption, rigorous
                    smart contract auditing, and continuous network monitoring
                    to prevent unauthorized access and detect potential threats.
                    We are dedicated to maintaining a secure environment,
                    incorporating both traditional cybersecurity measures and
                    innovative blockchain-specific defenses. With UP1, users and
                    developers can operate with the confidence that their
                    transactions and applications are protected in a
                    state-of-the-art secure blockchain network.
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
                  <h2 className="title">Decentralized Governance</h2>
                  <p className="m-0 lh-base">
                    Decentralized Governance is the cornerstone of UP1's
                    commitment to a democratic and transparent ecosystem. We
                    believe that the future of blockchain lies in empowering our
                    community to have a direct impact on the protocol's
                    development and direction. Our governance model is designed
                    to be inclusive, allowing UP1 token holders to propose,
                    vote, and implement changes to the network. This approach
                    ensures that decisions are made in the best interest of the
                    community, fostering an environment of collaboration and
                    mutual respect. Decentralized Governance at UP1 is not just
                    about giving a voice to the community; it's about building a
                    blockchain protocol that truly reflects the collective
                    wisdom and vision of its users.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70 justify-content-center">
                    <ImageBox
                      image={security}
                      changeClass="image-box-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="bg-shape4" src={Shape3} alt="" />
        </section>
        <section className="content-inner about-sec bg-light">
          <div className="container">
            <div className="about-bx2 style-1 align-items-center">
              <div className="about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title text-center">Roadmap</h2>
                  <p className="m-0 lh-base">
                    Explain how blockchain ensures transparency, security, and
                    fairness in prediction outcomes. Highlight the advantages of
                    decentralized prediction markets.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="dz-media">
                  <div className="row m-b70">
                    <img
                      src={roadmap1}
                      className="col-4"
                      changeClass="image-box-1"
                      alt="decentral"
                    />
                    <img
                      src={roadmap2}
                      className="col-4"
                      changeClass="image-box-2"
                      alt="decentral"
                    />
                    <img
                      src={roadmap3}
                      className="col-4"
                      changeClass="image-box-1"
                      alt="decentral"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Protocol;
