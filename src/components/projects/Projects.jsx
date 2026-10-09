import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsList } from "../../data/projectsList.js";

const tabs = [
  { key: "all", label: "All", match: "" },
  { key: "web", label: "Web", match: "WEB" },
  { key: "mobile", label: "Mobile", match: "MOBILE" },
  { key: "ai", label: "AI", match: "AI" },
];

function matches(project, tab) {
  if (tab.key === "all") return true;
  return project.type.includes(tab.match);
}

function Projects() {
  const [activeKey, setActiveKey] = useState("all");

  const activeTab = tabs.find((tab) => tab.key === activeKey);
  const visible = projectsList.filter((project) => matches(project, activeTab));

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-mint-400">
              My Work
            </p>

            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Selected <span className="text-mint-400">Projects.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/50">
              A collection of projects I have designed and developed using
              modern web, mobile and AI technologies.
            </p>
          </div>

          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <div className="inline-flex gap-1 rounded-full border border-white/10 bg-ink-900 p-1.5">
              {tabs.map((tab) => {
                const count = projectsList.filter((project) =>
                  matches(project, tab)
                ).length;
                const active = tab.key === activeKey;

                return (
                  <button
                    type="button"
                    key={tab.key}
                    onClick={() => setActiveKey(tab.key)}
                    className={
                      "flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition " +
                      (active
                        ? "bg-mint-400 text-ink-950"
                        : "text-white/55 hover:text-white")
                    }
                  >
                    {tab.label}
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-[10px] " +
                        (active
                          ? "bg-ink-950/20 text-ink-950"
                          : "bg-white/10 text-white/50")
                      }
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          key={activeKey}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project, index) => (
            <Link
              key={project.id}
              to={"/projects/" + project.id}
              style={{ animationDelay: index * 90 + "ms" }}
              className="animate-pop group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900 transition duration-300 hover:-translate-y-1.5 hover:border-mint-400/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />

                <span className="absolute right-4 top-4 rounded-full border border-mint-400/30 bg-ink-950/70 px-3 py-1 text-[10px] uppercase tracking-wider text-mint-300 backdrop-blur">
                  {project.type}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-mint-400 text-ink-950 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-mint-400">
                  {project.category}
                </p>

                <h3 className="mt-3 font-display text-xl font-semibold">
                  {project.title}
                  <span className="text-mint-400">.</span>
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-white/50">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-14 text-center text-sm text-white/40">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
