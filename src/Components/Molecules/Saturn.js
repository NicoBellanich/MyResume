import React, { useState } from "react";
import SaturnSVG from "../Atoms/ReactSVG/SaturnSVG";
import styles from "./Planets.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import {saturnText} from "../Atoms/Texts/TextAboutMeSection"

const Saturn = () => {
  const [clicked, setClicked] = useState(false);
  const changeClickedState = () => {
    setClicked((p) => !p);
  };
  return (
    <div>
      <SaturnSVG clicked={clicked} changeClicked={changeClickedState} />
      {clicked && (
        <ApearAnimation delayTime={10} duration={5000}>
          <div className={styles.textContainer}>
            <p className={styles.text}>{saturnText}</p>
          </div>
        </ApearAnimation>
      )}
    </div>
  );
};

export default Saturn;