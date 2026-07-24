import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Research from './components/Research.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Competitions from './components/Competitions.jsx'
import Volunteering from './components/Volunteering.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-gray-200 selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Certifications />
        <Competitions />
        <Volunteering />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
