import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Experience", "/experience"],
    ["Contact", "/contact"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between rounded-2xl border border-white/10 bg-black/65 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="text-lg font-semibold tracking-[-0.05em]">
            JA
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-white/60 transition group-hover:bg-white" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([name, path]) => {
            const active = location.pathname === path;

            return (
              <Link
                key={name}
                to={path}
                className={`relative rounded-full px-4 py-2 text-xs transition duration-300 ${
                  active
                    ? "text-white"
                    : "text-white/40 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {name}

                {active && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CV */}
        <Link
          to="/cv"
          className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition duration-300 hover:scale-[1.03] md:flex"
        >
          View CV

          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-white/25 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 w-full max-w-[1400px] overflow-hidden rounded-2xl border border-white/10 bg-black/90 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col">

            {links.map(([name, path], index) => {
              const active = location.pathname === path;

              return (
                <Link
                  key={name}
                  to={path}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-white/10 py-4 ${
                    active ? "text-white" : "text-white/45"
                  }`}
                >
                  <span className="text-sm">
                    {name}
                  </span>

                  <span className="text-[10px] text-white/20">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}

            <Link
              to="/cv"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-between rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-black"
            >
              <span>View CV</span>

              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;