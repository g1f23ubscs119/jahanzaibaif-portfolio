import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CV from "./components/CV";

function Home() {
  return (
    <>
      <Hero />
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;