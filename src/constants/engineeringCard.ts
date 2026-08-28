import type { EngineeringProject } from "../types/engineering";

export const engineeringProjects: EngineeringProject[] = [
  {
    id: "uber-clone",
    title: "Uber Clone – Ride Booking Web Application",
    fileName: "uber-clone.json",
    status: "LIVE",
    accent: "emerald",

    json: `{
  "app": "Ride Booking",
  "auth": "JWT",
  "database": "MongoDB, MySQL",
  "frontend": "React.js",
  "demo": "#",
  "status": "LIVE"
}`,

    metrics: [
      { label: "Database", value: "MongoDB" },
      { label: "Auth", value: "JWT" },
      { label: "Backend", value: "Node.js" },
      { label: "API", value: "REST" },
      { label: "Frontend", value: "React" },
    ],
  },

  {
    id: "ai-chatbot",
    title: "AI Chatbot Application",
    fileName: "ai-chatbot.json",
    status: "LIVE",
    accent: "violet",

    json: `{
  "app": "AI Chatbot",
  "ai_model": "Gemini API",
  "realtime": "Socket.IO",
  "auth": "JWT + bcrypt",
   "Generative AI","LLMs","RAG",
  "database": "MongoDB (Mongoose)",
  "demo": "#",
  "status": "LIVE"
}`,

    metrics: [
      { label: "AI Model", value: "Gemini" },
      { label: "Realtime", value: "Socket.IO" },
      { label: "Auth", value: "JWT" },
      { label: "Security", value: "bcrypt" },
      { label: "Database", value: "MongoDB" },
    ],
  },

  {
    id: "car-rental",
    title: "Car Rental Website",
    fileName: "car-rental.json",
    status: "LIVE",
    accent: "blue",

    json: `{
  "app": "Car Rental",
  "feature": "Online Booking",
  "database": "MongoDB",
  "hosting": "Vercel",
  "demo": "https://car-rent-website-bice.vercel.app/",
  "status": "LIVE"
}`,

    metrics: [
      { label: "Hosting", value: "Vercel" },
      { label: "Database", value: "MongoDB" },
      { label: "Status", value: "Live" },
    ],
  },

  {
    id: "portfolio",
    title: "Developer Portfolio",
    fileName: "portfolio.json",
    status: "DEPLOYED",
    accent: "amber",

    json: `{
  "framework": "React",
  "styling": "Tailwind CSS",
  "language": "TypeScript",
  "demo": "#",
  "status": "DEPLOYED"
}`,

    metrics: [
      { label: "Sections", value: "5" },
      { label: "Components", value: "40+" },
      { label: "Projects", value: "4" },
    ],
  },
];