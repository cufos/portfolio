import React from "react";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contact__wraper}>
        <a
          href="mailto:yunior.varon@yahoo.com"
          className={styles.contact__button}
        >
          Contact me
        </a>
        <a
          target="_blank"
          rel="noopener noreferer"
          className={styles.contact__button}
          href='my-cv.pdf'
        >
          Download CV
        </a>
        <a
          target="_blank"
          rel="noopener noreferer"
          className={styles.contact__button}
          href="https://www.linkedin.com/in/junior-varon-557347205/"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
