import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE } from "../data/site.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    "rounded-full px-4 py-2 text-sm transition " +
    (isActive
      ? "bg-white/10 text-white"
      : "text-white/55 hover:text-white");

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className={
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border py-2 pl-5 pr-2 backdrop-blur-xl transition duration-300 " +
          (scrolled
            ? "border-white/15 bg-ink-900/85 shadow-2xl shadow-black/40"
            : "border-white/10 bg-ink-900/55")
        }
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint-400 font-display text-xs font-extrabold text-ink-950">
            JA
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-mint-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-mint-300 sm:inline-flex"
          >
            Hire me
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-ink-900/95 p-3 backdrop-blur-xl md:hidden">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                "block rounded-2xl px-4 py-3 text-sm transition " +
                (isActive
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white")
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl bg-mint-400 px-4 py-3 text-sm font-semibold text-ink-950"
          >
            Hire me
            <ArrowUpRight size={15} />
          </Link>
        </div>
      )}
    </header>
  );
}
