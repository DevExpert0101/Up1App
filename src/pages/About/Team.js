import React, { useState } from "react";
import photo1 from "./../../assets/images/avatar/avatar1.jpg";
import photo2 from "./../../assets/images/avatar/avatar2.jpg";
import photo3 from "./../../assets/images/avatar/avatar3.jpg";

const portfolios = [
  {
    name: "Jordan Kim",
    role: "Chief Technology Officer (CTO)",
    photo: photo1,
    description:
      "With a decade of experience in blockchain technology and cybersecurity, Jordan Kim is the technical visionary behind UP1.",
  },
  {
    name: "Carlos Rivera",
    role: "Community Outreach Director",
    photo: photo2,
    description:
      "Carlos Rivera, with his background in communications and public relations, is the driving force behind UP1's community engagement and education initiatives.",
  },
  {
    name: "Aisha Patel",
    role: "Head of Business Development",
    photo: photo3,
    description:
      "Aisha Patel brings a wealth of knowledge in fintech and strategic partnerships to UP1. ",
  },
];

const Team = () => {
  const [hovered, setHovered] = useState("0");

  return (
    <>
      {portfolios.map((data, index) => (
        <div className="col-xl-4 col-lg-6 col-md-6 m-b30" key={index}>
          <div
            className={`pricingtable-wrapper box-hover style-1 ${
              index === hovered ? "active" : ""
            }`}
            style={{height: '100%'}}
            onMouseEnter={() => {
              setHovered(index);
            }}
          >
            <div className="pricingtable-inner" >
              <div style={{ position: "relative" }}>
                <img
                  src={data.photo}
                  style={{ width: "-webkit-fill-available" }}
                  alt="price"
                ></img>
                <a
                  href="https://www.google.com"
                  style={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                    backgroundColor: "white",
                    width: "50px",
                    height: "50px",
                    color: "black",
                    borderRadius: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.4rem",
                  }}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <div className="mt-3 align-items-center d-flex flex-column">
                <h6 style={{
                  color: index === hovered ? "white" : "#1c2e9e"
                }}>
                  {data.name} - {data.role}
                </h6>
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Team;
