import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import Services from "./components/sections/Services"
import Skills from "./components/sections/Skills"
import Testimonials from "./components/sections/Testimonials"

function App() {
  return (
    <>
      <main className="scrollbar-hide snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
