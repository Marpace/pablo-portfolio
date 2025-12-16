"use client";

import { useEffect, useState } from "react";
import ProjectsBlock from "../components/projects/projectsPageBlock/ProjectsPageBlock";
import {projects} from "../Data"
import styles from "./page.module.scss";

function ProjectsPage() {

  const [modalImage, setModalImage] = useState({size: "", src: ""});

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <main className={styles.projectsMain}>
      {projects.map(project => (
        <ProjectsBlock 
          key={project.projectTitle}
          desktopSrc={project.desktopSrc}
          mobileSrc={project.mobileSrc}
          projectTitle={project.projectTitle}
          projectDescription={project.projectDescription}
          builtWith={project.builtWith}
          projectLive={project.projectLive}
          projectRepo={project.projectRepo}
          frontendRepo={project.frontendRepo}
          backendRepo={project.backendRepo}
          projectDesign={project.projectDesign}
          setModalImage={setModalImage}
        />
      ))}
    </main>
  )
}


export default ProjectsPage;