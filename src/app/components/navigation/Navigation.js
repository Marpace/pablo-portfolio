'use client'

import Image from 'next/image'
import styles from './Navigation.module.scss'

export default function Navigation({ currentSection, setCurrentSection }) {
  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  const handleArrowClick = (direction) => {
    setCurrentSection((prev) => {
      const index = sections.indexOf(prev)
      if (direction === 'up') return sections[Math.max(0, index - 1)]
      if (direction === 'down') return sections[Math.min(sections.length - 1, index + 1)]
      return prev
    })
  }


  return (
    <aside className={styles.navigation}>
      <div className={styles.line}></div>

      {sections.map((section) => (
        <h3
          key={section}
          className={`${styles.section} ${
            currentSection === section
              ? styles.active
              : styles.hiddenBelow
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </h3>
      ))}

      <div className={styles.arrows}>
        <Image
          onClick={() => handleArrowClick('up')}
          className={styles.arrowUp}
          src="/icons/arrow-up.svg"
          alt="Arrow up icon"
          width={34}
          height={34}
        />
        <Image
          onClick={() => handleArrowClick('down')}
          className={styles.arrowDown}
          src="/icons/arrow-down.svg"
          alt="Arrow down icon"
          width={34}
          height={34}
        />
      </div>
    </aside>
  )
}

