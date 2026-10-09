import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectsDetail } from "../../data/projectsDetail.js";
import { projectsList } from "../../data/projectsList.js";
import Reveal from "../Reveal.jsx";

function Label({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-mint-400">
      {children}
    </p>
  );
}

function Gallery({ images }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => setActive((current) => (current - 1 + images.length) % images.length);
  const next = () => setActive((current) => (current + 1) % images.length);

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
        <img
          src={images[active]}
          alt={"Project screen " + (active + 1)}
          className="h-[260px] w-full object-cover sm:h-[400px] lg:h-[500px]"
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:bg-mint-400 hover:text-ink-950"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:bg-mint-400 hover:text-ink-950"
        >
          <ArrowRight size={18} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur">
          {active + 1} / {images.length}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setActive(index)}
            className={
              "overflow-hidden rounded-xl border transition " +
              (active === index
                ? "border-mint-400"
                : "border-white/10 hover:border-mint-400/50")
            }
          >
            <img
              src={image}
              alt={"Thumbnail " + (index + 1)}
              className="h-20 w-full object-cover sm:h-28"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsDetail[projectId];

  if (!project) {
    return (
      <main className="min-h-screen px-6 pb-20 pt-40">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-display text-3xl font-bold">Project Not Found</h1>
          <p className="mt-3 text-white/50">
            The project you are looking for does not exist.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const isSalesPro = projectId === "salespro-dashboard";
  const currentIndex = projectsList.findIndex((item) => item.id === projectId);
  const nextProject = projectsList[(currentIndex + 1) % projectsList.length];

  return (
    <main>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden px-5 pb-14 pt-40">
        <img
          src={project.image}
          alt={project.title}
          className="animate-kenburns absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-ink-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/60" />

        <div className="relative mx-auto w-full max-w-6xl">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-mint-300"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <p className="text-xs uppercase tracking-[0.3em] text-mint-300">
            {project.category}
          </p>

          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            {project.title}
            <span className="text-mint-400">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology.name}
                className="rounded-full border border-white/15 bg-ink-950/50 px-4 py-1.5 text-xs text-white/70 backdrop-blur"
              >
                {technology.name}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
              >
                View Live Project
                <ArrowUpRight size={17} />
              </a>
            )}

            {isSalesPro && project.downloadUrl && (
              <a
                href={project.downloadUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-mint-400/40 bg-mint-400/10 px-6 py-3 text-sm font-semibold text-mint-300 transition hover:bg-mint-400 hover:text-ink-950"
              >
                Download App
                <Download size={17} />
              </a>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <section className="mt-20">
            <Label>Project Overview</Label>
            <h2 className="mt-2 font-display text-3xl font-bold">
              About This Project
            </h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-ink-900 p-6 sm:p-8">
              <p className="text-sm leading-7 text-white/55">
                {project.overview}
              </p>
            </div>
          </section>
        </Reveal>

        {project.detailedSections && (
          <section className="mt-20">
            <Label>Project Details</Label>
            <h2 className="mt-2 font-display text-3xl font-bold">
              Understanding the System
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {project.detailedSections.map((section, index) => (
                <Reveal key={section.title} delay={(index % 2) * 100}>
                  <div className="h-full rounded-2xl border border-white/10 bg-ink-900 p-6 transition duration-300 hover:border-mint-400/40">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-400/10 text-xs font-semibold text-mint-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {section.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {project.gallery && (
          <section className="mt-20">
            <Label>Interface Preview</Label>
            <h2 className="mt-2 font-display text-3xl font-bold">
              Project Screens
            </h2>
            <Gallery images={project.gallery} />
          </section>
        )}

        <section className="mt-20">
          <Label>Project Features</Label>
          <h2 className="mt-2 font-display text-3xl font-bold">What I Built</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 3) * 80}>
                <div className="h-full rounded-xl border border-white/10 bg-ink-900 p-5 transition hover:border-mint-400/40">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-400/10 text-mint-400">
                      <Check size={16} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/45">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <Label>Development Process</Label>
          <h2 className="mt-2 font-display text-3xl font-bold">
            How This Project Works
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.workflow.map((step, index) => (
              <Reveal key={step.number} delay={(index % 2) * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-900 p-6 transition hover:border-mint-400/40">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-mint-300">
                      {step.number}
                    </span>
                    <span className="h-px w-16 bg-mint-400/30" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-mint-400/20 bg-mint-400/[0.04] p-7 sm:p-10">
          <Label>Technologies</Label>
          <h2 className="mt-2 font-display text-2xl font-bold">
            Built with modern technologies
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.technologies.map((technology) => (
              <div
                key={technology.name}
                className="rounded-xl border border-white/10 bg-ink-950/60 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint-400/10 text-mint-400">
                    <Check size={15} />
                  </span>
                  <h3 className="text-sm font-semibold">{technology.name}</h3>
                </div>
                <p className="mt-3 text-xs leading-5 text-white/45">
                  {technology.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {isSalesPro && project.downloadUrl && (
          <section className="mt-16 rounded-3xl border border-white/10 bg-ink-900 p-8 text-center sm:p-10">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mint-400/10 text-mint-400">
              <Download size={22} />
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold">
              SalesPro Mobile Application
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/50">
              The SalesPro project also includes a mobile application. Download
              the application package and explore the mobile version of the
              SalesPro business management system.
            </p>
            <a
              href={project.downloadUrl}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-mint-300"
            >
              Download SalesPro App
              <Download size={18} />
            </a>
          </section>
        )}

        <section className="mt-20 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Next project
          </p>

          <Link
            to={"/projects/" + nextProject.id}
            className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-ink-900 p-5 transition hover:border-mint-400/40"
          >
            <div className="flex items-center gap-4">
              <img
                src={nextProject.image}
                alt={nextProject.title}
                className="h-16 w-24 rounded-lg object-cover object-top"
              />
              <div>
                <p className="font-display text-lg font-semibold transition group-hover:text-mint-300">
                  {nextProject.title}
                </p>
                <p className="mt-1 text-xs text-white/40">
                  {nextProject.category}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint-400"
            />
          </Link>
        </section>
      </div>
    </main>
  );
}
