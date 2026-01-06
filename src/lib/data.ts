import { HeroContent } from "../components/hero/types";
import { Project } from "../types";
import { Pillar, Manifesto } from "../components/philosophy/types";
import { FormConfig, ThankYouContent } from "../components/consultation/types";

export const heroContent: HeroContent = {
  headline: "DIGITAL SERENITY.",
  subhead: "We craft interfaces so beautiful and intuitive, they feel like a breath of fresh air. Transform your complex ideas into pure, breathable light.",
  ctaLabel: "Begin the Journey",
  ctaTarget: "#consultation"
};

export interface ArsenalData {
  title: string;
  subtitle: string;
  projects: Project[];
}

export const arsenalData: ArsenalData = {
  title: "INDUSTRIAL PRECISION",
  subtitle: "SYSTEM_STATUS: OPERATIONAL // A collection of high-velocity digital artifacts.",
  projects: [
    {
      id: "01",
      title: "OBSIDIAN APEX",
      description: "System Profile: High-velocity analytics engine for dark-pool liquidity aggregation. Implements sub-millisecond data visualization pipelines.",
      tech: ["REACT", "TAILWIND", "D3.JS"],
      year: "2024",
      role: "LEAD ARCHITECT",
      color: "violet",
      image: "/images/obsidian-preview.jpg"
    },
    {
      id: "02",
      title: "LUMINA X1",
      description: "System Profile: IoT synchronization protocol for residential ambient computing environments. Features real-time websocket state management.",
      tech: ["NEXT.JS", "MOTION", "IOT"],
      year: "2024",
      role: "UI DESIGN",
      color: "amber",
      image: "/images/lumina-preview.jpg"
    },
    {
      id: "03",
      title: "INVO",
      description: "System Profile: Automated inventory heuristic model for large-scale supply chain logistics. Optimizes warehouse throughput via heuristic algorithms.",
      tech: ["RUST", "WASM", "REACT"],
      year: "2023",
      role: "FRONTEND",
      color: "emerald",
      image: "/images/invo-preview.jpg"
    },
    {
      id: "04",
      title: "OSTROVALE",
      description: "System Profile: Generative floral morphology simulator for digital horticulture research. Utilizes WebGL for organic structural growth.",
      tech: ["THREE.JS", "WEBGL", "VUE"],
      year: "2022",
      role: "FULL STACK",
      color: "rose",
      image: "/images/ostrovale-preview.jpg"
    },
    {
      id: "05",
      title: "ZCFAQ",
      description: "System Profile: Knowledge retrieval lattice for decentralized technical documentation. Semantic search architecture with vector embeddings.",
      tech: ["PYTHON", "TYPESCRIPT", "AI"],
      year: "2023",
      role: "CREATIVE DEV",
      color: "sky",
      image: "/images/zcfaq-preview.jpg"
    },
    {
      id: "06",
      title: "SAYNIAN",
      description: "System Profile: Natural language processing interface for cognitive load management. Adaptive UI patterns based on user stress metrics.",
      tech: ["NLP", "REACT", "NODE"],
      year: "2022",
      role: "UX LEAD",
      color: "indigo",
      image: "/images/saynian-preview.jpg"
    }
  ]
};

export const philosophyData = {
  manifesto: {
    tagline: "We do not sacrifice usability for aesthetics. We use aesthetics to enforce usability."
  } as Manifesto,
  pillars: [
    {
      id: "rigor",
      number: "01",
      label: "THE RIGOR",
      category: "Engineering",
      headline: "SYSTEMS ARCHITECTURE",
      iconType: "wireframe-cube",
      description: "Beauty without structure is decoration. My foundation is built on cryptographic security (Node/HMAC), scalable infrastructure, and type-safe reliability. I don't just write code; I engineer distinct, crash-proof ecosystems."
    },
    {
      id: "soul",
      number: "02",
      label: "THE SOUL",
      category: "Design",
      headline: "TACTILE ETHEREALISM",
      iconType: "liquid-drop",
      description: "Software should feel physical. I reject static pixels in favor of 'Living Interfaces' - environments that breathe, react to touch, and use motion physics to guide the user's intuition. We turn 'users' into 'operators'."
    },
    {
      id: "outcome",
      number: "03",
      label: "THE OUTCOME",
      category: "Business",
      headline: "HIGH-VELOCITY IMPACT",
      iconType: "arrow-target",
      description: "The 'Reactionary Gap' kills conversion. I bridge the divide between complex data and human perception. The result is not just a pretty website, but a high-performance conversion engine that commands authority."
    }
  ] as Pillar[]
};

export const consultationData = {
  formConfig: {
    projectTypes: [
      { id: "saas", label: "SaaS" },
      { id: "landing-page", label: "Landing Page" },
      { id: "dashboard", label: "Dashboard" },
      { id: "full-system", label: "Full System" }
    ],
    budgetRanges: [
      { id: "under-5k", label: "Under $5K" },
      { id: "5k-10k", label: "$5K - $10K" },
      { id: "10k-15k", label: "$10K - $15K" },
      { id: "15k-20k", label: "$15K - $20K" },
      { id: "20k-25k", label: "$20K - $25K" },
      { id: "25k-30k", label: "$25K - $30K" },
      { id: "30k-plus", label: "$30K+" }
    ],
    discoverySources: [
      { id: "social-media", label: "Social Media" },
      { id: "referral", label: "Referral" },
      { id: "google-search", label: "Google Search" }
    ],
    steps: [
      { id: 1, field: "personName", label: "What's your name?", placeholder: "Your full name" },
      { id: 2, field: "projectName", label: "What's your project called?", placeholder: "Project or company name" },
      { id: 3, field: "projectDescription", label: "Tell me about your project", placeholder: "Describe what you're building and any specific requirements..." },
      { id: 4, field: "projectType", label: "What type of project is this?" },
      { id: 5, field: "budgetRange", label: "What's your budget range?" },
      { id: 6, field: "discoverySource", label: "How did you find POISY?" },
      { id: 7, field: "preferredDate", label: "When would you like to chat?" }
    ]
  } as FormConfig,
  thankYouContent: {
    heading: "Message Received",
    subheading: "I'll be in touch within 24 hours to confirm our conversation.",
    note: "In the meantime, feel free to explore the work."
  } as ThankYouContent
};
