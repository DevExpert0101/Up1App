import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo1 from "./../../assets/images/partnership/FundshingLOGNEW.jpg";
import photo2 from "./../../assets/images/partnership/tesla.png";
import photo3 from "./../../assets/images/partnership/vote.png";

const pricingBlog = [
  {
    price: "11",
    title: "Lite",
    title2: "Life-includes:",
    photo: photo1,
    description: "CEO & Founder",
  },
  {
    price: "21",
    title: "Pro",
    title2: "Everythings in Lite, Plus",
    photo: photo2,
    description: "CTO",
  },
  {
    price: "32",
    title: "Ultimate",
    title2: "Everythings in Lite",
    photo: photo3,
    description: "Developer",
  },
];

const Partners = () => {
  const [hovered, setHovered] = useState("0");

  return (
    <>
      {pricingBlog.map((data, index) => (
        <div className="col-xl-2 col-lg-3 col-md-3 m-b30" key={index}>
          <div
            className={`pricingtable-wrapper box-hover style-1 ${
              index === hovered ? "active" : ""
            }`}
            onMouseEnter={() => {
              setHovered(index);
            }}
          >
            <div className="pricingtable-inner">
              <img src={data.photo} style={{ width: "-webkit-fill-available"}}></img>
              {/* <div className="mt-3 align-items-center"><span>{data.description}</span></div>               */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Partners;
