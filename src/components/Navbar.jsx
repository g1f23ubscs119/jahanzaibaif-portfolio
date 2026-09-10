import {
  Home,
  User,
  BriefcaseBusiness,
  FolderOpen,
  Mail,
  FileText,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Experience", path: "/experience", icon: BriefcaseBusiness },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Contact", path: "/contact", icon: Mail },
  { name: "CV", path: "/cv", icon: FileText },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 60);

      if (documentHeight > 0) {
        setProgress((scrollTop / documentHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed left-6 z-50
        transition-all duration-500 ease-out
        ${
          scrolled
            ? "top-4"
            : "top-6"
        }
      `}
    >
      <div className="relative">

        {/* Glow */}
        <div
          className={`
            absolute
            rounded-[24px]
            bg-orange-500/10
            blur-xl
            transition-all
            duration-500
            ${
              scrolled
                ? "-inset-1 opacity-40"
                : "-inset-2 opacity-70"
            }
          `}
        />

        {/* Navbar */}
        <div
          className={`
            relative
            flex
            items-center
            gap-1.5
            overflow-hidden
            border
            bg-[#0b0b0b]/90
            backdrop-blur-2xl
            transition-all
            duration-500
            ease-out

            ${
              scrolled
                ? "rounded-[18px] border-white/[0.06] p-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.85)]"
                : "rounded-[22px] border-white/[0.08] p-2 shadow-[-8px_-8px_20px_rgba(255,255,255,0.025),10px_10px_30px_rgba(0,0,0,0.9)]"
            }
          `}
        >

          {/* JA Logo */}
          <NavLink
            to="/"
            className={`
              group/logo
              flex
              shrink-0
              items-center
              justify-center
              border
              border-orange-500/20
              bg-[#151515]
              font-black
              tracking-tight
              text-orange-500
              transition-all
              duration-500

              ${
                scrolled
                  ? "h-10 w-12 rounded-[13px] text-base"
                  : "h-12 w-14 rounded-[16px] text-lg"
              }

              hover:-translate-y-1
              hover:border-orange-500/50
              hover:bg-orange-500
              hover:text-black
              hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]
            `}
          >
            <span className="transition-transform duration-300 group-hover/logo:scale-110">
              JA
            </span>
          </NavLink>

          {/* Divider */}
          <div
            className={`
              mx-1
              w-px
              bg-white/[0.08]
              transition-all
              duration-500
              ${scrolled ? "h-6" : "h-7"}
            `}
          />

          {/* Navigation */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    group/item
                    relative
                    flex
                    items-center
                    gap-2
                    overflow-hidden
                    text-gray-400
                    transition-all
                    duration-300
                    ease-out

                    ${
                      scrolled
                        ? "h-10 rounded-[13px] px-3"
                        : "h-12 rounded-[15px] px-3.5"
                    }

                    ${
                      isActive
                        ? `
                          bg-orange-500
                          text-black
                          shadow-[0_0_20px_rgba(249,115,22,0.22)]
                        `
                        : `
                          hover:-translate-y-1
                          hover:bg-white/[0.05]
                          hover:text-white
                        `
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Hover shine */}
                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          -translate-x-full
                          skew-x-[-20deg]
                          bg-gradient-to-r
                          from-transparent
                          via-white/[0.08]
                          to-transparent
                          transition-transform
                          duration-500
                          group-hover/item:translate-x-full
                        "
                      />

                      <Icon
                        size={scrolled ? 17 : 18}
                        strokeWidth={1.8}
                        className={`
                          relative
                          z-10
                          shrink-0
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "scale-110"
                              : "group-hover/item:scale-110 group-hover/item:rotate-[-7deg] group-hover/item:text-orange-400"
                          }
                        `}
                      />

                      <span
                        className={`
                          relative
                          z-10
                          whitespace-nowrap
                          font-medium
                          tracking-wide
                          transition-all
                          duration-500
                          ${
                            scrolled
                              ? "text-[12px]"
                              : "text-[13px]"
                          }
                        `}
                      >
                        {item.name}
                      </span>

                      {/* Active dot */}
                      {isActive && (
                        <span
                          className="
                            absolute
                            bottom-1
                            left-1/2
                            h-1
                            w-1
                            -translate-x-1/2
                            rounded-full
                            bg-black
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Availability */}
          <div
            className={`
              ml-1
              hidden
              items-center
              gap-2
              border
              border-white/[0.06]
              bg-[#141414]
              transition-all
              duration-500
              lg:flex

              ${
                scrolled
                  ? "h-10 rounded-[13px] px-2.5"
                  : "h-12 rounded-[15px] px-3"
              }
            `}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

            <span
              className={`
                whitespace-nowrap
                font-medium
                text-gray-400
                ${scrolled ? "text-[10px]" : "text-[11px]"}
              `}
            >
              Available
            </span>
          </div>

          {/* Scroll progress */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-[2px]
              rounded-full
              bg-orange-500
              shadow-[0_0_10px_rgba(249,115,22,0.8)]
              transition-[width]
              duration-100
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;