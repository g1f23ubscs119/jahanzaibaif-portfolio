import { ArrowUpRight, Code2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES, PICS } from "../data/site.js";
import PageBanner from "./PageBanner.jsx";
import Reveal from "./Reveal.jsx";

const experiences = [
  {
    period: "2024 - Present",
    title: "Web Developer",
    type: "Web",
    image: PICS.expWeb,
    description:
      "Responsive websites and modern interfaces using HTML, CSS, JavaScript, React.js and WordPress.",
  },
  {
    period: "2023 - Present",
    title: "Python & C++ Developer",
    type: "Software",
    image: PICS.expSoftware,
    description:
      "Software applications and automation projects using Python, C++ and Object-Oriented Programming.",
  },
  {
    period: "2024 - Present",
    title: "WordPress Developer",
    type: "WordPress",
    image: PICS.expWordpress,
    description:
      "WordPress development, theme and plugin customization, optimization and responsive design.",
  },
];

const education = [
  {
    period: "2023 - 2027",
    title: "Bachelor of Science in Computer Science",
    place: "University of Central Punjab (UCP), Gujranwala",
    tag: "BSCS",
  },
  {
    period: "2021 - 2023",
    title: "ICS (Physics)",
    place: "Punjab College, Wazirabad",
    tag: "ICS",
  },
];

function Experience() {
  return (
    <>
      <PageBanner
        image={IMAGES.office}
        index="03 / 04"
        title="Experience"
        line="Development and Education"
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <Code2 size={16} className="text-mint-400" />
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              Professional Experience
            </p>
          </div>

          <div className="relative mt-10 border-l border-white/10 pl-8 sm:pl-10">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="relative mb-6">
                  <span className="absolute -left-[38px] top-9 z-10 h-3 w-3 rounded-full bg-mint-400 ring-4 ring-ink-950 sm:-left-[46px]" />

                  <article className="group grid overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition duration-300 hover:border-mint-400/40 sm:grid-cols-[240px_1fr]">
                    <div className="relative h-44 overflow-hidden sm:h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-ink-900/60" />
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-widest text-mint-300">
                          {item.period}
                        </p>

                        <span className="rounded-full border border-mint-400/30 px-4 py-1.5 text-xs text-mint-300">
                          {item.type}
                        </span>
                      </div>

                      <h2 className="mt-4 font-display text-xl font-semibold sm:text-2xl">
                        {item.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 flex items-center gap-3">
            <GraduationCap size={17} className="text-mint-400" />
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              Education
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {education.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <article className="rounded-2xl border border-white/10 bg-ink-900 p-6 transition duration-300 hover:border-mint-400/40 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-widest text-mint-300">
                        {item.period}
                      </p>

                      <span className="rounded-full border border-mint-400/30 px-4 py-1.5 text-xs text-mint-300">
                        {item.tag}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-white/50">{item.place}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="h-full min-h-[280px] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={IMAGES.students}
                  alt="Students studying"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              More projects coming soon.
            </p>

            <Link
              to="/contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
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
    </>
  );
}

export default Experience;
