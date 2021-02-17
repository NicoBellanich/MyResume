import React from "react";
import styles from "./AboutMeSection.module.css";
import MarsSVG from "../Atoms/ReactSVG/MarsSVG";
import NeptunSVG from "../Atoms/ReactSVG/NeptunSVG";
import SaturnSVG from "../Atoms/ReactSVG/SaturnSVG";
const AboutMeSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This is where I worked on</h1>
      <div className={styles.grid}>
        <MarsSVG />
        <NeptunSVG />
        <SaturnSVG />
      </div>
    </div>
  );
};

export default AboutMeSection;
