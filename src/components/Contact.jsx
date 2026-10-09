import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { IMAGES, SITE } from "../data/site.js";
import PageBanner from "./PageBanner.jsx";
import Reveal from "./Reveal.jsx";

function Contact() {
  const whatsappLink = "https://wa.me/" + SITE.whatsapp;

  return (
    <>
      <PageBanner
        image={IMAGES.desk}
        index="04 / 04"
        title="Contact"
        line="Let us connect and build something"
      />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
                Get in touch
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Let us build
                <br />
                <span className="text-mint-400">something great.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                Interested in web development, software, dashboards or
                AI-powered applications? Feel free to reach out.
              </p>

              <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={IMAGES.workspace}
                  alt="Developer workspace"
                  className="h-64 w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-4">
                <a
                  href={"mailto:" + SITE.email}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900 p-5 transition hover:border-mint-400/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400/10 text-mint-400">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-white/70">{SITE.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={17}
                    className="text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint-400"
                  />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900 p-5 transition hover:border-mint-400/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400/10 text-mint-400">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-sm text-white/70">{SITE.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={17}
                    className="text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint-400"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400/10 text-mint-400">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Location
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Wazirabad, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <Link
                  to="/cv"
                  className="group flex items-center justify-between rounded-2xl border border-mint-400/30 bg-mint-400/[0.06] p-5 transition hover:border-mint-400/60"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-400 text-ink-950">
                      <Download size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">View CV</p>
                      <p className="mt-1 text-xs text-white/40">
                        Education, skills and experience
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={17}
                    className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint-400"
                  />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="mt-24">
            <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
              Connect
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900 p-6 transition hover:border-mint-400/40"
              >
                <div>
                  <p className="font-display text-lg font-semibold transition group-hover:text-mint-300">
                    GitHub
                  </p>
                  <p className="mt-1 text-xs text-white/35">Code and projects</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint-400"
                />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900 p-6 transition hover:border-mint-400/40"
              >
                <div>
                  <p className="font-display text-lg font-semibold transition group-hover:text-mint-300">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    Let us talk about your project
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint-400"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
