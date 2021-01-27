import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about__avatar}>
        <Image layout="fill" src="/IMG_0131.JPG" alt="avatar image" />
      </div>
      <article className={styles.about__article}>
        <p>
          I'm Francis Yunior a self-tught front-end developer, with a great
          passion for learning. I specialize in front-end design and love fine
          tunnig a great layout. On a personal level i'm highly motivated,
          self-driven, hard-working, fast learner and constantly seeking to
          improve my skills, with the ability to adapt to any type of team
          enviarioment.
        </p>
        <p>
          Apart from web development and write codes, my hobbies includes
          training kick boxing, play football, great music and movies.
        </p>
      </article>
    </section>
  );
}
