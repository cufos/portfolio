import React from 'react'
import styles from '../styles/Home.module.css'


export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.hero__wraper}>
        <span className={styles.hero__span}>Hey, I'm</span>
        <h2 className={styles.hero__title}>
          Francis Yunior
        </h2>
        <p className={styles.hero__subtitle}>
          Front-end developer
        </p>
      </div>
    </header>
  )
}
