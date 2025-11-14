'use client'

import Image from 'next/image'
import styles from './Navigation.module.scss'

export default function Navigation({ currentSection, setCurrentSection }) {
  const handleArrowClick = (direction) => {
    setCurrentSection((prev) => {
      const order = ['home', 'about', 'skills', 'projects', 'contact']
      const index = order.indexOf(prev)
      if (direction === 'up') return order[Math.max(0, index - 1)]
      if (direction === 'down') return order[Math.min(order.length - 1, index + 1)]
      return prev
    })
  }

  const sections = ['home', 'about', 'skills', 'projects', 'contact']

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
          src="/icons/arrow-up.png"
          alt="Arrow up icon"
          width={24}
          height={24}
        />
        <Image
          onClick={() => handleArrowClick('down')}
          className={styles.arrowDown}
          src="/icons/arrow-down.png"
          alt="Arrow down icon"
          width={24}
          height={24}
        />
      </div>
    </aside>
  )
}

