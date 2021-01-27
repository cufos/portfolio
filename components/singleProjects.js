import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaGithub, FaShareSquare } from "react-icons/fa";

export default function SingleProjects({
  name,
  image,
  desc,
  stack,
  git,
  link,
}) {
  return (
    <div className={styles.projects__wraper}>
      <div className={styles.projects__image}>
        <Image layout="fill" src={`/${image}`} alt="project image" />
      </div>
      <article className={styles.projects__content}>
        <h4>{name}</h4>
        <p>{desc}</p>
        <div className={styles.projects__buttons}>
          {stack?.map((item, index) => (
            <button
              key={`${item}-${index}`}
              className={styles.projects__button}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles.projects__icons}>
          <a href={git} target="_blank" rel="noopener noreferer">
            <FaGithub />
          </a>
          <a href={link} target="_blank" rel="noopener noreferer">
            <FaShareSquare />
          </a>
        </div>
      </article>
    </div>
  );
}
