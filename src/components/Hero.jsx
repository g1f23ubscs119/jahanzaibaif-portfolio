import { ArrowDown, ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-10 pt-32"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* FULL SCREEN PROFILE PHOTO */}
        <img
          src={profilePic}
          alt="Jahanzaib Ali"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            scale-[0.92]
            sm:scale-[1.03]
            animate-[heroZoom_20s_ease-in-out_infinite_alternate]
          "
        />

        {/* BRIGHTER OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* LEFT GRADIENT */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/65
            via-black/30
            to-black/10
          "
        />

        {/* BOTTOM FADE */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-72
            bg-gradient-to-t
            from-[#050505]
            via-[#050505]/55
            to-transparent
          "
        />

        {/* TOP FADE */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-black/35
            to-transparent
          "
        />

        {/* ================= TECH GRID ================= */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
            [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
            [background-size:70px_70px]
            animate-[gridMove_18s_linear_infinite]
          "
        />

        {/* ================= ORANGE GLOW ================= */}
        <div
          className="
            absolute
            -left-40
            top-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-500/10
            blur-[120px]
            animate-[glowMove_9s_ease-in-out_infinite]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-orange-400/[0.08]
            blur-[110px]
            animate-[glowMoveReverse_11s_ease-in-out_infinite]
          "
        />

        {/* ================= LIGHT BEAM ================= */}
        <div
          className="
            absolute
            -left-[30%]
            top-0
            h-full
            w-[18%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-orange-400/[0.07]
            to-transparent
            blur-2xl
            animate-[lightSweep_12s_linear_infinite]
          "
        />

        {/* ================= FLOATING PARTICLES ================= */}
        <span
          className="
            absolute
            left-[12%]
            top-[28%]
            h-2
            w-2
            rounded-full
            bg-orange-400/80
            shadow-[0_0_18px_rgba(249,115,22,0.9)]
            animate-[particle_6s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            left-[28%]
            top-[65%]
            h-1.5
            w-1.5
            rounded-full
            bg-orange-300/70
            shadow-[0_0_14px_rgba(249,115,22,0.8)]
            animate-[particle_8s_ease-in-out_infinite_1s]
          "
        />

        <span
          className="
            absolute
            right-[24%]
            top-[22%]
            h-1.5
            w-1.5
            rounded-full
            bg-orange-400/80
            shadow-[0_0_15px_rgba(249,115,22,0.8)]
            animate-[particle_7s_ease-in-out_infinite_2s]
          "
        />

        <span
          className="
            absolute
            right-[12%]
            top-[62%]
            h-2
            w-2
            rounded-full
            bg-orange-300/60
            shadow-[0_0_18px_rgba(249,115,22,0.8)]
            animate-[particle_9s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            left-[54%]
            top-[18%]
            h-1
            w-1
            rounded-full
            bg-white/60
            animate-[particle_5s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            left-[70%]
            top-[72%]
            h-1.5
            w-1.5
            rounded-full
            bg-orange-400/70
            shadow-[0_0_12px_rgba(249,115,22,0.8)]
            animate-[particle_7s_ease-in-out_infinite_3s]
          "
        />

        {/* ================= SCAN LINE ================= */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-orange-400/40
            to-transparent
            animate-[scanLine_7s_linear_infinite]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">

          {/* STATUS BADGE */}
          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.12]
              bg-black/25
              px-4
              py-2
              backdrop-blur-xl
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
              animate-[fadeUp_0.8s_ease-out]
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-orange-500
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-orange-500
                  shadow-[0_0_15px_rgba(249,115,22,0.9)]
                "
              />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-200 sm:text-sm">
              Computer Science Student • Web Developer
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            className="
              animate-[fadeUp_1s_ease-out]
              text-6xl
              font-black
              leading-[0.88]
              tracking-[-0.04em]
              text-white
              sm:text-7xl
              md:text-8xl
              lg:text-[105px]
            "
          >
            JAHANZAIB

            <span
              className="
                block
                text-orange-500
                drop-shadow-[0_0_30px_rgba(249,115,22,0.25)]
              "
            >
              ALI
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-2xl
              animate-[fadeUp_1.2s_ease-out]
              text-base
              leading-7
              text-gray-200
              sm:text-lg
            "
          >
            I build modern, responsive and high-performance web experiences
            using React, JavaScript, Tailwind CSS and WordPress.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-4
              animate-[fadeUp_1.4s_ease-out]
            "
          >
            <Link
              to="/projects"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-orange-500
                px-7
                py-3.5
                font-semibold
                text-black
                shadow-[0_0_30px_rgba(249,115,22,0.2)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-400
                hover:shadow-[0_0_45px_rgba(249,115,22,0.4)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  skew-x-[-20deg]
                  bg-white/25
                  transition-transform
                  duration-500
                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">
                View My Projects
              </span>

              <ArrowUpRight
                size={19}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.18]
                bg-white/[0.06]
                px-7
                py-3.5
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-500/40
                hover:bg-orange-500/10
                hover:text-orange-400
              "
            >
              <Code2
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                "
              />

              Let's Talk
            </Link>
          </div>

          {/* INFO */}
          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-6
              animate-[fadeUp_1.6s_ease-out]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-black/25
                  backdrop-blur-md
                "
              >
                <Sparkles size={16} className="text-orange-400" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Focus
                </p>

                <p className="text-sm font-medium text-gray-300">
                  Modern Web Experiences
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Stack
              </p>

              <p className="text-sm font-medium text-gray-300">
                React • Tailwind • WordPress
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div
        className="
          absolute
          bottom-8
          right-8
          z-10
          hidden
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          Scroll
        </span>

        <div
          className="
            flex
            h-10
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-white/15
            bg-black/20
            p-1
            backdrop-blur-md
          "
        >
          <span
            className="
              h-2
              w-1
              rounded-full
              bg-orange-500
              animate-[scrollDot_1.8s_ease-in-out_infinite]
            "
          />
        </div>

        <ArrowDown size={15} className="text-orange-500/70" />
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes heroZoom {
          0% {
            transform: scale(0.92);
          }

          100% {
            transform: scale(0.97);
          }
        }

        @media (min-width: 640px) {
          @keyframes heroZoom {
            0% {
              transform: scale(1.03);
            }

            100% {
              transform: scale(1.09);
            }
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(70px, 70px, 0);
          }
        }

        @keyframes glowMove {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(100px, -50px, 0) scale(1.15);
          }
        }

        @keyframes glowMoveReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-80px, 60px, 0) scale(1.2);
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(-160%) rotate(18deg);
          }

          100% {
            transform: translateX(800%) rotate(18deg);
          }
        }

        @keyframes particle {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate3d(30px, -40px, 0);
            opacity: 1;
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateY(-10vh);
            opacity: 0;
          }

          15% {
            opacity: 0.8;
          }

          50% {
            opacity: 0.3;
          }

          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDot {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          50% {
            transform: translateY(16px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;