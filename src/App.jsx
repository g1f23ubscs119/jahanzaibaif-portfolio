import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Jahanzaib Aif | Full Stack Web Developer Portfolio</title>
        <meta
          name="description"
          content="Jahanzaib Aif - Computer Science student and web developer specializing in React, Tailwind CSS, and Python. View my projects and skills."
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
        <title>About Jahanzaib Aif | Computer Science Student & Web Developer</title>
        <meta
          name="description"
          content="Learn more about Jahanzaib Aif, a Computer Science student and web developer from Wazirabad, Pakistan, skilled in React, JavaScript, Python and WordPress."
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
        <title>Experience | Jahanzaib Aif</title>
        <meta
          name="description"
          content="Explore the work experience and projects of Jahanzaib Aif, a web developer specializing in React and Tailwind CSS."
        />
      </Helmet>
      <Experience />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Jahanzaib Aif | Web Developer</title>
        <meta
          name="description"
          content="Get in touch with Jahanzaib Aif for web development projects, collaborations, or freelance work."
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