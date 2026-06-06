import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
function App() {
  return (
    <div className="min-h-screen bg-black lg:bg-[#E5E5E5]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App;