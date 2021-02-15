import React from "react";
import styles from "./LandingSection.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import WorldSVG from "../Atoms/ReactSVG/WorldSVG";

const LandingSection = () => {
  return (
    <ApearAnimation delayTime={500} duration={2000}>
      <WorldSVG />
      <ApearAnimation delayTime={1500} duration={2000}>
        <h1 className={styles.title} >
          Welcome to my universe
        </h1>
      </ApearAnimation>
    </ApearAnimation>
  );
};

export default LandingSection;
