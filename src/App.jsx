import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CV from "./components/CV";

import Projects from "./components/projects/Projects";
import ProjectDetails from "./components/pages/ProjectDetails";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <Experience />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Experience Page */}
        <Route path="/experience" element={<ExperiencePage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* CV Page */}
        <Route path="/cv" element={<CV />} />

        {/* Project Details Page */}
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;