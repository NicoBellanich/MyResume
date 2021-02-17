import React from "react";
import styles from "./Planets.module.css";

const MarsSVG = ({ clicked, changeClicked }) => {
  return (
    <svg
      onClick={changeClicked}
      className={clicked ? styles.marsClicked : styles.mars}
      viewBox="0 0 50 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Mars">
        <circle id="Ellipse 10" cx="25" cy="32" r="24.5" stroke="white" />
        <circle id="Ellipse 11" cx="36" cy="22" r="4.5" stroke="white" />
        <circle id="Ellipse 12" cx="29.5" cy="39.5" r="7" stroke="white" />
        <circle id="Satelite" cx="38.5" cy="2.5" r="2" stroke="white" className={styles.marsSatelite} />
        <rect
          id="Rectangle 2"
          x="1"
          y="24"
          width="11"
          height="1"
          rx="0.5"
          fill="white"
        />
        <rect
          id="Rectangle 3"
          x="1"
          y="27"
          width="15"
          height="1"
          rx="0.5"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default MarsSVG;
