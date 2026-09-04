import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe,
  Mail,
  Smartphone,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projects = {
  "salespro-dashboard": {
    title: "SalesPro",
    category: "Business Management System",

    description:
      "SalesPro is a complete business and sales management solution designed to help businesses manage their daily operations from one place. It combines a powerful web dashboard with a mobile application, allowing business owners and sales teams to manage products, customers, orders, sales activity, and important business information from both desktop and mobile devices. The system is built to make everyday business management faster, more organized, and easier to access.",

    image: "/images/WhatsApp Image 2026-08-25 at 3.35.15 PM.jpeg",

    loginUrl: "https://salespro-store.netlify.app/login",

    contactUrl: "https://salespro-store.netlify.app/contact",

    mobileAppFile: "/SalesPro-Mobile-App.zip",

    mobileTitle: "SalesPro",
    mobileHeading: "Mobile App.",
    mobileLabel: "Mobile Application",

    mobileDescription:
      "The SalesPro mobile application gives business owners and sales teams quick access to important business operations from their mobile devices. Users can manage products, customers, and orders while keeping track of their sales activities. The mobile application is especially useful for users who need to manage business information while away from their desktop or office.",

    mobileFeatures: [
      "Add new products and maintain product information",
      "Edit existing product details whenever required",
      "View and organize available products",
      "Add new customers and maintain customer records",
      "Edit customer information when details change",
      "Create customer orders directly from the application",
      "View and manage existing orders",
      "Keep track of daily sales and order activity",
      "Access important business information from a mobile device",
      "Use the application for quick day-to-day business management",
    ],

    webTitle: "SalesPro",
    webHeading: "Web Dashboard.",
    webLabel: "Web Dashboard",

    webDescription:
      "The SalesPro web dashboard works as the main business management interface. It provides business owners with a larger desktop experience where they can monitor business performance, manage products and customers, handle orders, and review sales information. The dashboard brings important business operations together so users can understand what is happening in their business without switching between different systems.",

    webFeatures: [
      "View overall business performance from the dashboard",
      "Monitor revenue and sales activity",
      "View important business statistics",
      "Add and manage products",
      "Edit existing product information",
      "Manage customer records and information",
      "Create and manage customer orders",
      "View recent orders and business activity",
      "Monitor sales information and performance",
      "Keep important business information organized",
      "Access the system through a responsive web interface",
    ],

    liveTitle: "Explore",
    liveHeading: "SalesPro.",
    liveDescription:
      "Try the live SalesPro website and explore the application yourself. You can visit the login page or contact section directly from the buttons below.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Responsive Design",
      "PWA",
      "Mobile App",
    ],
  },

  "ai-web-app": {
    title: "AI Web Application",
    category: "AI Web Application",

    description:
      "An AI-powered web application designed with a clean and responsive interface that makes AI-based functionality simple and easy to use. The project focuses on providing an interactive experience with modern UI design and responsive layouts for different screen sizes.",

    image: "/images/gemini.jpg",

    loginUrl: "",
    contactUrl: "",
    mobileAppFile: "",

    mobileTitle: "AI Web",
    mobileHeading: "Application.",
    mobileLabel: "Mobile Application",

    mobileDescription:
      "The application is designed with responsive layouts so users can access its AI-powered functionality from mobile devices while maintaining a simple and easy-to-use experience.",

    mobileFeatures: [
      "Access AI-powered functionality from mobile devices",
      "Use a responsive mobile-friendly interface",
      "Navigate between application features easily",
      "Interact with the application's AI functionality",
      "Use the application on different screen sizes",
    ],

    webTitle: "AI Web",
    webHeading: "Application.",
    webLabel: "Web Application",

    webDescription:
      "The web application provides users with a modern interface for interacting with AI-powered functionality. The design focuses on simple navigation, responsive layouts, and an easy user experience so users can focus on the application's main purpose without unnecessary complexity.",

    webFeatures: [
      "AI-powered web functionality",
      "Clean and modern user interface",
      "Responsive desktop and mobile design",
      "Simple navigation",
      "Interactive user experience",
      "Easy access to the application's main functionality",
    ],

    liveTitle: "Explore",
    liveHeading: "AI Application.",
    liveDescription:
      "Explore the AI-powered web application and experience its modern interface and functionality.",

    technologies: [
      "React",
      "JavaScript",
      "Python",
      "AI",
      "Tailwind CSS",
    ],
  },

  "ali-whatsapp-agent": {
    title: "Ali WhatsApp Agent",
    category: "AI WhatsApp Automation Agent",

    description:
      "Ali WhatsApp Agent is an AI-powered WhatsApp automation system designed to automatically respond to incoming WhatsApp messages. The system connects a WhatsApp number through a QR-code based setup and provides a dedicated dashboard where users can control the AI agent and customize its response behavior. Once the agent is enabled, it can automatically handle incoming conversations and respond to messages without requiring manual replies.",

    image:
      "/images/AI_WhatsApp_Agent_thumbnail_202609021142.jpeg",

    loginUrl: "",
    contactUrl: "",
    mobileAppFile: "",

    mobileTitle: "Ali WhatsApp",
    mobileHeading: "Agent.",
    mobileLabel: "WhatsApp AI Agent",

    mobileDescription:
      "Ali WhatsApp Agent is designed with a responsive interface so users can manage their WhatsApp AI agent from different devices. Users can connect their WhatsApp account, control the agent status, and manage its response behavior through a simple dashboard.",

    mobileFeatures: [
      "Connect WhatsApp using a QR-code based setup",
      "Manage the connected WhatsApp account",
      "Turn the AI agent ON or OFF",
      "Control when the AI agent automatically responds",
      "Customize the agent's talking and response behavior",
      "Automatically respond to incoming WhatsApp messages",
      "Manage the AI agent from a responsive interface",
      "Monitor and control the automation system easily",
    ],

    webTitle: "Ali WhatsApp",
    webHeading: "AI Dashboard.",
    webLabel: "AI Web Dashboard",

    webDescription:
      "The Ali WhatsApp Agent web dashboard provides a centralized interface for managing an AI-powered WhatsApp automation agent. Users can connect their WhatsApp account by scanning a QR code through WhatsApp Linked Devices. After connecting, the dashboard allows users to enable or disable the AI agent and configure how it communicates. When the agent is active, it automatically replies to incoming messages sent to the connected WhatsApp number.",

    webFeatures: [
      "QR-code based WhatsApp connection",
      "WhatsApp Linked Devices integration",
      "AI agent ON/OFF control",
      "Automatic replies to incoming WhatsApp messages",
      "Customizable AI talking and response behavior",
      "Connected WhatsApp number management",
      "Real-time agent control through the dashboard",
      "AI-powered conversation automation",
      "Simple and clean chat-style dashboard interface",
      "Responsive web dashboard",
    ],

    liveTitle: "Explore",
    liveHeading: "Ali WhatsApp Agent.",
    liveDescription:
      "Ali WhatsApp Agent is an AI-powered automation system designed to connect with WhatsApp and automatically handle incoming messages through a customizable AI agent.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "AI",
      "WhatsApp Automation",
      "QR Code",
      "WhatsApp Linked Devices",
      "Responsive Design",
    ],
  },
};

function FeatureCard({ feature, index }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.02]">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-medium tracking-[0.2em] text-orange-500">
          {String(index + 1).padStart(2, "0")}
        </span>

        <Check
          size={17}
          className="text-orange-500 opacity-50 transition duration-300 group-hover:opacity-100"
        />
      </div>

      <p className="text-sm leading-7 text-white/60">
        {feature}
      </p>
    </div>
  );
}

function WhatsAppAgentGallery() {
  const images = [
    "/images/AI_WhatsApp_Agent_thumbnail_202609021142.jpeg",
    "/images/AI_WhatsApp_Agent_welcome_page_202609021139.jpeg",
    "/images/Gemini_Generated_Image_31v86331v86331v8.jpg",
    "/images/WhatsApp_AI_Agent_layout_2K_202609021136.jpeg",
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="mx-auto max-w-7xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">

        {/* Images */}
        <div className="relative aspect-video w-full">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Ali WhatsApp Agent screenshot ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                index === current
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
          className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
        >
          <ArrowUpRight size={18} />
        </button>

        {/* Counter */}
        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/60 backdrop-blur-md">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects[projectId];

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
        <div>
          <h1 className="mb-4 text-4xl font-semibold">
            Project Not Found
          </h1>

          <p className="mb-8 text-white/40">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400"
          >
            <ArrowLeft size={17} />
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= PROJECT HEADER ================= */}
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-orange-500"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-orange-500" />

            <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
              {project.category}
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            {project.title}
            <span className="text-orange-500">.</span>
          </h1>

          <p className="mt-8 max-w-4xl text-base leading-8 text-white/40 md:text-lg">
            {project.description}
          </p>
        </div>
      </section>

      {/* ================= MAIN IMAGE / GALLERY ================= */}
      <section className="px-6">

        {projectId === "ali-whatsapp-agent" ? (
          <WhatsAppAgentGallery />
        ) : (
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

      </section>

      {/* ================= MOBILE APP ================= */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                {project.mobileLabel}
              </span>
            </div>

            <h2 className="text-4xl font-semibold md:text-6xl">
              {project.mobileTitle}
              <span className="text-orange-500">
                {" "}
                {project.mobileHeading}
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-white/45 md:text-base">
              {project.mobileDescription}
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Key Features
              <span className="text-orange-500">.</span>
            </h3>

            <p className="mt-3 text-sm text-white/30">
              What users can do with the {project.title}.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.mobileFeatures.map((feature, index) => (
              <FeatureCard
                key={feature}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          {/* Mobile App Download */}
          {project.mobileAppFile && (
            <div className="mt-12 rounded-2xl border border-orange-500/20 bg-orange-500/[0.03] p-7">

              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <Smartphone
                      size={20}
                      className="text-orange-500"
                    />

                    <h3 className="text-xl font-semibold">
                      Get the Mobile App
                    </h3>
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-white/40">
                    Download the SalesPro mobile app package and install it
                    on a compatible Android device.
                  </p>
                </div>

                <a
                  href={project.mobileAppFile}
                  download
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400"
                >
                  Download App
                  <ArrowDownToLine size={17} />
                </a>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= WEB DASHBOARD ================= */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                {project.webLabel}
              </span>
            </div>

            <h2 className="text-4xl font-semibold md:text-6xl">
              {project.webTitle}
              <span className="text-orange-500">
                {" "}
                {project.webHeading}
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-white/45 md:text-base">
              {project.webDescription}
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Key Features
              <span className="text-orange-500">.</span>
            </h3>

            <p className="mt-3 text-sm text-white/30">
              What you can manage with the {project.title}.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.webFeatures.map((feature, index) => (
              <FeatureCard
                key={feature}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ALI WHATSAPP AGENT WORKFLOW ================= */}
      {projectId === "ali-whatsapp-agent" && (
        <section className="border-t border-white/10 px-6 py-28">
          <div className="mx-auto max-w-7xl">

            {/* Section Heading */}
            <div className="mb-16 max-w-4xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                  How It Works
                </span>
              </div>

              <h2 className="text-4xl font-semibold md:text-6xl">
                WhatsApp
                <span className="text-orange-500"> Automation.</span>
              </h2>

              <p className="mt-7 max-w-3xl text-sm leading-8 text-white/45 md:text-base">
                Ali WhatsApp Agent uses a simple workflow to connect a
                WhatsApp account with an AI-powered automation system.
                Once connected and activated, the AI agent can automatically
                respond to incoming WhatsApp messages.
              </p>
            </div>

            {/* Workflow Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {/* Step 01 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-semibold text-orange-500/30 transition duration-500 group-hover:text-orange-500">
                    01
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 text-sm text-orange-500">
                    01
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  Scan QR Code
                </h3>

                <p className="text-sm leading-7 text-white/40">
                  Open WhatsApp Linked Devices and scan the QR code displayed
                  on the Ali WhatsApp Agent welcome page.
                </p>
              </div>

              {/* Step 02 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-semibold text-orange-500/30 transition duration-500 group-hover:text-orange-500">
                    02
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 text-sm text-orange-500">
                    02
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  Connect WhatsApp
                </h3>

                <p className="text-sm leading-7 text-white/40">
                  After scanning the QR code, the WhatsApp account connects
                  with the Ali WhatsApp Agent dashboard.
                </p>
              </div>

              {/* Step 03 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-semibold text-orange-500/30 transition duration-500 group-hover:text-orange-500">
                    03
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 text-sm text-orange-500">
                    03
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  Activate AI Agent
                </h3>

                <p className="text-sm leading-7 text-white/40">
                  Use the dashboard controls to turn the AI agent ON or OFF
                  and decide when automatic responses should be active.
                </p>
              </div>

              {/* Step 04 */}
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl font-semibold text-orange-500/30 transition duration-500 group-hover:text-orange-500">
                    04
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/20 text-sm text-orange-500">
                    04
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  Automatic Replies
                </h3>

                <p className="text-sm leading-7 text-white/40">
                  When the AI agent is active, it can automatically respond
                  to incoming WhatsApp messages according to the configured
                  response behavior.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ================= LIVE PROJECT ================= */}
      {projectId === "salespro-dashboard" && (
        <section className="border-t border-white/10 px-6 py-28">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />

                <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                  Live Project
                </span>
              </div>

              <h2 className="text-4xl font-semibold md:text-5xl">
                {project.liveTitle}
                <span className="text-orange-500">
                  {" "}
                  {project.liveHeading}
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                {project.liveDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">

              {/* Website */}
              <a
                href="https://salespro-store.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400"
              >
                <Globe size={17} />
                Open Website
                <ExternalLink size={15} />
              </a>

              {/* Login */}
              <a
                href={project.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-orange-500/50 hover:text-orange-400"
              >
                Login
                <ArrowUpRight size={17} />
              </a>

              {/* Contact */}
              <a
                href={project.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-orange-500/50 hover:text-orange-400"
              >
                <Mail size={17} />
                Contact
                <ArrowUpRight size={17} />
              </a>

            </div>
          </div>
        </section>
      )}

      {/* ================= TECHNOLOGIES ================= */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                Built With
              </span>
            </div>

            <h2 className="text-4xl font-semibold md:text-5xl">
              Technologies
              <span className="text-orange-500">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/50 transition hover:border-orange-500/40 hover:text-orange-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM ================= */}
      <section className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <p className="text-xs uppercase tracking-[0.25em] text-white/20">
            Jahanzaib Ali
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/30 transition hover:text-orange-500"
          >
            Back Home
            <ArrowUpRight size={14} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default ProjectDetails;