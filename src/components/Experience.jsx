import { ArrowUpRight, Code2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Web Developer",
      type: "Web",
      description:
        "Responsive websites and modern interfaces using HTML, CSS, JavaScript, React.js and WordPress.",
    },
    {
      period: "2023 — Present",
      title: "Python & C++ Developer",
      type: "Software",
      description:
        "Software applications and automation projects using Python, C++ and Object-Oriented Programming.",
    },
    {
      period: "2024 — Present",
      title: "WordPress Developer",
      type: "WordPress",
      description:
        "WordPress development, theme and plugin customization, optimization and responsive design.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-40">
      {/* Orange Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-orange-500/[0.035] blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="animate-fade-in flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-500">
              03 / 04
            </p>

            <h1 className="animate-fade-up text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              Experience
            </h1>
          </div>

          <p className="hidden text-right text-xs uppercase leading-6 tracking-[0.2em] text-white/25 md:block">
            Development
            <br />
            & Education
          </p>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 size={15} className="text-orange-500" />

              <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                Professional Experience
              </p>
            </div>

            <span className="text-xs text-white/20">
              03 roles
            </span>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {experiences.map((experience, index) => (
              <article
                key={experience.title}
                className="group grid gap-7 px-0 py-8 transition duration-300 hover:bg-orange-500/[0.025] lg:grid-cols-[180px_1fr_160px] lg:px-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-orange-500/70">
                    {experience.period}
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[10px] text-orange-500/50">
                      0{index + 1}
                    </span>

                    <span className="h-px w-5 bg-orange-500/20" />
                  </div>

                  <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {experience.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                    {experience.description}
                  </p>
                </div>

                <div className="flex items-start lg:justify-end">
                  <span className="rounded-full border border-orange-500/20 px-4 py-2 text-xs text-orange-500/70">
                    {experience.type}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap size={16} className="text-orange-500" />

              <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                Education
              </p>
            </div>

            <span className="text-xs text-white/20">
              02
            </span>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            <article className="grid gap-7 px-0 py-8 transition duration-300 hover:bg-orange-500/[0.025] lg:grid-cols-[180px_1fr_160px] lg:px-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500/70">
                  2023 — 2027
                </p>
              </div>

              <div>
                <span className="text-[10px] text-orange-500/50">
                  01
                </span>

                <h2 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                  Bachelor of Science in Computer Science
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  University of Central Punjab (UCP), Gujranwala
                </p>
              </div>

              <div className="flex items-start lg:justify-end">
                <span className="rounded-full border border-orange-500/20 px-4 py-2 text-xs text-orange-500/70">
                  BSCS
                </span>
              </div>
            </article>

            <article className="grid gap-7 px-0 py-8 transition duration-300 hover:bg-orange-500/[0.025] lg:grid-cols-[180px_1fr_160px] lg:px-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500/70">
                  2021 — 2023
                </p>
              </div>

              <div>
                <span className="text-[10px] text-orange-500/50">
                  02
                </span>

                <h2 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                  ICS (Physics)
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  Punjab College, Wazirabad
                </p>
              </div>

              <div className="flex items-start lg:justify-end">
                <span className="rounded-full border border-orange-500/20 px-4 py-2 text-xs text-orange-500/70">
                  ICS
                </span>
              </div>
            </article>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-7">
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            More projects coming soon.
          </p>

          <Link
            to="/contact"
            className="group flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03] hover:bg-orange-400"
          >
            Contact me

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Experience;