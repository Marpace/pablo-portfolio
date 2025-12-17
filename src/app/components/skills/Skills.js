"use client";
import Image from "next/image";
import styles from "./Skills.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Skills({ currentSection, setCurrentSection }) {

   const { ref, inView, entry } = useInView({
      threshold: 0.5,
    });
    
  
    useEffect(() => {
      if (inView && setCurrentSection) setCurrentSection(entry.target.id);
    }, [inView]);
  
    useEffect(() => {
      console.log(entry)
      if (currentSection === "skills" && !inView && entry?.target) {
        window.scrollTo({
          top: entry.target.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    }, [currentSection]);


  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Sass",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "WebSockets",
    "React",
    "Next.js",
    "Vercel",
    "GitHub",
    "Git",
    "Firebase",
    "REST APIs",
    "JSON",
    "Heroku"
  ];

  const logosSrc = [
    "css-3.png",
    "express-js.png",
    "firebase.png",
    "git.png",
    "figma.png",
    "github.png",
    "heroku.jpg",
    "html-5.png",
    "js.png",
    "mongodb-icon.png",
    "nextJS.png",
    "nodejs.png",
    "react-1.svg",
    "sass.png",
    "Socket-io.svg",
    "vercel.svg"
  ]

  // Duplicate the list to create an infinite seamless scroll
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills];
  const repeatedLogos = [...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc, ...logosSrc];

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <h2 className="section-title">Experience with</h2>
      <div className={styles.scroller}>
        <div className={styles.scrollerContent}>
          {repeatedSkills.map((skill, i) => (
            <span key={i} className={styles.skillItem}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.scroller}>
        <div className={styles.scrollerContentLogos}>
          {repeatedLogos.map((logo, i) => (
            <Image
              key={i}
              src={`/logos/${logo}`}
              alt={logo.split('.')[0]}
              width={50}
              height={50}
              className={styles.logoItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
