import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

function CV() {
  return (
    <main className="min-h-screen bg-black px-6 pb-12 pt-36 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top Bar */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex w-fit items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>

          <a
            href="/CV.pdf"
            download="Jahanzaib-Asif-CV.pdf"
            className="flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            <Download size={17} />
            Download CV
          </a>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Resume
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Jahanzaib Asif
          </h1>
        </div>

        {/* PDF Preview */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
          <iframe
            src="/CV.pdf"
            title="Jahanzaib Asif CV"
            className="h-[80vh] w-full"
          />
        </div>
      </div>
    </main>
  );
}

export default CV;