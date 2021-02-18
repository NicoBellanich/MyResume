import React from "react";
import styles from "./NewGalaxySection.module.css";
import GalaxySVG from "../Atoms/ReactSVG/GalaxySVG"
const NewGalaxySection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>On my free time I explore new Galaxys becouse I love it</h1>
      <GalaxySVG />
    </div>
  );
};

export { NewGalaxySection };
