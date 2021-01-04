import React, { useRef } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Nav() {

  const [active,setActive] = React.useState(false)
  const button = useRef()

  function handleBurger(e){

    if(e.target === button.current){
      setActive(prev => setActive(!prev))
    }

    if(e.target !== button.current)setActive(false)
    // setActive(prev => setActive(!prev))

  }


  return (
    <header className={styles.header} onClick={handleBurger}>
      <div className={styles.wraper}>
        <h1 className={styles.logo}>
          <Link href='/'>
            <a>
              <img src="logo.svg" alt="logo"/>
            </a>
          </Link>
        </h1>
        <nav className={styles.nav}>
          <ul className={`${styles.nav_list} ${active ? styles.active : ''}`}>
            <li className={styles.nav_list__item}>
              <Link href="/">
                <a className={styles.nav_list__anchor}>Home</a> 
              </Link>
              </li>
            <li className={styles.nav_list__item}>
              <Link href="/#about">
                <a className={styles.nav_list__anchor}>About</a>
              </Link>
              </li>
            <li className={styles.nav_list__item}>
              <Link href="/#skills">
                <a className={styles.nav_list__anchor}>Skills</a>
              </Link>
              </li>
            <li className={styles.nav_list__item}>
              <Link href="/#projects">
                <a className={styles.nav_list__anchor}>Projects</a>
              </Link>
              </li>
            <li className={styles.nav_list__item}>
              <Link href="/#contact">
                <a className={styles.nav_list__anchor}>Contact</a>
              </Link>
              </li>
          </ul>
        </nav>
        <div ref={button} className={`${styles.burger} ${active ? styles.active_burger : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  )
}
