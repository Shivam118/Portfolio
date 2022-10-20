import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <hr />
      <Projects />
      <hr />
      <About />
      <hr />
      <Contact />
      <hr />
    </div>
  );
}

export default App;
