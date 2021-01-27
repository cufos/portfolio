import React from "react";
import SingleProjects from "./singleProjects";
import styles from "../styles/Home.module.css";
import projects from "../constants/allProjects";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h3>Personal Projects</h3>
      {projects?.map((project) => (
        <SingleProjects
          key={project.id}
          stack={project.stack}
          name={project.name}
          desc={project.desc}
          git={project.git}
          link={project.link}
          image={project.image}
        />
      ))}
    </section>
  );
}
