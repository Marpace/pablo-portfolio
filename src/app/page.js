"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

export default function Home() {

  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navigation 
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <Hero
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <About
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <Skills
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <Projects
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </main>
    </div>
  );
}
