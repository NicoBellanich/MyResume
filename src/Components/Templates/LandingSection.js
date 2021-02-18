import React, { useState } from "react";
import styles from "./LandingSection.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import WorldSVG from "../Atoms/ReactSVG/WorldSVG";
import LittleWorldsSVG from "../Atoms/ReactSVG/LittleWorldsSVG";
import {introduction, sateliteIntro} from "../Atoms/Texts/TextsLandingSection";
import Parallax from "react-rellax";
import LandingSateliteSVG from "../Atoms/ReactSVG/LandingSateliteSVG";
import ContactInfoSection from "./ContactInfoSection";
import {FaSpaceShuttle as RocketIcon} from "react-icons/fa"

const LandingSection = () => {
  const [sateliteClicked, setSateliteClicked] = useState(false);
  const handleSateliteClick = () => {
    setSateliteClicked((p) => !p);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Parallax speed={-5}>
          <ApearAnimation delayTime={1500} duration={2000}>
            <h1 className={styles.title}>Welcome to my universe</h1>
            <p className={styles.paragraphs}>{introduction}</p>
            <p className={styles.paragraphsSateliteIntro}>{sateliteIntro}</p>
            <div style={{ margin: "0" }} onClick={handleSateliteClick}>
              <LandingSateliteSVG />
            </div>
          </ApearAnimation>
          {sateliteClicked && <ContactInfoSection />}
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
          <ApearAnimation delayTime={7000} duration={2000}>
            <p className={styles.rocketText}>Scroll down for more<RocketIcon className={styles.rocket} /></p>
          </ApearAnimation>
        </Parallax>
      </div>
    </div>
  );
};

export default LandingSection;
