import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Seo from '../components/seo'

export default function Home() {
  return (
    <div>
      <Seo />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Projects />
      </Layout>
    </div>
  );
}
