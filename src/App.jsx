import { useEffect } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
// import Skills from './Components/Skills/Skills'
import Skills from './Components/Skills/Skills2'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

function App() {
  useEffect(() => {
    AOS.init({duration:2400});
  }, []);

  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Footer section */}
      <Footer />
    </>
  )
}

export default App
