import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const skills = [
    "Python",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind",
    "WordPress",
    "OOP",
    "Problem-Solving",
    "MS Word",
    "MS Excel",
  ];

  const strengths = [
    "Object-Oriented Programming",
    "Problem-Solving",
    "Responsive Design",
    "Website Optimization",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-40">
      {/* Orange Glow */}
      <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full bg-orange-500/[0.035] blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="animate-fade-in flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-500">
              02 / 04
            </p>

            <h1 className="animate-fade-up text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              About
            </h1>
          </div>

          <p className="hidden text-right text-xs uppercase leading-6 tracking-[0.2em] text-white/25 md:block">
            Computer Science Student
            <br />
            Web Developer
          </p>
        </div>

        {/* Intro */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="animate-fade-up text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              Building modern web experiences with
              <span className="text-orange-500">
                {" "}
                clean design & efficient code.
              </span>
            </p>
          </div>

          <div className="animate-fade-up delay-200">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-orange-500">
              Profile
            </p>

            <p className="text-sm leading-7 text-white/45">
              I'm Jahanzaib Ali, a Computer Science student and Web
              Developer from Wazirabad, Pakistan. I work with React,
              JavaScript, WordPress, Python and C++ to create responsive
              and user-friendly digital experiences.
            </p>

            <Link
              to="/experience"
              className="group mt-7 inline-flex items-center gap-2 text-sm text-white transition hover:text-orange-500"
            >
              View experience
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Strengths */}
        <div className="border-t border-white/10 pt-10">
          <div className="mb-7 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
              Core Strengths
            </p>

            <span className="text-xs text-white/20">
              04
            </span>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength, index) => (
              <div
                key={strength}
                className="group min-h-[130px] border-b border-r border-white/10 p-5 transition duration-300 hover:bg-orange-500/[0.04]"
              >
                <span className="text-[10px] text-orange-500/50">
                  0{index + 1}
                </span>

                <h3 className="mt-9 text-sm text-white/50 transition group-hover:text-white">
                  {strength}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
                Skills
              </p>

              <p className="mt-2 text-xs text-white/25">
                Technologies & tools
              </p>
            </div>

            <span className="text-xs text-white/20">
              12
            </span>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative flex min-h-[95px] items-end border-b border-r border-white/10 p-4 transition duration-300 hover:bg-orange-500/[0.04]"
              >
                <span className="absolute right-3 top-3 text-[9px] text-orange-500/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs text-white/45 transition group-hover:text-orange-400">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="mb-7 text-xs uppercase tracking-[0.3em] text-orange-500">
            Languages
          </p>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            <div className="bg-black p-5">
              <p className="text-sm text-white/65">English</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Professional Working Proficiency
              </p>
            </div>

            <div className="bg-black p-5">
              <p className="text-sm text-white/65">Urdu</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                Native Proficiency
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            Let's build something useful.
          </p>

          <Link
            to="/contact"
            className="group flex w-fit items-center gap-3 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-orange-400"
          >
            Get in touch
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

export default About;