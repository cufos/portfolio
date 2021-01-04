import React from 'react'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
      &copy; { new Date().getFullYear()} J. Varon. All rights reserved. Built with <a href="https://nextjs.org/" target='_blank' rel='noopener noreferer'>Next</a>
      </p>
    </footer>
  )
}
