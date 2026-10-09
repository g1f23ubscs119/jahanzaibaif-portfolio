import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CV from "./components/CV.jsx";

import Projects from "./components/projects/Projects.jsx";
import ProjectDetails from "./components/pages/ProjectDetails.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Meta({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

function Home() {
  return (
    <>
      <Meta
        title="Jahanzaib Asif | Full Stack Web Developer Portfolio"
        description="Jahanzaib Asif - Computer Science student and web developer specializing in React, Tailwind CSS, Python, and WordPress."
      />
      <Hero />
      <Projects />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Meta
        title="About Jahanzaib Asif | Web Developer"
        description="Learn more about Jahanzaib Asif, a Computer Science student and web developer."
      />
      <About />
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <Meta
        title="Experience | Jahanzaib Asif"
        description="Explore the experience and projects of Jahanzaib Asif, a web developer specializing in React and Tailwind CSS."
      />
      <Experience />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Meta
        title="Projects | Jahanzaib Asif"
        description="Explore web development projects created by Jahanzaib Asif."
      />
      <Projects />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Meta
        title="Contact Jahanzaib Asif | Web Developer"
        description="Get in touch with Jahanzaib Asif for web development projects and collaborations."
      />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
