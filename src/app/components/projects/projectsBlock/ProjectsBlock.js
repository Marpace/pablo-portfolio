"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsBlock.module.scss";

export default function ProjectsBlock({
  src,
  alt,
  projectName,
  liveLink,
  repoLink,
  frontendLink,
  backendLink,
}) {
  return (
    <div className={styles.block}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt || projectName}
          width={500}
          height={300}
          className={styles.screenshot}
        />
        <div className={styles.projectName}>{projectName}</div>
      </div>

      <div className={styles.links}>
        {liveLink && (
          <Link href={liveLink} target="_blank" className={styles.link}>
            Live
          </Link>
        )}
        {repoLink && (
          <Link href={repoLink} target="_blank" className={styles.link}>
            Repo
          </Link>
        )}
        {frontendLink && (
          <Link href={frontendLink} target="_blank" className={styles.link}>
            Frontend
          </Link>
        )}
        {backendLink && (
          <Link href={backendLink} target="_blank" className={styles.link}>
            Backend
          </Link>
        )}
      </div>
    </div>
  );
}
