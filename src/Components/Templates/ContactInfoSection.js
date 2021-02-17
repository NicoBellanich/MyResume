import React from "react";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import styles from "./ContactInfoSection.module.css";
import { FaLinkedin as LinkedInIcon } from 'react-icons/fa';
const ContactInfoSection = () => {
  return (
    <div className={styles.container}>
      <ApearAnimation delayTime={0} duration={2000}>
        <h1 className={styles.title}>Contact</h1>
        <p>
            <a href="https://www.linkedin.com/in/nicolasdariobellanich70491/">Nico Bellanich</a>
            
          <LinkedInIcon />
        </p>
      </ApearAnimation>
    </div>
  );
};

export default ContactInfoSection;
