import React, { useState } from "react";
import NeptunSVG from "../Atoms/ReactSVG/NeptunSVG";
import styles from "./Planets.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import {neptuneText} from "../Atoms/Texts/TextAboutMeSection"

const Neptun = () => {
  const [clicked, setClicked] = useState(false);
  const changeClickedState = () => {
    setClicked((p) => !p);
  };
  return (
    <div>
      <NeptunSVG clicked={clicked} changeClicked={changeClickedState} />
      {clicked && (
        <ApearAnimation delayTime={10} duration={5000}>
          <div className={styles.textContainer}>
            <p className={styles.text}>{neptuneText}</p>
          </div>
        </ApearAnimation>
      )}
    </div>
  );
};

export default Neptun;