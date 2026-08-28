import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    title: "Uber Clone – Ride Booking Web Application",

    subtitle: "Full-Stack Ride Booking Platform",

    status: "Completed",

    description:
      "A production-grade, full-stack ride booking platform built on the MERN stack, delivering secure JWT-based authentication and authorization, seamless ride booking workflows, and reliable data persistence across MongoDB and MySQL. Engineered with a strong focus on RESTful API design, modular backend architecture, and a fully responsive React frontend for an end-to-end booking experience.",

    role: "Full Stack Developer",

    duration: "Personal Project",

    github: "https://github.com/Viveksingh022/-UBER_CLONE",

    demo: "#",

    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "MySQL",
      "REST APIs",
    ],

    features: [
      "Secure JWT Authentication & Authorization",
      "Real-Time Ride Booking Workflow",
      "Ride Details & Status Tracking",
      "RESTful API Architecture with Express.js",
      "Responsive React.js Frontend",
      "MongoDB & MySQL Data Persistence",
      "Modular, Scalable Backend Structure",
    ],

    metrics: [
      { label: "Database", value: "MongoDB" },
      { label: "Auth", value: "JWT" },
      { label: "Backend", value: "Node.js" },
      { label: "API", value: "REST" },
      { label: "Frontend", value: "React" },
    ],
  },

  {
    title: "AI Chatbot Application",

    subtitle: "AI-Powered Chatbot Web App",

    status: "Completed",

    description:
      "An AI-powered conversational platform built on the MERN stack and integrated with Google's Gemini API to deliver intelligent, context-aware responses. Implements secure one-on-one real-time messaging via Socket.IO, JWT-based authentication with bcrypt password hashing, and a RESTful backend built with Express.js and MongoDB (Mongoose) for efficient user and message data management. The frontend uses reusable React components and Tailwind CSS for a fast, responsive chat experience.",

    role: "Full Stack Developer",

    duration: "Personal Project",

    github: "#",

    demo: "#",

    tech: [
      "Gemini API",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Socket.IO",
      "bcrypt",
    ],

    features: [
      "Gemini API Integration for Intelligent Responses",
      "Real-Time One-on-One Messaging (Socket.IO)",
      "JWT Authentication & bcrypt Password Hashing",
      "RESTful APIs with Express.js & Mongoose",
      "Efficient User & Message Data Management",
      "Reusable React Components with Tailwind CSS",
      "Dynamic, Responsive Chat Interface",
    ],

    metrics: [
      { label: "AI Model", value: "Gemini" },
      { label: "Realtime", value: "Socket.IO" },
      { label: "Auth", value: "JWT" },
      { label: "Security", value: "bcrypt" },
      { label: "Database", value: "MongoDB" },
    ],
  },

  {
    title: "Car Rental Website",

    subtitle: "Online Car Booking Platform",

    status: "Deployed",

    description:
      "A modern car rental booking platform enabling users to browse a curated fleet of vehicles, view detailed specifications, and complete bookings through an intuitive, responsive interface. Built with a focus on clean UI/UX and smooth navigation, and deployed live on Vercel.",

    role: "Full Stack Developer",

    duration: "Personal Project",

    github: "https://github.com/Viveksingh022/Car-Rent-website",

    demo: "https://car-rent-website-bice.vercel.app/",

    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],

    features: [
      "Browse Available Cars",
      "Detailed Car Specifications Page",
      "Online Booking Flow",
      "Responsive UI",
      "Deployed on Vercel",
    ],

    metrics: [],
  },

  {
    title: "Developer Portfolio",

    subtitle: "Interactive Engineering Portfolio",

    status: "Deployed",

    description:
      "A modern, interactive developer portfolio built with React, TypeScript and Tailwind CSS to showcase projects, technical skills and experience through a polished, responsive interface with reusable component architecture.",

    role: "Frontend Engineer",

    duration: "2026",

    github: "#",

    demo: "#",

    tech: ["React", "TypeScript", "Tailwind CSS"],

    features: [
      "Responsive Design",
      "Project Showcase",
      "Interactive UI",
      "Reusable Components",
    ],

    metrics: [],
  },
];
