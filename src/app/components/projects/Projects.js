"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./Projects.module.scss";
import ProjectsBlock from "./projectsBlock/ProjectsBlock";
import { homeProjects } from "../../Data"; 
import Image from "next/image";

export default function Projects({ currentSection, setCurrentSection }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && setCurrentSection) setCurrentSection(entry.target.id);
  }, [inView]);

  useEffect(() => {
    if (currentSection === "projects" && !inView && entry?.target) {
      window.scrollTo({
        top: entry.target.offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className={styles.projectsGrid}>
        {homeProjects.map((project) => (
          <ProjectsBlock
            key={project.projectName}
            src={project.src}
            alt={project.alt}
            projectName={project.projectName}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            frontendLink={project.frontendLink}
            backendLink={project.backendLink}
          />
        ))}
      </div>

      <div className={styles.seeMore}>
        <Link href="/projects">See more</Link>
        <Image
          src="/icons/arrow-right.png"
          alt="arrow right icon"
          width={25}
          height={11}
        />
      </div>
    </section>
  );
}
