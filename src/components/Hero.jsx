import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-10 pt-32"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Background Orange Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.035] blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl">

        {/* Top Label */}
        <div className="animate-fade-in mb-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-orange-500" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
              Frontend Developer
            </span>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.25em] text-white/20 sm:block">
            01 / 04
          </span>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_340px]">

          {/* Left Content */}
          <div>
            <p className="animate-fade-up mb-5 text-sm text-white/30">
              Hello, I'm
            </p>

            <h1 className="animate-fade-up delay-100 text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
              Jahanzaib
              <br />

              <span className="text-orange-500">
                Ali.
              </span>
            </h1>

            {/* Description + Buttons */}
            <div className="mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

              <p className="animate-fade-up delay-200 max-w-lg text-base leading-8 text-white/45 sm:text-lg">
                I create modern, responsive web experiences with a focus
                on clean interfaces, thoughtful interactions and simple
                user experiences.
              </p>

              <div className="animate-fade-up delay-300 flex shrink-0 gap-3">

                <Link
                  to="/about"
                  className="group flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-orange-400"
                >
                  Explore

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/cv"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/70 transition duration-300 hover:border-orange-500/50 hover:text-orange-400"
                >
                  View CV
                </Link>

              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block">
            <div className="border-l border-white/10 pl-10">

              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-orange-500">
                About My Work
              </p>

              <p className="text-sm leading-8 text-white/40">
                I build modern web applications and practical digital
                solutions focused on clean design, responsive experiences,
                and real-world functionality.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                    01
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-white/60">
                    Web Development
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                    02
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-white/60">
                    React & Tailwind
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                    03
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-white/60">
                    AI & Applications
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Information */}
        <div className="animate-fade-up delay-400 mt-20 flex items-center justify-between border-t border-white/10 pt-6">

          <p className="text-xs uppercase tracking-[0.25em] text-white/25">
            Wazirabad, Punjab, Pakistan
          </p>

          <a
            href="#projects"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/30 transition hover:text-orange-500"
          >
            Scroll

            <ArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;