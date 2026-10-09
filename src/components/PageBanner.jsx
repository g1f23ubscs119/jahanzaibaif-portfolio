export default function PageBanner({ image, index, title, line }) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden px-6 pb-14 pt-40">
      <img
        src={image}
        alt=""
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/60" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-mint-300">
          {index}
        </p>

        <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
          {title}
          <span className="text-mint-400">.</span>
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">
          {line}
        </p>
      </div>
    </section>
  );
}
