"use client";

import { useEffect, useState } from "react";
import ProjectsPageBlock from "../components/projects/projectsPageBlock/ProjectsPageBlock";
import {projects} from "../Data"
import styles from "./page.module.scss";
import ProjectsPageModal from "../components/projects/projectsPageModal/ProjectsPageModal";

function ProjectsPage() {

  const [modalImage, setModalImage] = useState({size: "", src: ""});

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div className={styles.projectsMain}>
      {projects.map(project => (
        <ProjectsPageBlock 
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

      <button className={styles.button} onClick={() => window.location.href = '/'}>Back to main page</button>
    </div>
  )
}


export default ProjectsPage;