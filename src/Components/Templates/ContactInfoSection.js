import React from "react";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import styles from "./ContactInfoSection.module.css";
const ContactInfoSection = () => {
  return (
    <div className={styles.container}>
      <ApearAnimation delayTime={0} duration={2000}>
        <h1>hi</h1>
      </ApearAnimation>
    </div>
  );
};

export default ContactInfoSection;
