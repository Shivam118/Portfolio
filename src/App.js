import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <hr /> */}
      <Intro />
      <hr />
      <Projects />
      <hr />
      <TechStack />
      <hr/>
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
