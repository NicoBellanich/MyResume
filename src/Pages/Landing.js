import React from "react";
import img from "../Images/Worlds.svg"
import ApearAnimation from "../Components/Organisms/Animations/Apear"
const Landing = () => {
  return (
    <>
      <ApearAnimation delayTime={500} duration={2000}>
        <img style={{height:"100vh",borderRadius:"30px"}}src={img} alt="hi"></img>
        <ApearAnimation delayTime={1500} duration={2000}>
          <h1 style={{ fontWeight: "400" , position:"absolute", top:"20px", left:"150px", width:"40%"}}>
            Welcome to my world
          </h1>
        </ApearAnimation>
      </ApearAnimation>
    </>
  );
};

export default Landing;
