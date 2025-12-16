"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.scss";

export default function About({ currentSection, setCurrentSection }) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const [hovered, setHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (inView) {
      setCurrentSection(entry.target.id);
      setTimeout(() => setShowCursor(true), 3000);
    }
  }, [inView]);


  useEffect(() => {
    if (currentSection === "about" && !inView && entry?.target) {
      window.scrollTo({
        top: entry.target.offsetTop,
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <h2 className="section-title">
        Full Transparency
      </h2>
      <div id="about" className={styles.textContainer}>
        <p
          className={`${styles.text} ${
            inView ? styles.visibleText : ""
          }`}
        >
            Programming has become my passion. <br></br>
            I love solving problems, debugging code, and finding creative solutions that make ideas come to life. Over the past four years, I’ve grown as a self-taught developer by taking on freelance projects and constantly learning new technologies. From building static and dynamic websites to exploring modern frameworks, libraries, and backend technologies. I also embrace AI as a powerful tool to accelerate my coding process, enhance productivity, and inspire new ideas.
        </p>
        <div
          onMouseEnter={() => setHovered(true)}
          className={`${styles.glassBlur} ${
            inView ? styles.seeThrough : ""
          }`}
        ></div>
        <img
          className={`
            ${styles.cursorGreen} 
            ${hovered  ? styles.invisible : ""}
            ${showCursor && !hovered ? styles.cursorMove : ""}`}
          src="/icons/cursor.svg"
          alt="moving green cursor"
        />
      </div>
    </section>
  );
}
