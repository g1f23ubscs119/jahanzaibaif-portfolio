import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "salespro-dashboard",
    title: "SalesPro",
    category: "Web Dashboard + Mobile App",
    description:
      "Complete sales management system for products, customers, orders and revenue.",
    image: "/images/WhatsApp Image 2026-08-25 at 3.35.15 PM.jpeg",
    type: "WEB + MOBILE",
  },
  {
    id: "ai-web-app",
    title: "SalesPro Website",
    category: "Sales Website",
    description:
      "Modern responsive sales website built to showcase products and business solutions.",
    image: "/images/gemini.jpg",
    type: "WEB",
  },
  {
    id: "ali-whatsapp-agent",
    title: "AI WhatsApp Agent",
    category: "AI WhatsApp Automation",
    description:
      "AI-powered WhatsApp automation agent with automatic message responses.",
    image: "/images/AI_WhatsApp_Agent_thumbnail_202609021142.jpeg",
    type: "AI AGENT",
  },
];

function Projects() {
  return (
    <section className="bg-[#050505] px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-orange-500">Projects.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40">
            A collection of projects I have designed and developed using
            modern web, mobile and AI technologies.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition duration-300 hover:-translate-y-1 hover:border-orange-500/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[9px] text-white/70">
                  0{index + 1}
                </div>

                <div className="absolute right-4 top-4 rounded-full border border-orange-500/20 bg-black/60 px-3 py-1 text-[9px] uppercase text-orange-400">
                  {project.type}
                </div>
              </div>

              <div className="p-5">
                <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-orange-500">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold">
                  {project.title}
                  <span className="text-orange-500">.</span>
                </h3>

                <p className="mt-3 min-h-[48px] text-xs leading-6 text-white/40">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Project 0{index + 1}
                  </span>

                  <Link
                    to={"/projects/" + project.id}
                    className="flex items-center gap-1 text-xs text-white/60 transition hover:text-orange-500"
                  >
                    Explore
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;