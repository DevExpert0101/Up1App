import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

//components
import OneStop from "./OneStop";

//images
import baner1 from "./../../assets/images/home-banner/img1.png";
import baner2 from "./../../assets/images/home-banner/img2.png";



function Community() {

  const nav = useNavigate();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="page-content">
        <div className="main-bnr style-1" style={{height: 'max-content'}} >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <h1 className="">
                  Welcome to UP1
                </h1>
                <p className="text text-primary ">
                    Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.
                </p>
                <Link
                  to={"/about-us"}
                  className="btn space-lg btn-gradient btn-shadow btn-primary "
                >
                  Explore UP1
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
            <div className="row mt-5">
                <OneStop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Community;
