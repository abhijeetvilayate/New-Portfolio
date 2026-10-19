import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Main/Header";
import Footer from "./Footer";
import ThreeBackground from "./Components/ThreeBackground";

// Importing Page Components from src/Pages/
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      {/* 3D Immersive WebGL Canvas Layer */}
      <ThreeBackground />

      {/* Shared Global Header */}
      <Header />

      {/* Dynamic Page Views */}
      <main className="position-relative" style={{ zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;