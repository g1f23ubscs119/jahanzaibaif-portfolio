import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import profile from "../assets/profile.png";
import { IMAGES, SITE } from "../data/site.js";
import Reveal from "./Reveal.jsx";

const stats = [
  { value: "3", label: "Featured projects" },
  { value: "React", label: "Core stack" },
  { value: "2027", label: "BSCS graduate" },
];

const chips = [
  { label: "React", className: "right-[8%] top-[24%]", delay: "0s" },
  { label: "Tailwind CSS", className: "right-[30%] top-[58%]", delay: "1.5s" },
  { label: "Python", className: "right-[6%] top-[70%]", delay: "3s" },
];

const strip = [
  { image: IMAGES.about, title: "Clean code", text: "Reusable React components" },
  { image: IMAGES.workspace, title: "Modern UI", text: "Responsive Tailwind design" },
  { image: IMAGES.team, title: "Real products", text: "Dashboards, sites and AI agents" },
];

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 28;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      setOffset({ x: x, y: y });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 px-5 pb-20 pt-32">
        <div
          className="absolute inset-y-0 right-0 w-full transition-transform duration-300 ease-out lg:w-[66%]"
          style={{
            transform:
              "translate(" + offset.x + "px, " + offset.y + "px) scale(1.06)",
          }}
        >
          <img
            src={profile}
            alt={SITE.name}
            className="animate-kenburns h-full w-full object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />

        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 animate-floaty rounded-full bg-mint-500/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-1/3 h-72 w-72 animate-floaty rounded-full bg-mint-400/10 blur-3xl" />

        {chips.map((chip) => (
          <div
            key={chip.label}
            style={{ animationDelay: chip.delay }}
            className={
              "absolute hidden animate-floaty rounded-full border border-white/15 bg-ink-900/70 px-4 py-2 text-xs font-medium text-white backdrop-blur lg:block " +
              chip.className
            }
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-mint-400" />
            {chip.label}
          </div>
        ))}

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 text-xs text-mint-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mint-400" />
              Available for new projects
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
              Hi, I am <span className="text-mint-400">Jahanzaib.</span>
              <br />
              I build fast, clean web experiences.
            </h1>

            <p className="mt-6 text-base leading-7 text-white/60">
              {SITE.role} and Computer Science student from Pakistan. I create
              responsive websites, business dashboards and AI-powered tools
              using React, Tailwind CSS and Python.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
              >
                View my work
                <ArrowUpRight size={16} />
              </Link>

              <a
                href={SITE.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink-950/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-mint-400 hover:text-mint-400"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {strip.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
