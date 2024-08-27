import { useEffect } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills2'
import Footer from './Components/Footer/Footer'
import Projects2 from './Components/Projects2/Projects2'
import Contact from './Components/Contact/Contact'
import axios from 'axios'
const url = import.meta.env.VITE_URL;

function App() {
  useEffect(() => {
    AOS.init({ duration: 2400 });
  }, []);


  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await axios.get(`${url}/cells/F2`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        if (response.data && response.data.F2) {
          const newVisitorCount = parseInt(response.data.F2) + 1;
          await axios.patch(`${url}/id/0`, {
            data: {
              'visitor_count': newVisitorCount
            }
          }, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
        } else {
          console.error('Error receiving visitor count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    updateVisitorCount();
  }, []);



  return (
    <div className='font-defall'>
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      {/* <Projects /> */}
      <Projects2 />

      {/* Footer section */}
      <Contact />

      {/* Footer section */}
      <Footer />
    </div>
  )
}

export default App
