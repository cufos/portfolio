import Head from 'next/head'
import About from '../components/about'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Skills from '../components/skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Skills />
      </Layout>
      </div>
  )
}
