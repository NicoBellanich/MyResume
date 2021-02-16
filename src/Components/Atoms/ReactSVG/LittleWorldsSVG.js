import React from "react";
import styles from "./LittleWorldsSVG.module.css";

const LittleWorldsSVG = () => {
  return (
    <svg
      className={styles.image}
      viewBox="0 0 114 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 4">
        <path
          id="Ellipse 6"
          d="M87.0052 77.7815C72.5487 95.2559 49.1613 99.557 34.781 87.6604C20.4007 75.7637 20.2438 51.9845 34.7002 34.5101C49.1567 17.0357 72.5441 12.7346 86.9244 24.6312C101.305 36.5279 101.462 60.307 87.0052 77.7815Z"
          stroke="black"
        />
        <path
          id="Ellipse 11"
          d="M75.9615 66.3273C68.5782 75.252 56.4139 77.2115 48.8041 70.916C41.1943 64.6205 40.84 52.3044 48.2233 43.3798C55.6065 34.4551 67.7709 32.4956 75.3807 38.7911C82.9904 45.0866 83.3448 57.4027 75.9615 66.3273Z"
          stroke="black"
        />
        <circle id="innersatelite" cx="72" cy="72" r="5" fill="#0D0D0D"  className={styles.innerSatelite} />
        <circle
          id="externalsatelite"
          className={styles.externalsatelite}
          cx="7.5"
          cy="7.5"
          r="7.5"
          fill="#0D0D0D"
        />
      </g>
    </svg>
  );
};

export default LittleWorldsSVG;
