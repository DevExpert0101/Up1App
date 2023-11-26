import React from "react";

import PageLayout from "../../layouts/PageLayout";

//Images
import Shape1 from "../../assets/images/home-banner/shape1.png";
import Shape3 from "./../../assets/images/home-banner/shape3.png";


import infrastructure1 from "./../../assets/images/features/infrastructure1.png";
import infrastructure2 from "./../../assets/images/features/infrastructure2.png";
import integration1 from "./../../assets/images/features/integration1.png";
import integration2 from "./../../assets/images/features/integration2.png";
import prediction1 from "./../../assets/images/features/prediction1.png";
import prediction2 from "./../../assets/images/features/prediction2.png";
import accessibility1 from "./../../assets/images/features/accessibility1.png";
import accessibility2 from "./../../assets/images/features/accessibility2.png";

const ImageBox = ({ image, changeClass }) => {
  return (
    <div className="col-6">
      <div className={`image-box ${changeClass}`}>
        <img src={image} alt="" style={{ visibility: "visible!important" }} />
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
                    <ImageBox
                      image={infrastructure1}
                      changeClass="image-box-1"
                    />
                    <ImageBox
                      image={infrastructure2}
                      changeClass="image-box-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Infrastructure</h2>
                  <p className="m-0 lh-base">
                    At UP1, we are redefining the foundation of blockchain
                    technology. Our state-of-the-art infrastructure is built to
                    provide unparalleled efficiency, security, and scalability.
                    By leveraging advanced consensus mechanisms and a robust
                    architectural framework, UP1 ensures fast, secure, and
                    seamless transactions. Our infrastructure is designed to
                    support high transaction throughput while maintaining low
                    latency, making it ideal for a wide range of applications,
                    from financial services to supply chain management. With
                    UP1, we are setting new standards for blockchain
                    infrastructure, ensuring that our platform is not only
                    powerful but also eco-friendly and sustainable.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Prediction Markets</h2>
                  <p className="m-0 lh-base">
                  UP1 is at the forefront of transforming prediction markets through blockchain technology. Our platform provides a transparent, decentralized, and tamper-proof environment for users to speculate on the outcome of events ranging from financial markets to sports and elections. By harnessing the power of crowd wisdom and blockchain, UP1's prediction markets offer a unique opportunity for market forecasting and risk assessment. Participants benefit from a global pool of knowledge and insights, ensuring fair and accurate market predictions. UP1 is dedicated to bringing a new level of transparency and efficiency to prediction markets, making them more accessible and reliable than ever before.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox image={prediction1} changeClass="image-box-1" />
                    <ImageBox image={prediction2} changeClass="image-box-2" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox
                      image={integration1}
                      changeClass="image-box-1"
                    />
                    <ImageBox
                      image={integration2}
                      changeClass="image-box-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Integration</h2>
                  <p className="m-0 lh-base">
                  Integration is at the heart of UP1's philosophy. We understand the importance of interoperability in today’s fragmented blockchain landscape. That's why UP1 is designed to seamlessly integrate with a multitude of systems, platforms, and applications. Our comprehensive APIs and developer tools make it easy for businesses and developers to adopt and build on the UP1 protocol. Whether it's integrating with existing financial systems, supply chains, or emerging technologies like IoT and AI, UP1's flexible integration capabilities enable a more connected and efficient blockchain ecosystem. With UP1, the potential for innovation is limitless.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 about-content ps-lg-5 m-b100">
                <div className="section-head">
                  <h2 className="title">Accessibility </h2>
                  <p className="m-0 lh-base">
                  Accessibility is a cornerstone of UP1. We are committed to making blockchain technology accessible to everyone, regardless of their technical background or geographic location. Our user-friendly interface, educational resources, and community support are designed to lower the entry barrier to blockchain technology. UP1’s multilingual support and inclusive design ensure that our platform caters to a global audience. We also focus on mobile accessibility, recognizing the importance of smartphones in today's digital age. At UP1, we believe in empowering users by providing them with the tools and knowledge to explore the full potential of blockchain technology.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end m-b70">
                    <ImageBox image={accessibility1} changeClass="image-box-1" />
                    <ImageBox image={accessibility2} changeClass="image-box-2" />
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
