import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Research />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
