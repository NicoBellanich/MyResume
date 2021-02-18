import React from "react";
import ApearAnimation from "../../Components/Organisms/Animations/Apear";
import styles from "./ContactInfoSection.module.css";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaGithub as GithubIcon } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <div className={styles.container}>
      <ApearAnimation delayTime={0} duration={2000}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.rowContainer}>
          <p>
            <LinkedInIcon className={styles.icon} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://www.linkedin.com/in/nicolasdariobellanich70491/"
            >
              Nico Bellanich
            </a>
          </p>
        </div>
        <div className={styles.rowContainer}>
          <p>
            <EmailIcon className={styles.icon} />
            nicolasbellanich@gmail.com
          </p>
        </div>
        <div className={styles.rowContainer}>
          <p>
            <GithubIcon className={styles.icon} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              href="https://github.com/NicoBellanich"
            >
              My repo
            </a>
          </p>
        </div>
      </ApearAnimation>
    </div>
  );
};

export default ContactInfoSection;
