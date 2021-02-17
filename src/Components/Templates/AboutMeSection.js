import React from "react";
import styles from "./AboutMeSection.module.css";
import Mars from "../Molecules/Mars";
import Neptun from "../Molecules/Neptun";
import Saturn from "../Molecules/Saturn";
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
          <Saturn />
        </Parallax>
      </div>
    </div>
  );
};

export default AboutMeSection;
