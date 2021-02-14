import React from "react";
import img from "../Images/me.jpg"
const Landing = () => {
  return (
    <>
      <img style={{height:"59vh",borderRadius:"30px"}}src={img} alt="hi"></img>
      <h1 style={{ fontWeight: "400" }}>
        Hello I´m Nicolas and I´d like you to know my work!
      </h1>
      <h2 style={{ fontWeight: "400" }}>click to continue</h2>
    </>
  );
};

export default Landing;
