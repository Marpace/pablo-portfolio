"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function Home() {

  const [currentSection, setCurrentSection] = useState('home');
  const [isNavScrolling, setIsNavScrolling] = useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navigation 
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
        <Hero
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
        <About
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
        <Skills
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
        <Projects
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
        <Contact
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          isNavScrolling={isNavScrolling}
          setIsNavScrolling={setIsNavScrolling}
        />
      </main>
    </div>
  );
}
