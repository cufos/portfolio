import React from "react";
import {
  SiJavascript,
  SiCss3,
  SiReact,
  SiRedux,
  SiNextDotJs,
  SiTypescript,
  SiGatsby,
  SiHtml5,
  SiPostgresql,
} from "react-icons/si";

import styles from "../styles/Home.module.css";

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.skills__wraper}>
        <h3>Skills</h3>

        <div className={styles.skills__frontend}>
          <p>
            I love the fron-tend and in this amazing journey i've worked with
            these tecnologies, for most of my personal projects.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>NEXT JS</li>
            <li>GATSBY JS</li>
            <li>REDUX</li>
            <li>GIT</li>
            <li>GRAPHQL</li>
          </ul>
        </div>
        <div className={styles.skills__frontend}>
          <p>
            I've worked with these tecnologies, creating some basics rest api
            and crud tasks
          </p>
          <ul>
            <li>NODE JS</li>
            <li>EXPRESS JS</li>
            <li>MONGO DB</li>
            <li>POSTGRES SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
