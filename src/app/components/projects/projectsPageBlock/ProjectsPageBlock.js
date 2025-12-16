import styles from "./ProjectsPageBlock.module.scss";

function ProjectsBlock(props) {

  const desktop = window.screen.width > 1440 ? true : false

  function handleRepoClick(e) {
    if(props.projectRepo === "") e.preventDefault();
  }

  function handleImageClick(e) {
    if(!desktop) return;
    props.setModalImage({size: e.target.id, src: e.target.src})
  }

  return (
    <div className={styles.project}>
        
        <img className={styles.desktopScreenshot} src={props.desktopSrc} alt="project thumbnail"></img>
        <img className={styles.mobileScreenshot} src={props.mobileSrc} alt="project thumbnail"></img>
        <div className={styles.text}>
            <p className={styles.title}>{props.projectTitle}</p>
            <p className={styles.description}>{props.projectDescription}</p>
            <p className={styles.builtWith}>{`Built with: ${props.builtWith}`}</p>
            <div className={styles.links}>
                <a className={`${styles.link} ${props.projectLive === "n/a" ? styles.hidden : ""}`} href={props.projectLive}>Live</a>
                <span className={props.repo === "n/a" ? styles.hidden : styles.linkSeparator}>|</span>
                <div className={styles.repoLinks}>
                  <a 
                    onClick={handleRepoClick}
                    className={`${styles.link} ${styles.repoLink} ${props.projectRepo === "n/a" ? styles.hidden : ""}`} 
                    href={props.projectRepo}>Repo</a>
                  <a className={`${styles.link} ${styles.invisibleLink} ${props.projectRepo === "" ? "" : styles.hidden}`} href={props.frontendRepo}>Frontend</a>
                  <a className={`${styles.link} ${styles.invisibleLink} ${props.projectRepo === "" ? "" : styles.hidden}`} href={props.backendRepo}>Backend</a>
                </div>
                <span className={props.projectDesign === "n/a" ? styles.hidden : styles.linkSeparator}>|</span>
                <span className={`${styles.link} ${props.projectDesign === "n/a" ? styles.hidden : ""}`}>Design</span>
            </div> 
        </div> 
    </div>
  )
}

export default ProjectsBlock;