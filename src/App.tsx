import About from "./components/sections/About"
import Experiences from "./components/sections/Experiences"
import Hero from "./components/sections/Hero"
import Portfolio from "./components/sections/Portfolio"
import Services from "./components/sections/Services"
import Skills from "./components/sections/Skills"

function App() {
  return (
    <main className="scrollbar-hide snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Experiences />
      <Skills />
      <Portfolio />
    </main>
  )
}

export default App
