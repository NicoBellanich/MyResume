import React from "react";
import styles from "./LandingSection.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import WorldSVG from "../Atoms/ReactSVG/WorldSVG";
import textsLandingSection from "../Atoms/Texts/TextsLandingSection"
const LandingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <ApearAnimation delayTime={1500} duration={2000}>
          <h1 className={styles.title}>Welcome to my universe</h1>
          <p>{textsLandingSection}</p>
        </ApearAnimation>
      </div>
      <div className={styles.rightSide}>
        <ApearAnimation delayTime={500} duration={2000}>
          <WorldSVG />
        </ApearAnimation>
      </div>
    </div>
  );
};

export default LandingSection;
