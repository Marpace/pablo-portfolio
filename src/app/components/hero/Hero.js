'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import styles from './Hero.module.scss'

export default function Hero({ currentSection, setCurrentSection }) {
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
    if (currentSection === 'home' && !inView && entry) {
      window.scrollTo({
        top: entry.target.offsetTop,
        behavior: 'smooth',
      })
    }
  }, [currentSection])

  const handleContactClick = () => setCurrentSection('contact')

  return (
    <section id="home" className={styles.home} ref={ref}>
      <header className={styles.header}>
        <h1 className={styles.name}>Pablo Almonacid</h1>
        <h2 className={styles.title}>Full Stack Developer</h2>

        <div className={styles.buttons}>
          <button onClick={handleContactClick} className={styles.buttonGreen}>
            Contact
          </button>
          <Link href="/resume" className={styles.buttonGreen}>
            View Resume
          </Link>
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
