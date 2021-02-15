import React from "react";
import img from "../../../Images/BigWorld.svg"
import styles from "./WorldSVG.module.css"

const WorldSVG = () => {
  return <img className={styles.shortImage} src={img} alt="World image"></img>;
};

export default WorldSVG
