import React from "react";
import styles from "./AboutMeSection.module.css";
import MarsSVG from "../Atoms/ReactSVG/MarsSVG";
import NeptunSVG from "../Atoms/ReactSVG/NeptunSVG";
import SaturnSVG from "../Atoms/ReactSVG/SaturnSVG";
import Mars from "../Molecules/Mars";
import Parallax from "react-rellax";

const AboutMeSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Click a planet to know my work experience
      </h1>
      <div className={styles.grid}>
        <Parallax speed={-1}>
          <Mars />
        </Parallax>
        <NeptunSVG />
        <SaturnSVG />
      </div>
    </div>
  );
};

export default AboutMeSection;
