import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-40">
      <div className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-orange-500/[0.04] blur-[130px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-500">
              04 / 04
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              Contact
            </h1>
          </div>

          <p className="hidden text-right text-xs uppercase leading-6 tracking-[0.2em] text-white/25 md:block">
            Let's connect
            <br />
            & build something
          </p>
        </div>

        {/* Main */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
              Get in touch
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              Let's build
              <br />
              <span className="text-orange-500">
                something great.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/40">
              Interested in web development, software, dashboards or
              AI-powered applications? Feel free to reach out.
            </p>
          </div>

          {/* Contact Details */}
          <div className="border-t border-white/10">

            {/* Email */}
            <a
              href="mailto:jahanzaibasif55@gmail.com"
              className="group flex items-center justify-between border-b border-white/10 py-6 transition hover:bg-orange-500/[0.025]"
            >
              <div className="flex items-center gap-4">
                <Mail size={17} className="text-orange-500" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    jahanzaibasif55@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923289096100"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/10 py-6 transition hover:bg-orange-500/[0.025]"
            >
              <div className="flex items-center gap-4">
                <Phone size={17} className="text-orange-500" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    +92 328 9096100
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 border-b border-white/10 py-6">
              <MapPin size={17} className="text-orange-500" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Location
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Wazirabad, Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* CV */}
            <Link
              to="/cv"
              className="group mt-6 flex items-center justify-between rounded-2xl border border-orange-500/20 p-5 transition hover:border-orange-500/40 hover:bg-orange-500/[0.04]"
            >
              <div className="flex items-center gap-4">
                <Download size={17} className="text-orange-500" />

                <div>
                  <p className="text-sm text-white/70">
                    View CV
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Education, skills & experience
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={17}
                className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div className="border-t border-white/10 pt-10">

          <div className="mb-7 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500">
              Connect
            </p>

            <span className="text-xs text-white/20">
              Available
            </span>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">

            {/* GitHub */}
            <a
              href="https://github.com/g1f23ubscs119"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-r border-white/10 p-5 transition hover:bg-orange-500/[0.04]"
            >
              <div>
                <p className="text-base text-white/60 transition group-hover:text-orange-400">
                  GitHub
                </p>

                <p className="mt-1 text-xs text-white/25">
                  Code & projects
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923289096100"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-r border-white/10 p-5 transition hover:bg-orange-500/[0.04]"
            >
              <div>
                <p className="text-base text-white/60 transition group-hover:text-orange-400">
                  WhatsApp
                </p>

                <p className="mt-1 text-xs text-white/25">
                  Let's talk about your project
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-orange-500/60">
            Jahanzaib Ali — Web Developer
          </p>

          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;