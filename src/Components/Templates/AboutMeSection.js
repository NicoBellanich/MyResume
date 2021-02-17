import React from "react";
import styles from "./AboutMeSection.module.css";
import SaturnSVG from "../Atoms/ReactSVG/SaturnSVG";
import Mars from "../Molecules/Mars";
import Neptun from "../Molecules/Neptun";
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
        <Parallax speed={-1}>
          <Neptun />
        </Parallax>
        <Parallax speed={-1}>
          <SaturnSVG />
        </Parallax>
      </div>
    </div>
  );
};

export default AboutMeSection;
