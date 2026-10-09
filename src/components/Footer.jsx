import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { SITE, SKILLS } from "../data/site.js";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/cv", label: "CV" },
];

export default function Footer() {
  const marquee = SKILLS.concat(SKILLS);

  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="overflow-hidden border-b border-white/10 py-5">
        <div className="flex w-max animate-marquee gap-10">
          {marquee.map((skill, index) => (
            <span
              key={skill + index}
              className="flex items-center gap-10 font-display text-xl font-bold text-white/15"
            >
              {skill}
              <span className="text-mint-400/60">*</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-mint-400">
              Let us work together
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Have an idea?
              <br />
              <span className="text-mint-400">Let us build it.</span>
            </h2>

            <a
              href={"mailto:" + SITE.email}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
            >
              <Mail size={16} />
              {SITE.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                Pages
              </p>

              <ul className="space-y-3">
                {footerLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/60 transition hover:text-mint-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                Social
              </p>

              <ul className="space-y-3">
                <li>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-mint-400"
                  >
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-mint-400"
                  >
                    LinkedIn
                    <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://wa.me/" + SITE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-mint-400"
                  >
                    WhatsApp
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <p>
            {"(c) " + new Date().getFullYear() + " " + SITE.name + ". All rights reserved."}
          </p>
          <p>Built with React, Vite and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
