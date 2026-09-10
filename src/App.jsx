import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function Home() {
  return (
    <>
      <Helmet>
        <title>Jahanzaib Ali | Full Stack Web Developer Portfolio</title>
        <meta
          name="description"
          content="Jahanzaib Ali - Computer Science student and web developer specializing in React, Tailwind CSS, Python, and WordPress."
        />
      </Helmet>

      <Hero />
      <Projects />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Jahanzaib Ali | Web Developer</title>
        <meta
          name="description"
          content="Learn more about Jahanzaib Ali, a Computer Science student and web developer."
        />
      </Helmet>

      <About />
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <Helmet>
        <title>Experience | Jahanzaib Ali</title>
        <meta
          name="description"
          content="Explore the experience and projects of Jahanzaib Ali, a web developer specializing in React and Tailwind CSS."
        />
      </Helmet>

      <Experience />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Jahanzaib Ali</title>
        <meta
          name="description"
          content="Explore web development projects created by Jahanzaib Ali."
        />
      </Helmet>

      <Projects />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Jahanzaib Ali | Web Developer</title>
        <meta
          name="description"
          content="Get in touch with Jahanzaib Ali for web development projects and collaborations."
        />
      </Helmet>

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

        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/cv" element={<CV />} />

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