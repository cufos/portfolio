import React from 'react'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.about__avatar}>
        my avatar
      </div>
      <article className={styles.about__article}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus soluta, quasi id esse ab consequatur. Voluptatem eum temporibus maiores, vero, alias obcaecati ad commodi numquam molestias hic illo, iure dicta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt expedita eveniet odit asperiores reiciendis exercitationem perferendis explicabo minima, consequatur dolorum ratione quos numquam deleniti. Incidunt quae eaque voluptas quas voluptate.
        </p>
      </article>
    </section>
  )
}
