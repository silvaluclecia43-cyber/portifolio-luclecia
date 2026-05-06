import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Reveal from "./components/Reveal/Reveal";

function App() {
  return (
    <>
      <Header />

      <Reveal delay={200}>
        <Hero />
      </Reveal>

      <Reveal delay={200}>
        <About />
      </Reveal>

      <Reveal delay={200}>
        <Skills />
      </Reveal>

      <Reveal delay={200}>
        <Contact />
      </Reveal>

      <Footer />
    </>
  );
}

export default App;
