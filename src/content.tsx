// src/content.tsx
import { FaLaptopCode, FaCode } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import expressLogo from "@/assets/techstack/be/express.svg";
import mysqlLogo from "@/assets/techstack/be/mysql.svg";
import nodejsLogo from "@/assets/techstack/be/nodejs.svg";
import phpLogo from "@/assets/techstack/be/php.svg";
import chakraLogo from "@/assets/techstack/fe/chakra-ui.svg";
import reactLogo from "@/assets/techstack/fe/react.svg";
import tailwindLogo from "@/assets/techstack/fe/tailwind-css.svg";
import cLogo from "@/assets/techstack/programming/c.svg";
import javaLogo from "@/assets/techstack/programming/java.svg";
import pythonLogo from "@/assets/techstack/programming/python.svg";
import tsLogo from "@/assets/techstack/programming/typescript.svg";
import githubLogo from "@/assets/techstack/version_control/github.svg";
import kebab from "@/assets/projects/Kebab.svg";
import clip from "@/assets/projects/clip.svg";
import pokedex from "@/assets/projects/pokedex.svg";
import ufest from "@/assets/projects/Ufest.svg";
import ssh from "@/assets/projects/ssh.svg";
import ml from "@/assets/projects/ml.png";

// Tab Items
export const tabItems = [
  { value: "about", label: "About" },
  { value: "skills", label: "Skills" },
  { value: "projects", label: "Projects & Experience" },
];

// Tab Styles
export const tabStyles = {
  color: "yellow",
  textStyle: { base: "xs", xl: "lg" },
  _hover: { border: "1px solid yellow" },
  _focus: { outline: "none", border: "none" },
  bgColor: "transparent",
};

// Skills Data
export const skills = [
  {
    icon: <FaLaptopCode color={"yellow"} />,
    text: "Specialize in building responsive and efficient web applications using modern tools like React, Tailwind CSS, and Node.js.",
  },
  {
    icon: <FaCode color={"yellow"} />,
    text: "Currently learning backend development and embedded systems to expand my expertise.",
  },
  {
    icon: <TbBulb color={"yellow"} />,
    text: "Goal-oriented with a vision to contribute to projects that improve users' lives through innovation in IoT.",
  },
];

// Tech Stack Data
export const techStackData = [
  {
    title: "Frontend",
    color: "yellow",
    logos: [
      { src: reactLogo, alt: "react" },
      { src: chakraLogo, alt: "chakra-ui" },
      { src: tailwindLogo, alt: "tailwind-css" },
    ],
  },
  {
    title: "Backend",
    color: "yellow",
    logos: [
      { src: nodejsLogo, alt: "nodejs" },
      { src: expressLogo, alt: "express", filter: "invert(1)" },
      { src: mysqlLogo, alt: "mysql" },
      { src: phpLogo, alt: "php" },
    ],
  },
  {
    title: "Programming",
    color: "yellow",
    logos: [
      { src: cLogo, alt: "c" },
      { src: javaLogo, alt: "java" },
      { src: pythonLogo, alt: "python" },
      { src: tsLogo, alt: "typescript" },
    ],
  },
  {
    title: "Version Control",
    color: "yellow",
    logos: [{ src: githubLogo, alt: "github", filter: "invert(1)" }],
  },
];

// Certificates
export const certificates = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/Quinnoah/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/Quinnoah/responsive-web-design",
  },
  {
    title: "Relational Database",
    issuer: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/Quinnoah/relational-database-v8",
  },
];

export const projects = [
  {
    image: clip,
    bgColor: "#efe43d",
    name: "CLIP",
    title: "Carry List Item Partner (CLIP)",
    date: "2024 [Group Project]",
    role: "Frontend Developer",
    description:
      "An embedded system and mobile pervasive project designed to track users' items and display them on a web interface for easy organization and monitoring.",
    responsibilities:
      "In this project, I am responsible for developing the frontend interface using React and Chakra UI to create a user-friendly experience. I also collaborate with the design team to translate UI/UX designs into functional components.",
    tech: [
      { name: "React", color: "black", bgColor: "#4eb9d6" },
      { name: "Chakra UI", color: "black", bgColor: "#4ecbc1" },
    ],
    github: "https://github.com/CLIP-Carry-List-Item-Partner",
    web: "https://clip-hub.tech/",
  },

  {
    image: ml,
    bgColor: "white",
    name: "Melanoma Classifier",
    title: "Melanoma Classifier",
    date: "2024 [Personal Project]",
    role: "Machine Learning Engineer",
    description:
      "A machine learning project that aims to classify skin lesions as benign or malignant using convolutional neural networks. The model is trained on a dataset of skin images and evaluated based on accuracy and performance metrics.",
    responsibilities:
      "In this project, I'm responsible for preprocessing the dataset, training the model, and evaluating its performance. I also optimize the model to improve accuracy and reduce false positives.",
    tech: [{ name: "python", color: "yellow", bgColor: "#39719c" }],
    github: "https://github.com/VincentSVSutiono/Melanoma-Classifier",
    web: "",
  },
  {
    image: pokedex,
    bgColor: "#6a0520",
    name: "Pokedex",
    title: "Pokedex",
    date: "2024 [Personal Project]",
    role: "Frontend Developer",
    description:
      "A personal project that aims to create a Pokedex web application to display information about Pokemon, including their stats and abilities. The project uses the PokeAPI to fetch data and display it in a user-friendly interface.",
    responsibilities:
      "In this project, I'm responsible for developing the frontend interface and integrate the PokeAPI to fetch and display Pokemon data.",
    tech: [
      { name: "html", color: "black", bgColor: "#e7562e" },
      { name: "CSS", color: "black", bgColor: "#1477ba" },
      { name: "JavaScript", color: "black", bgColor: "#e8a62f" },
    ],
    github: "https://github.com/VincentSVSutiono/Pokedex-Freecodecamp",
    web: "",
  },
  {
    image: ufest,
    bgColor: "#4f1212",
    name: "UMN Festival 2024",
    title: "UMN Festival 2024",
    date: "2024 [Organization]",
    role: "Frontend Developer",
    description:
      "A celebration event organized to mark the anniversary of UMN, featuring various activities, performances, and exhibitions. The event website serves as a platform for attendees to register, view schedules, and access event information.",
    responsibilities:
      "In this project, I'm responsible for developing the frontend interface using React and Tailwind CSS to create a visually appealing and responsive design. I also collaborate with the backend team to ensure seamless integration and data flow.",
    tech: [
      { name: "React", color: "black", bgColor: "#4eb9d6" },
      { name: "Tailwind CSS", color: "white", bgColor: "#00bcff" },
    ],
    github: "https://github.com/EdwinLolo/Genova2.0",
    web: "https://umnfest.com/",
  },
  {
    image: kebab,
    bgColor: "#fff4e0",
    name: "Kebab Aryana",
    title: "Kebab Aryana",
    date: "2023 [Group Project]",
    role: "Backend Developer",
    description:
      "A community-driven website designed to promote and market Kebab Aryana, enhancing the business's online presence and visibility. The web features an administrative dashboard for tracking sales and managing content, while the user-facing side displays the menu, location information, and customer feedback.",
    responsibilities:
      "In this project, I'm responsible for implementing backend logic to support application functionality and managing the database to store and retrieve data. I also collaborate with the frontend team to ensure seamless integration and user experience.",
    tech: [
      { name: "php", color: "black", bgColor: "#7277ac" },
      { name: "Laravel", color: "black", bgColor: "#ff2c2b" },
      { name: "mysql", color: "white", bgColor: "#08668e" },
    ],
    github: "https://github.com/Web-Kebab-Aryana",
    web: "https://kebabaryana.com/",
  },
  {
    image: ssh,
    bgColor: "#000000",
    name: "Sumatra Sizzle House",
    title: "Sumatra Sizzle House (SSH)",
    date: "2023 [Group Project]",
    role: "Frontend Developer",
    description:
      "A restaurant website designed to highlight the unique culinary offerings of Sumatra, providing an engaging platform for customers to explore the menu and services.",
    responsibilities:
      "In this project, I'm responsible for developing the frontend interface using React and SCSS to create a user-friendly experience. I also collaborate with the design team to translate UI/UX designs into functional components.",
    tech: [
      { name: "React", color: "black", bgColor: "#4eb9d6" },
      { name: "SCSS", color: "white", bgColor: "#d2679e" },
    ],
    github: "https://github.com/AlbertTech23/uas-ssh",
    web: "https://uas-ssh.vercel.app/",
  },
];
