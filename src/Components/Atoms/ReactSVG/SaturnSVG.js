import React from "react";
import styles from "./Planets.module.css";

const SaturnSVG = () => {
  return (
    <svg
      className={styles.saturn}
      viewBox="0 0 58 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Saturn">
        <circle id="Ellipse 14" cx="31" cy="27" r="24.5" stroke="white" />
        <path
          id="Vector 1"
          d="M54 37C56 38.5 55.9522 39.6321 55.939 41.5506C55.9212 44.1483 53.3339 44.1881 51.4175 43.6638C47.1194 42.4879 42.9884 40.5365 38.8969 38.7672C32.8711 36.1616 26.8244 33.6239 20.8077 30.9954C16.0069 28.8981 10.9973 25.9612 7.44798 22.0619C6.00197 20.4733 4.79281 18.6861 3.34259 17.117C2.48143 16.1852 1.79871 15.0109 1.51051 13.7626C1.09617 11.9679 2.27166 10.9408 4.0058 10.9782C5.50144 11.0105 8.26493 13.2282 9.5 14"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 2"
          d="M54.5 20C38.4723 13.5377 29.612 9.9097 25 3"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          id="Vector 3"
          d="M55 28C34.8975 19.6371 23.7845 14.942 18 6"
          stroke="white"
          stroke-width="0.5"
        />
        <path
          id="Vector 4"
          d="M42 49C22.4408 41.0172 11.6282 36.5355 6 28"
          stroke="white"
          stroke-width="0.5"
        />
      </g>
    </svg>
  );
};

export default SaturnSVG;
