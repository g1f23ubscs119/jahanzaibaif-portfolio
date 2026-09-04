import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "salespro-dashboard",
    title: "SalesPro",
    category: "Web Dashboard + Mobile App",
    description:
      "A complete sales management system for businesses to manage products, customers, orders, sales and revenue from both web and mobile.",
    image: "/images/WhatsApp Image 2026-08-25 at 3.35.15 PM.jpeg",
    type: "WEB + MOBILE",
  },

  {
    id: "ai-web-app",
    title: "SalesPro Website",
    category: "Sales Website",
    description:
      "A modern and responsive sales website designed with a clean interface to showcase products, services and business solutions.",
    image: "/images/gemini.jpg",
    type: "WEB APPLICATION",
  },

  {
    id: "ali-whatsapp-agent",
    title: "Ali WhatsApp Agent",
    category: "AI WhatsApp Automation",
    description:
      "An AI-powered WhatsApp automation agent that connects through QR code, allows users to control the AI agent, customize its talking behavior, and automatically reply to incoming WhatsApp messages.",
    image: "/images/AI_WhatsApp_Agent_thumbnail_202609021142.jpeg",
    type: "AI AGENT",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-orange-500" />

            <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
              My Work
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            My
            <span className="text-orange-500"> Projects.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
            Real-world applications designed and developed to solve
            practical problems through modern web, mobile and AI technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-500 hover:-translate-y-2 hover:border-orange-500/30"
            >

              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/5" />

                {/* Project Type */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/80 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Information */}
              <div className="p-7 md:p-8">

                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-500">
                  {project.category}
                </p>

                <h3 className="mb-4 text-3xl font-semibold text-white">
                  {project.title}
                  <span className="text-orange-500">.</span>
                </h3>

                <p className="mb-7 text-sm leading-7 text-white/45">
                  {project.description}
                </p>

                {/* Explore Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="group/button inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:bg-orange-400"
                >
                  Explore Project

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                  />
                </Link>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;