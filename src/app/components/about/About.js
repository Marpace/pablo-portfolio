"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.scss";

export default function About({ currentSection, setCurrentSection }) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  // We must safely access window in Next.js
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.screen.width > 1440);
    }
  }, []);

  const [hovered, setHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      const section = Number(
        getComputedStyle(sectionRef.current).height.replace("px", "")
      );
      const title = Number(
        getComputedStyle(titleRef.current).height.replace("px", "")
      );
      setSectionHeight(section - title);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      setCurrentSection(entry.target.id);
      setTimeout(() => setShowCursor(true), 3000);
    }
  }, [inView]);

  useEffect(() => {
    if (currentSection === "about" && !inView && entry?.target) {
      window.scrollTo({
        top: entry.target.offsetTop - ((window.innerHeight - sectionHeight) / 2),
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentSection]);

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>
        Full Transparency
      </h2>
      <div id="about" className={styles.textContainer} ref={ref}>
        <p
          className={`${styles.text} ${
            inView && !isDesktop ? styles.visibleText : ""
          }`}
        >
            Programming has become my passion. <br></br>
            I love solving problems, debugging code, and finding creative solutions that make ideas come to life. Over the past four years, I’ve grown as a self-taught developer by taking on freelance projects and constantly learning new technologies. From building static and dynamic websites to exploring modern frameworks, libraries, and backend technologies. I also embrace AI as a powerful tool to accelerate my coding process, enhance productivity, and inspire new ideas.
        </p>
        <div
          onMouseEnter={() => setHovered(true)}
          className={`${styles.glassBlur} ${
            inView && !isDesktop ? styles.seeThrough : ""
          }`}
        ></div>
        <img
          className={`${styles.cursorGreen} ${
            hovered || !showCursor ? styles.invisible : styles.cursorMove
          }`}
          src="/icons/cursor.svg"
          alt="moving green cursor"
        />
      </div>
    </section>
  );
}
