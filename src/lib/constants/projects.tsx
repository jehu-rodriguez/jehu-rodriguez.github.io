import { FaGithub } from "react-icons/fa6";

export const cards = [
  {
    description: "React | Next.js | Django | Django Ninja",
    title: "E- Commerce Web Application for Hufano Handicraft Wooden Decors",
    src: "/hufano-handicraft.png",
    ctaText: "Visit",
    ctaLink: "https://woodcraft-frontend.vercel.app/",
    sourceLink: "",
    sourceLinkText: "Source",
    sourceLinkIcon: <FaGithub size={15} />,
    sourceUi: "",
    sourceUiIcon: <FaGithub size={15} />,
    sourceUiText: "Source(UI)",
    content: () => {
      return (
        <p>An e-commerce website for a local handicraft business featuring a 3D model generator for custom product previews and online payments through Payrex.</p>
      );
    },
  },
  {
    description: "HTML | CSS | Django",
    title: "Feedback and Evaluation System with Sentiment Analysis ",
    src: "/feedback-system.png",
    ctaText: "Visit",
    ctaLink: "",
    sourceLink: "",
    sourceLinkText: "Source",
    sourceLinkIcon: <FaGithub size={15} />,
    content: () => {
      return (
        <p>A web-based feedback and evaluation system for Cavite State University – Bacoor City Campus, featuring sentiment analysis to assess and interpret user responses.</p>
      );
    },
  },
];
