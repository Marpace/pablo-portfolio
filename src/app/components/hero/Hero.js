'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.scss'

export default function Hero({ currentSection, setCurrentSection, isNavScrolling, setIsNavScrolling }) {
  
  const heroRef = useRef(null);
  
  const { ref, inView, entry } = useInView({
    threshold: 1,
  })

  // Update section when in view
  useEffect(() => {
    if (inView && entry) {
      setCurrentSection(entry.target.id)
    }
  }, [inView])

  // Scroll to section if not in view
  useEffect(() => {
    if (isNavScrolling && currentSection === 'home' && !inView && heroRef.current) {
      window.scrollTo({
        top: heroRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
    setTimeout(() => {
      setIsNavScrolling(false);
    }, 600);
  }, [currentSection])

  const handleContactClick = () => setCurrentSection('contact')

  return (
    <section 
      id="home" 
      className={styles.home} 
      ref={(node) => {
        ref(node);          // intersection observer ref
        heroRef.current = node; // scroll ref
      }}>
      <header className={styles.header}>
        <h1 className={styles.name}>Pablo Almonacid</h1>
        <h2 className={styles.title}>Full Stack Developer</h2>

        <div className={styles.buttons}>
          <button onClick={handleContactClick} className={styles.buttonGreen}>
            Contact
          </button>
          {/* <Link href="/resume" className={styles.buttonGreen}>
            View Resume
          </Link> */}
        </div>
      </header>

      <div className={`${styles.arrowDown} ${inView ? "" : "invisible"}`}>
        <Image
          className={styles.arrowIcon}
          src="/icons/arrow-down.svg"
          alt="arrow down icon"
          width={40}
          height={40}
        />
      </div>
    </section>
  )
}
