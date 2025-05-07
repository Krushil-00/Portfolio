import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Layout from './components/Layout'
import MatrixRain from './components/MatrixRain'
// import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div >
  )
}

export default App