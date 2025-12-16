import styles from "./ProjectsPageBlock.module.scss";

export default function ProjectsBlock(props) {


  return (
    <div className={styles.project}>
        <img className={styles.desktopScreenshot} src={props.desktopSrc} alt="project thumbnail"></img>
        <img className={styles.mobileScreenshot} src={props.mobileSrc} alt="project thumbnail"></img>

        <div className={styles.text}>
            <p className={styles.title}>{props.projectTitle}</p>
            <p className={styles.description}>{props.projectDescription}</p>
            <p className={styles.builtWith}>{`Built with: ${props.builtWith}`}</p> 
            <div className={styles.links}>
                <a className={`${styles.link} ${props.projectLive === "n/a" ? "hidden" : ""}`} href={props.projectLive}>Live</a>
                <a className={`${styles.link} ${props.projectRepo === "" ? "hidden" : ""}`} href={props.projectRepo}>Repo</a>
                <a className={`${styles.link} ${props.frontendRepo === "" ? "hidden" : ""}`} href={props.frontendRepo}>Frontend</a>
                <a className={`${styles.link} ${props.backendRepo === "" ? "hidden" : ""}`} href={props.backendRepo}>Backend</a>
                <span className={`${styles.link} ${props.projectDesign === "n/a" ? "hidden" : ""}`}>Design</span>
            </div> 
        </div> 
    </div>
  )
}
