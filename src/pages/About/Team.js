import React, { useState } from "react";
import photo1 from "./../../assets/images/avatar/paul.jpg";
import photo2 from "./../../assets/images/avatar/ciprian.png";
import photo3 from "./../../assets/images/avatar/kelly.jpg";
import photo4 from "./../../assets/images/avatar/leandro.jpg";
import photo5 from "./../../assets/images/avatar/carmen.jpg";
import chole from "./../../assets/images/avatar/chloe.jpg";
const portfolios = [
  {
    name: "Chloe Marinescu",
    role: "CEO",
    photo: chole,
    linkedin: "",
    description: ""
  },
  {
    name: "Paul Marinescu",
    role: "Advisor",
    photo: photo1,
    linkedin: "https://www.linkedin.com/in/paul-marinescu/",
    description:
      "",
  },
  {
    name: "Leandro Macarian",
    role: "CFO",
    photo: photo4,
    linkedin: "https://www.linkedin.com/in/leandro-marcarian-47867023/",
    description: ""
  },
  // {
  //   name: "Kelly Zhang",
  //   role: "Full Stack Engineer",
  //   photo: photo3, 
  //   linkedin: "https://www.linkedin.com/in/kelly-zhang-7627542a2/",
  //   description:
  //     "",
  // },
  // {
  //   name: "Carmen",
  //   role: "Marketing Specialist",
  //   photo: photo5,
  //   linkedin: "https://www.linkedin.com/in/carmenpascalau/",
  //   description: ""
  // },
  // {
  //   name: "Ciprian Filip",
  //   role: "Advisor",
  //   photo: photo2,
  //   linkedin: "https://www.linkedin.com/in/ciprianfilip/",
  //   description:
  //     "",
  // }
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
                  href={data.linkedin}
                  target="_blank"
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
