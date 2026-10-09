import { ArrowUpRight, Code2, Gauge, Layers, MapPin, Puzzle } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES, PICS, SITE } from "../data/site.js";
import PageBanner from "./PageBanner.jsx";
import Reveal from "./Reveal.jsx";

const strengths = [
  { title: "Object-Oriented Programming", icon: Code2, image: PICS.oop },
  { title: "Problem-Solving", icon: Puzzle, image: PICS.problem },
  { title: "Responsive Design", icon: Layers, image: PICS.responsive },
  { title: "Website Optimization", icon: Gauge, image: PICS.optimize },
];

const skillGroups = [
  {
    title: "Frontend",
    note: "Interfaces that look sharp on every screen",
    image: PICS.frontend,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind"],
  },
  {
    title: "Programming",
    note: "Logic, software and automation",
    image: PICS.programming,
    skills: ["Python", "C++", "OOP"],
  },
  {
    title: "WordPress",
    note: "Themes, plugins and optimization",
    image: PICS.wordpress,
    skills: ["WordPress"],
  },
  {
    title: "Productivity",
    note: "Everyday tools and mindset",
    image: PICS.productivity,
    skills: ["MS Word", "MS Excel", "Problem-Solving"],
  },
];

function About() {
  return (
    <>
      <PageBanner
        image={IMAGES.typing}
        index="02 / 04"
        title="About"
        line="Computer Science Student - Web Developer"
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Building modern web experiences with
                <span className="text-mint-400">
                  {" "}
                  clean design and efficient code.
                </span>
              </p>

              <p className="mt-6 text-sm leading-7 text-white/50">
                I am {SITE.name}, a Computer Science student and Web Developer
                from Wazirabad, Pakistan. I work with React, JavaScript,
                WordPress, Python and C++ to create responsive and
                user-friendly digital experiences.
              </p>

              <Link
                to="/experience"
                className="group mt-7 inline-flex items-center gap-2 text-sm text-white transition hover:text-mint-400"
              >
                View experience
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={IMAGES.about}
                    alt="Code on a screen"
                    className="h-[380px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-ink-900/90 p-3 pr-5 backdrop-blur">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-400 text-ink-950">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Wazirabad</p>
                    <p className="text-xs text-white/40">Punjab, Pakistan</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              Core Strengths
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {strengths.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="group relative h-72 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/20 transition group-hover:from-ink-950/95" />

                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400 text-ink-950">
                      <item.icon size={20} />
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-[10px] text-mint-300">
                        {"0" + (index + 1)}
                      </span>
                      <h3 className="mt-1 font-display text-base font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              Skills
            </p>
            <p className="mt-2 text-xs text-white/30">Technologies and tools</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 100}>
                  <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition duration-300 hover:border-mint-400/40">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={group.image}
                        alt={group.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
                      <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 text-[10px] text-white/70 backdrop-blur">
                        {group.skills.length + (group.skills.length === 1 ? " skill" : " skills")}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/40">{group.note}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-mint-400/30 bg-mint-400/[0.06] px-4 py-1.5 text-xs text-mint-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              Languages
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
                <p className="font-display text-lg font-semibold">English</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Professional Working Proficiency
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-900 p-6">
                <p className="font-display text-lg font-semibold">Urdu</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/35">
                  Native Proficiency
                </p>
              </div>
            </div>
          </div>

          <Reveal>
            <div className="relative mt-24 overflow-hidden rounded-3xl border border-white/10">
              <img
                src={IMAGES.meeting}
                alt="Team working together"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink-950/80" />

              <div className="relative flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
                <p className="font-display text-2xl font-semibold">
                  Let us build something useful.
                </p>

                <Link
                  to="/contact"
                  className="group flex w-fit items-center gap-3 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
                >
                  Get in touch
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default About;
