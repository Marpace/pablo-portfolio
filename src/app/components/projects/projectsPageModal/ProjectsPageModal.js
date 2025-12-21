import styles from './ProjectsPageModal.module.scss'

export default function ProjectsPageModal({modalOpen, setModalOpen, desktopSource, mobileSource}) {
  return (
    <div className={`${styles.modal} ${modalOpen ? "" : "hidden"}`}>
      <div className={styles.backdrop} onClick={() => setModalOpen(false)}></div>
      <div className={styles.imageContainer}>
        <img className={styles.desktopImage} src={desktopSource}></img>
        <img className={styles.mobileImage} src={mobileSource}></img>
      </div>
    </div>
  )
}