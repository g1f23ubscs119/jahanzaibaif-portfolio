import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projects = {
  "salespro-dashboard": {
    title: "SalesPro",
    category: "Web Dashboard + Mobile App",
    description:
      "A complete sales management system combining a professional web dashboard and mobile application for managing products, orders, customers, analytics, messages, revenue, and everyday business operations.",
    image: "/images/WhatsApp Image 2026-08-25 at 3.35.15 PM.jpeg",

    overview:
      "SalesPro is a complete business management solution designed to bring important sales operations into one centralized system. The project combines a modern web-based administration dashboard with a mobile application, giving business users a flexible way to monitor and manage their day-to-day operations. Instead of keeping product information, customer records, orders, sales performance, and communication in separate places, SalesPro organizes these areas into a structured digital management environment. The dashboard provides a clear overview of important business information, while dedicated management pages allow users to work with products, orders, customers, messages, analytics, and settings. The mobile application extends the experience beyond the desktop environment and provides a convenient way to access the application from mobile devices.",

    detailedSections: [
      {
        title: "Business Management Dashboard",
        text:
          "The central SalesPro dashboard is designed as a command center for business operations. Important information is presented through organized statistics, revenue information, recent orders, recent customers, and analytical visualizations. The purpose of the dashboard is to allow a business user to understand what is happening inside the system without having to open every individual management section.",
      },
      {
        title: "Product & Inventory Management",
        text:
          "The product management area provides a structured interface for maintaining product information. Products can be reviewed, organized, and managed from a dedicated section rather than being handled manually across different systems. This creates a cleaner workflow for businesses that need to maintain their product catalog and monitor inventory-related information.",
      },
      {
        title: "Order Management",
        text:
          "SalesPro provides a dedicated order management environment where customer orders can be reviewed and handled from one centralized location. This helps keep order-related information organized and makes it easier for a business user to follow the overall sales process.",
      },
      {
        title: "Customer Management",
        text:
          "The customer management section provides a dedicated place for viewing and organizing customer information. Keeping customer records inside the same system as orders and sales information creates a connected business workflow and makes customer-related information easier to access.",
      },
      {
        title: "Analytics & Revenue Tracking",
        text:
          "The analytics section converts business information into visual data. Charts and statistics make revenue and sales performance easier to understand at a glance. Instead of relying only on raw numbers, the dashboard provides a visual representation that can help users identify business activity and performance patterns.",
      },
      {
        title: "Mobile Application",
        text:
          "Alongside the web dashboard, SalesPro includes a mobile application designed to make the system accessible from mobile devices. The mobile experience extends the project's usability beyond a desktop environment and provides a more convenient way to interact with business functionality while using a smartphone.",
      },
    ],

    features: [
      {
        title: "Modern Admin Dashboard",
        text:
          "A centralized dashboard presents key business information including statistics, revenue data, recent orders, and customer activity in a clean interface.",
      },
      {
        title: "Product Management",
        text:
          "A dedicated product section allows business users to organize and manage their product information through a structured management interface.",
      },
      {
        title: "Order Management",
        text:
          "Orders are handled through a dedicated section where business activity can be reviewed and managed from one place.",
      },
      {
        title: "Customer Management",
        text:
          "Customer records are organized into a dedicated management area for easier access and better organization.",
      },
      {
        title: "Sales Analytics",
        text:
          "Visual charts and statistics provide a clearer understanding of sales performance and business activity.",
      },
      {
        title: "Revenue Tracking",
        text:
          "Revenue-related information is presented through dashboard statistics and visual analytics for quick business monitoring.",
      },
      {
        title: "Recent Orders",
        text:
          "The dashboard provides a quick view of recent order activity so important sales information can be reviewed without navigating through multiple pages.",
      },
      {
        title: "Recent Customers",
        text:
          "Recent customer activity is displayed directly on the dashboard, providing a quick overview of customer-related changes.",
      },
      {
        title: "Messages Management",
        text:
          "A dedicated messages section provides an organized interface for handling business communication and message-related information.",
      },
      {
        title: "Settings Management",
        text:
          "The settings area provides a dedicated location for managing application-level preferences and configuration.",
      },
      {
        title: "Responsive Interface",
        text:
          "The dashboard interface is designed to adapt to different screen sizes, making the web application usable across desktop, tablet, and mobile environments.",
      },
      {
        title: "Dark Mode",
        text:
          "A dark interface option provides a modern visual experience and allows users to work comfortably with a darker application theme.",
      },
      {
        title: "Mobile Application",
        text:
          "A dedicated mobile application extends the SalesPro experience to smartphones and provides an additional way to access business functionality.",
      },
    ],

    technologies: [
      {
        name: "React",
        text:
          "Used as the primary frontend framework for building reusable components and creating the interactive dashboard interface.",
      },
      {
        name: "JavaScript",
        text:
          "Used to implement application logic, interactions, dynamic data handling, and frontend functionality.",
      },
      {
        name: "Tailwind CSS",
        text:
          "Used for building the responsive visual system, layouts, spacing, typography, cards, navigation, and dark-mode interface.",
      },
      {
        name: "React Router",
        text:
          "Used to create the multi-page navigation structure for dashboard areas such as analytics, products, orders, customers, messages, and settings.",
      },
      {
        name: "Recharts",
        text:
          "Used for creating visual analytics and chart-based representations of business and revenue information.",
      },
      {
        name: "Responsive Design",
        text:
          "Implemented to make the dashboard interface adapt smoothly across desktop, tablet, and smaller screen sizes.",
      },
      {
        name: "PWA",
        text:
          "Used as part of the project's mobile-friendly web experience and application-oriented approach.",
      },
      {
        name: "Mobile App",
        text:
          "The project also includes a dedicated mobile application for accessing the SalesPro experience on mobile devices.",
      },
    ],

    workflow: [
      {
        number: "01",
        title: "Dashboard",
        text:
          "The user starts from the main dashboard, which acts as the central overview of the system. Business statistics, revenue information, recent orders, and recent customer activity are presented together so the user can quickly understand the current state of the business.",
      },
      {
        number: "02",
        title: "Products",
        text:
          "The Products section provides a dedicated environment for managing the product catalog. Users can review product information and keep product-related data organized within the business management system.",
      },
      {
        number: "03",
        title: "Orders",
        text:
          "The Orders section brings customer order activity into one centralized interface. This allows the user to review and manage order-related information without switching between different systems.",
      },
      {
        number: "04",
        title: "Customers",
        text:
          "The Customers section organizes customer information separately from other business areas while still keeping it connected to the overall SalesPro workflow.",
      },
      {
        number: "05",
        title: "Analytics",
        text:
          "The Analytics section transforms business data into charts and visual statistics. This provides a more understandable representation of revenue and sales activity and helps users monitor performance.",
      },
      {
        number: "06",
        title: "Messages",
        text:
          "The Messages section provides a dedicated space for business communication and message management, keeping communication-related functionality within the same dashboard.",
      },
      {
        number: "07",
        title: "Settings",
        text:
          "The Settings section provides a dedicated area for managing application preferences and configuration rather than mixing settings with operational pages.",
      },
      {
        number: "08",
        title: "Mobile Access",
        text:
          "The SalesPro mobile application provides another access point to the project. The goal is to make important business functionality available beyond the desktop dashboard and provide a more convenient mobile experience.",
      },
    ],

    liveUrl: "https://salespro-store.netlify.app/",
    downloadUrl: "/SalesPro-Mobile-App.zip",
  },

  "ai-web-app": {
    title: "SalesPro Website",
    category: "Sales Website",
    description:
      "A modern responsive sales website designed to present products and business solutions through a clean, professional, and engaging browsing experience across desktop and mobile devices.",
    image: "/images/gemini.jpg",

    overview:
      "SalesPro Website is a modern business-focused website created to provide a professional online presence for a sales-oriented business. The website focuses on clean presentation, structured content, responsive layouts, clear navigation, and strong visual communication. The interface is designed so that visitors can understand the business offering and browse the available information without unnecessary complexity. The responsive structure allows the website to adapt to different screen sizes while maintaining a consistent visual experience.",

    detailedSections: [
      {
        title: "Professional Sales Experience",
        text:
          "The website is structured around a professional sales-oriented presentation. The goal is to create an interface where products and business solutions can be presented clearly while maintaining a modern visual identity.",
      },
      {
        title: "Product Presentation",
        text:
          "Products and business offerings are presented through organized sections that make the content easier to scan and understand. Visual hierarchy, spacing, typography, and structured content help guide visitors through the website.",
      },
      {
        title: "Responsive User Experience",
        text:
          "The layout is designed to work across desktop, tablet, and mobile screen sizes. Responsive sections ensure that content remains accessible and visually organized even when the available screen width changes.",
      },
      {
        title: "Clear Navigation",
        text:
          "The navigation structure is designed to help visitors move between important areas of the website without unnecessary complexity. Clear navigation supports a smoother browsing experience.",
      },
      {
        title: "Business-Focused Interface",
        text:
          "The visual system focuses on presenting the business in a professional manner. Sections, calls to action, and product presentation areas work together to create a clear sales-focused browsing experience.",
      },
    ],

    features: [
      {
        title: "Modern Sales Website",
        text:
          "A professional website interface designed specifically around product presentation and business communication.",
      },
      {
        title: "Responsive Layout",
        text:
          "The website adapts to desktop, tablet, and mobile screen sizes for a consistent browsing experience.",
      },
      {
        title: "Product Presentation",
        text:
          "Products and business solutions are presented through organized and visually structured website sections.",
      },
      {
        title: "Clean User Interface",
        text:
          "The interface uses clear spacing, hierarchy, typography, and visual structure to make information easier to understand.",
      },
      {
        title: "Mobile Friendly",
        text:
          "The responsive design allows users to browse the website comfortably from smaller screens and mobile devices.",
      },
      {
        title: "Smooth Navigation",
        text:
          "A simple navigation structure helps visitors move between important areas of the website.",
      },
      {
        title: "Business Layout",
        text:
          "The overall page structure is designed around a professional business presentation rather than a generic template.",
      },
      {
        title: "Responsive Sections",
        text:
          "Individual content sections are designed to resize and rearrange according to the available screen space.",
      },
      {
        title: "Modern Visual Design",
        text:
          "The website uses a contemporary visual approach to create a polished and professional digital presence.",
      },
      {
        title: "Call-to-Action Areas",
        text:
          "Clear action areas guide visitors toward important business interactions and help support the sales experience.",
      },
    ],

    technologies: [
      {
        name: "React",
        text:
          "Used to build the website as a component-based frontend application with reusable interface elements.",
      },
      {
        name: "JavaScript",
        text:
          "Used for interactive behavior, application logic, navigation, and dynamic frontend functionality.",
      },
      {
        name: "Tailwind CSS",
        text:
          "Used to build the responsive layout, typography, spacing, buttons, cards, and visual styling.",
      },
      {
        name: "React Router",
        text:
          "Used to organize navigation and create a structured multi-route website experience.",
      },
      {
        name: "Responsive Design",
        text:
          "Used to make the website work smoothly across desktop, tablet, and mobile screen sizes.",
      },
    ],

    workflow: [
      {
        number: "01",
        title: "Landing Experience",
        text:
          "Visitors enter through a modern landing experience designed to introduce the business, communicate its value, and immediately establish a professional visual identity.",
      },
      {
        number: "02",
        title: "Product Presentation",
        text:
          "Products and business solutions are displayed through structured sections that allow visitors to understand the available offerings and move naturally through the website.",
      },
      {
        number: "03",
        title: "Responsive Layout",
        text:
          "The website automatically adapts its layout to different screen sizes. Desktop users receive a wider presentation while mobile users receive a reorganized layout optimized for smaller screens.",
      },
      {
        number: "04",
        title: "Navigation & Actions",
        text:
          "Clear navigation and call-to-action areas guide visitors toward the relevant sections and help create a smooth path through the website.",
      },
      {
        number: "05",
        title: "Business Interaction",
        text:
          "The final structure gives visitors a clear understanding of the business and provides appropriate areas for taking the next action.",
      },
    ],

    liveUrl: "https://salespro-store.netlify.app/",
  },

  "ali-whatsapp-agent": {
    title: "AI WhatsApp Agent",
    category: "AI WhatsApp Automation",
    description:
      "An AI-powered WhatsApp automation agent that connects a WhatsApp account through QR code and automatically responds to incoming messages according to the configured AI behavior.",
    image:
      "/images/AI_WhatsApp_Agent_thumbnail_202609021142.jpeg",

    gallery: [
      "/images/AI_WhatsApp_Agent_thumbnail_202609021142.jpeg",
      "/images/AI_WhatsApp_Agent_welcome_page_202609021139.jpeg",
      "/images/Gemini_Generated_Image_31v86331v86331v8.jpg",
      "/images/WhatsApp_AI_Agent_layout_2K_202609021136.jpeg",
    ],

    overview:
      "Ali WhatsApp Agent is an AI-powered WhatsApp automation system designed to connect a WhatsApp account with an automated AI response system. The project begins with a dedicated welcome page where the user can establish the WhatsApp connection using a QR code. The QR code can be scanned through WhatsApp's Linked Devices functionality. After the connection is successfully established, the user is taken into a dedicated chat-style dashboard. From this dashboard, the AI agent can be switched ON or OFF and its talking behavior can be configured. Once the AI agent is enabled, incoming messages sent to the connected WhatsApp number can be handled automatically by the AI system. The project combines WhatsApp connectivity, an interactive management dashboard, AI-based response automation, configurable behavior, and a user-friendly interface into one complete workflow.",

    detailedSections: [
      {
        title: "WhatsApp Connection",
        text:
          "The system begins by providing a dedicated connection experience. A QR code is displayed on the welcome page, allowing the user to connect the desired WhatsApp account through WhatsApp Linked Devices. This creates a simple connection flow without requiring the user to manually configure complicated connection settings.",
      },
      {
        title: "Welcome Page",
        text:
          "The welcome page acts as the entry point of the automation system. It introduces the connection process and provides the QR-based mechanism required to establish the WhatsApp session.",
      },
      {
        title: "Chat-Style Dashboard",
        text:
          "After the WhatsApp account has been connected, the interface changes into a dedicated dashboard with a chat-oriented design. The dashboard is designed around the idea of managing an AI conversation agent rather than looking like a traditional business administration panel.",
      },
      {
        title: "AI Agent Control",
        text:
          "The user has direct control over the AI automation through an ON/OFF control. This makes it possible to activate the automated response system when needed and disable it when the user wants to handle conversations manually.",
      },
      {
        title: "Talking Behavior",
        text:
          "The system allows the AI agent's talking behavior to be configured. This gives the user control over how the automated agent should communicate and respond to incoming WhatsApp messages.",
      },
      {
        title: "Automatic Responses",
        text:
          "When the AI agent is enabled, incoming WhatsApp messages sent to the connected number can be processed by the automation system and answered automatically according to the configured AI behavior.",
      },
      {
        title: "Connected Account Workflow",
        text:
          "The complete experience is organized around a simple sequence: connect WhatsApp, enter the dashboard, configure the agent, activate automation, and allow the AI system to handle incoming messages.",
      },
    ],

    features: [
      {
        title: "QR Code Connection",
        text:
          "The system provides a QR-based connection screen that allows the user to begin the WhatsApp connection process directly from the welcome page.",
      },
      {
        title: "WhatsApp Linked Devices",
        text:
          "The connection flow works around WhatsApp's Linked Devices functionality, allowing the user to connect the WhatsApp account through a familiar QR scanning process.",
      },
      {
        title: "AI Agent ON/OFF",
        text:
          "A direct control allows the user to activate or deactivate the AI agent whenever automated responses are required or paused.",
      },
      {
        title: "Automatic Message Replies",
        text:
          "When automation is active, incoming messages can be handled automatically by the configured AI response system.",
      },
      {
        title: "Custom AI Behavior",
        text:
          "The user can configure how the AI agent should talk and respond, making the automation behavior more controllable and adaptable.",
      },
      {
        title: "Chat-Style Dashboard",
        text:
          "The management interface uses a conversation-oriented dashboard design that fits naturally with the purpose of a WhatsApp AI assistant.",
      },
      {
        title: "Connected Account Management",
        text:
          "The dashboard provides a central place to manage the connected WhatsApp automation after the initial QR connection is completed.",
      },
      {
        title: "AI Response Automation",
        text:
          "The core system automates responses so that the connected WhatsApp account can handle incoming communication through AI-generated behavior.",
      },
      {
        title: "Incoming Message Handling",
        text:
          "Messages arriving on the connected WhatsApp number form the main trigger for the automated response workflow.",
      },
      {
        title: "Responsive Interface",
        text:
          "The interface is designed to remain usable across different screen sizes, allowing the dashboard experience to adapt to desktop and smaller devices.",
      },
    ],

    technologies: [
      {
        name: "React",
        text:
          "Used to build the interactive frontend, dashboard components, controls, screens, and reusable interface elements.",
      },
      {
        name: "JavaScript",
        text:
          "Used for application logic, interface interactions, state handling, and dynamic behavior throughout the agent dashboard.",
      },
      {
        name: "AI Automation",
        text:
          "The project uses AI-driven automation to process incoming messages and generate automated responses according to configured behavior.",
      },
      {
        name: "WhatsApp Integration",
        text:
          "The system is designed around connecting a WhatsApp account through a QR-based Linked Devices workflow.",
      },
      {
        name: "Responsive Design",
        text:
          "The interface is structured to remain usable across desktop and mobile screen sizes.",
      },
    ],

    workflow: [
      {
        number: "01",
        title: "Welcome Page",
        text:
          "The user first opens the AI WhatsApp Agent and reaches the dedicated welcome page. This page provides the initial connection experience and displays the QR code required to connect the WhatsApp account.",
      },
      {
        number: "02",
        title: "Scan QR Code",
        text:
          "The user opens WhatsApp's Linked Devices functionality and scans the QR code displayed by the agent. This establishes the connection between the WhatsApp account and the automation system.",
      },
      {
        number: "03",
        title: "Connection Completed",
        text:
          "Once the connection is successfully established, the system moves the user from the initial welcome experience into the main agent management interface.",
      },
      {
        number: "04",
        title: "AI Dashboard",
        text:
          "The user enters a chat-style dashboard where the connected WhatsApp automation can be monitored and configured. The dashboard becomes the main control center for the AI agent.",
      },
      {
        number: "05",
        title: "Enable AI Agent",
        text:
          "The user can switch the AI agent ON when automated responses are required. The agent can also be switched OFF when the user wants to stop automated responses.",
      },
      {
        number: "06",
        title: "Configure Talking Behavior",
        text:
          "The user can configure the agent's talking behavior so that the AI response system follows the desired communication approach.",
      },
      {
        number: "07",
        title: "Receive Incoming Message",
        text:
          "A message sent to the connected WhatsApp number enters the automation workflow when the AI agent is active.",
      },
      {
        number: "08",
        title: "AI Generates Response",
        text:
          "The connected AI automation processes the incoming communication according to the configured behavior and prepares an automated response.",
      },
      {
        number: "09",
        title: "Automatic Reply",
        text:
          "The generated response is delivered automatically through the connected WhatsApp workflow, allowing the agent to handle incoming communication without requiring a manual response for every message.",
      },
    ],

    liveUrl: "https://ali-agent.serveousercontent.com",
  },
};

function FeatureCard({ feature }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-orange-500/30 hover:bg-orange-500/[0.04]">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
          <Check size={16} />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {feature.title}
          </h3>

          <p className="mt-2 text-xs leading-5 text-gray-400">
            {feature.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function WhatsAppGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  const previousImage = () => {
    setActiveIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="mt-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
        <img
          src={images[activeIndex]}
          alt={"AI WhatsApp Agent screen " + (activeIndex + 1)}
          className="h-[260px] w-full object-cover transition duration-700 sm:h-[400px] lg:h-[500px]"
        />

        <button
          type="button"
          onClick={previousImage}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:border-orange-500 hover:bg-orange-500"
          aria-label="Previous image"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:border-orange-500 hover:bg-orange-500"
          aria-label="Next image"
        >
          <ArrowRight size={18} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-gray-300 backdrop-blur">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setActiveIndex(index)}
            className={
              "overflow-hidden rounded-xl border transition " +
              (activeIndex === index
                ? "border-orange-500"
                : "border-white/10 hover:border-orange-500/50")
            }
          >
            <img
              src={image}
              alt={"WhatsApp Agent thumbnail " + (index + 1)}
              className="h-20 w-full object-cover transition duration-300 hover:scale-105 sm:h-28"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Workflow({ steps, title }) {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-orange-500/20 hover:bg-orange-500/[0.02]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-orange-400">
                {step.number}
              </span>

              <div className="h-px w-16 bg-orange-500/20" />
            </div>

            <h3 className="text-lg font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnologyDetails({ technologies }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="rounded-xl border border-white/10 bg-black/30 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
              <Check size={15} />
            </div>

            <h3 className="text-sm font-semibold text-white">
              {technology.name}
            </h3>
          </div>

          <p className="mt-3 text-xs leading-5 text-gray-400">
            {technology.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold">Project Not Found</h1>

          <p className="mt-3 text-gray-400">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const isWhatsAppAgent = projectId === "ali-whatsapp-agent";
  const isSalesPro = projectId === "salespro-dashboard";

  return (
    <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-orange-400"
        >
          <ArrowLeft size={17} />
          Back to Projects
        </Link>

        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              {project.category}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
              <span className="text-orange-500">.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300"
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
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
                >
                  View Live Project
                  <ArrowUpRight size={17} />
                </a>
              )}

              {isSalesPro && project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
                >
                  Download App
                  <Download size={17} />
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <img
              src={project.image}
              alt={project.title}
              className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:h-[360px]"
            />
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Project Overview
          </p>

          <h2 className="mt-2 text-3xl font-bold">About This Project</h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm leading-7 text-gray-400">
              {project.overview}
            </p>
          </div>
        </section>

        {project.detailedSections && (
          <section className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Project Details
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Understanding the System
            </h2>

            <div className="mt-8 space-y-5">
              {project.detailedSections.map((section, index) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-orange-500/20 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-xs font-semibold text-orange-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {section.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {isWhatsAppAgent && project.gallery && (
          <section className="mt-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Interface Preview
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                AI WhatsApp Agent Screens
              </h2>

              <p className="mt-3 max-w-2xl text-gray-400">
                Explore the welcome page, WhatsApp connection flow, AI
                controls, connected account experience, and chat-style
                automation dashboard.
              </p>
            </div>

            <WhatsAppGallery images={project.gallery} />
          </section>
        )}

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Project Features
          </p>

          <h2 className="mt-2 text-3xl font-bold">What I Built</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Development Process
          </p>

          <Workflow
            steps={project.workflow}
            title={
              isWhatsAppAgent
                ? "WhatsApp AI Automation Flow"
                : "How This Project Works"
            }
          />
        </section>

        <section className="mt-20">
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-7 sm:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Technologies
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Built with modern technologies
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                The project was developed using modern frontend technologies
                and development practices selected according to the
                requirements of the system.
              </p>

              <TechnologyDetails
                technologies={project.technologies}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-gray-300"
                  >
                    {technology.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 hidden shrink-0 sm:block">
              <ExternalLink
                className="text-orange-400"
                size={42}
              />
            </div>
          </div>
        </section>

        {isSalesPro && (
          <section className="mt-16">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center sm:p-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                <Download size={22} />
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                SalesPro Mobile Application
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                The SalesPro project also includes a mobile application.
                Download the application package and explore the mobile
                version of the SalesPro business management system.
              </p>

              <a
                href={project.downloadUrl}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Download SalesPro App
                <Download size={18} />
              </a>
            </div>
          </section>
        )}

        {project.liveUrl && (
          <section className="mt-16 text-center">
            <p className="text-gray-400">
              Want to explore this project?
            </p>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
            >
              Open Live Project
              <ArrowUpRight size={18} />
            </a>
          </section>
        )}
      </div>
    </main>
  );
}