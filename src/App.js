import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />
      <hr />
      <Intro />
      <hr />
      <Projects />
      <hr />
      <TechStack />
      <hr/>
      <Experience />
      <hr />
      <About />
      <hr />
      <Contact />
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
