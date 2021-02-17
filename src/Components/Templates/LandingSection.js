import React from "react";
import styles from "./LandingSection.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import WorldSVG from "../Atoms/ReactSVG/WorldSVG";
import LittleWorldsSVG from "../Atoms/ReactSVG/LittleWorldsSVG";
import textsLandingSection from "../Atoms/Texts/TextsLandingSection";
import Parallax from "react-rellax";
const LandingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Parallax speed={-5}>
          <ApearAnimation delayTime={1500} duration={2000}>
            <h1 className={styles.title}>Welcome to my universe</h1>
            <p className={styles.paragraphs}>{textsLandingSection}</p>
          </ApearAnimation>
        </Parallax>
        <Parallax speed={-1}>
          <ApearAnimation delayTime={1500} duration={2000}>
            <LittleWorldsSVG />
          </ApearAnimation>
        </Parallax>
      </div>
      <div className={styles.rightSide}>
        <Parallax speed={-8}>
          <ApearAnimation delayTime={0} duration={2000}>
            <WorldSVG />
          </ApearAnimation>
        </Parallax>
      </div>
    </div>
  );
};

export default LandingSection;