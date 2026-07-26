import { HashRouter as Router, Routes, Route } from "react-router-dom"; // <-- Changed to HashRouter
import Header from "./Main/Header";

// Importing Page Components from src/Pages/
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      {/* Shared Global Header */}
      <Header />

      {/* Dynamic Page Views */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;