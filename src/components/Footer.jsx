function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Jahanzaib Asif
        </p>

        <a
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;