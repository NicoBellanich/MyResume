import React, { useState } from "react";
import MarsSVG from "../Atoms/ReactSVG/MarsSVG";
import styles from "./Planets.module.css";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import marsText from "../Atoms/Texts/TextAboutMeSection"

const Mars = () => {
  const [clicked, setClicked] = useState(false);
  const changeClickedState = () => {
    setClicked((p) => !p);
  };
  return (
    <div>
      <MarsSVG clicked={clicked} changeClicked={changeClickedState} />
      {clicked && (
        <ApearAnimation delayTime={10} duration={5000}>
          <div className={styles.textContainer}>
            <p className={styles.text}>{marsText}</p>
          </div>
        </ApearAnimation>
      )}
    </div>
  );
};

export default Mars;
