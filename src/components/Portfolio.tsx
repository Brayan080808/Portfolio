import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Globe, X, GraduationCap, Briefcase } from "lucide-react";
import {SiReact,SiDjango,SiNestjs,SiPostgresql,SiTypescript,SiGit,SiTailwindcss} from "react-icons/si";
import Navigation from "./header.tsx"
import EmailForm from './EmailForm'
import { Copyright } from "lucide-react";
import imagen3 from "/internetPc.png";
import gif3 from "/animacion3.gif";
import imagen4 from "/Screenshot65.png";
import imagen5 from "/Screenshot77.png";
import imagen7 from "/Screenshot81.png";
import imagen8 from "/Screenshot84.png";
import imagen10 from "/Screenshot86.png";
import imagen12 from "/Screenshot92.png";
import imagen13 from "/Screenshot94.png";
import imagen14 from "/Screenshot95.png";
import imagen15 from "/Screenshot96.png";
import uci from "/uci.png";
import ProjectCard from "./ProjectCard";
import DownloadPDFButton from "./DownloadPDFButton.tsx";

interface Project {
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  fullDescription:string;
  category: string;
  link: string; 
  github: string; 
  technologies: string[]; // Cambiado a un array de cadenas
}

interface AnimatedSectionProps{
  children: ReactNode
}

const TypewriterEffect: React.FC<{ words: string[] }>  = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setCurrentText(
            word.substring(
              0,
              isDeleting ? currentText.length - 1 : currentText.length + 1
            )
          );
        }
      },
      isDeleting ? 30 : 50
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return <span>{currentText}</span>;
}

const AnimatedSection:React.FC<AnimatedSectionProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function Component() {

  const [, setHoveredProject] = useState<number>();
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
   
        fetch('https://financeflowbackend.aam.cu/');
        fetch('https://freshshop-dz9w.onrender.com/');
  
    },[]);

  const projects = [
    {
      title: "Freshshop",
      description:
        "A full-featured online shopping platform with cart and checkout functionality among others.",
      fullDescription:
        "This e-commerce platform provides a seamless shopping experience for users. It includes features such as product browsing, search functionality, user accounts, shopping cart management, and secure checkout process. The platform is designed to be scalable and can handle a large number of products and concurrent users.",
      image: `${imagen8}`,
      additionalImages: [`${imagen8}`, `${imagen10}`, `${imagen12}`],
      category: "web",
      link: "http://freshshopclient.onrender.com/",
      github: "https://github.com/Brayan080808/FreshshopClient.git",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Django",
        "Tailwindcss",
        "REST API",
      ],
    },
    
    {
      title: "FinanceFlow",
      description:
        "This project involved the development of a dashboard designed to manage and track finances for businesses.",
      fullDescription:
        "This project involved the development of a dashboard designed to manage and track finances for businesses. It features a user authentication system, graphical models for visualizing information from various perspectives, options for statistical analysis, time-based analytics, and tips for better economic management.",
      image: `${imagen5}`,
      additionalImages: [`${imagen5}`, `${imagen4}`, `${imagen7}`],
      category: "mobile",
      link: "https://financeflow.aam.cu/",
      github: "https://github.com/Brayan080808/FinanceFlow",
      technologies: [
        "Reactjs",
        "PostgreSQL",
        "Tailwindcss",
        "Nestjs",
        "Nodejs",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website showcases the work of a full stack developer in a sleek and modern design.",
      fullDescription:
        "This portfolio website showcases the work of a full stack developer in a sleek and modern design. It features a responsive layout, project showcases with live demos, and a contact form for inquiries. Built with React and Node.js, the site emphasizes performance and user experience, ensuring fast load times and smooth navigation. Each project highlights technologies used and challenges overcome, reflecting the developer's skills and passion for innovative solutions.",
      image: `${imagen13}`,
      additionalImages: [`${imagen13}`, `${imagen14}`, `${imagen15}`],
      category: "web",
      link: "#",
      github: "https://github.com/Brayan080808/Portfolio.git",
      technologies: ["React.js", "Tailwind CSS", "Sanity.io", "Framer Motion"],
    },
  ];

  const techIcons = [
    { name: "Django", icon: <SiDjango className="w-6 h-6" /> },
    { name: "React.js", icon: <SiReact className="w-6 h-6" /> },
    { name: "Nest.js", icon: <SiNestjs className="w-6 h-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
    { name: "PostreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: "Git&Github", icon: <SiGit className="w-6 h-6" /> },
  ];

  const education = [
    {
      degree: "Computer Science Engineering",
      institution: "University of Computer Sciences",
      year: "2022 - 2026",
      description:
        "Focused on software engineering, data structures, and algorithms.",
      logo: uci,
    },
  ];

  const skills = [
    "Front-end Development",
    "Back-end Development",
    "Database Design",
    "API Development",
    "UI/UX Design",
    "Agile Methodologies",
    "Test-Driven Development",
  ];

  return (
    <div className="min-h-screen  bg-transparent text-white overflow-x-clip relative">
      <header className="sticky top-0 z-50 backdrop-blur-md ">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold flex items-center gap-2">
              <Globe className="w-8 h-8 text-emerald-400" />
              <span>Web Developer Portfolio</span>
            </a>
            <Navigation />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className=" flex justify-between sm:items-center container h-[88vh] mx-auto px-4 py-4 sm:py-20 
        sm:flex ite  relative
        ">
          <div className="max-w-2xl">
            <h1 className=" text-6xl sm:text-7xl font-bold mb-8 h-48 sm:h-32  ">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
                Hello, I&apos;m
              </span>
              <br />
              <span className="h-[1.2em]  inline-block">
                <TypewriterEffect words={["Web Developer", "Bryan"]} />
              </span>
            </h1>
            <div className="h-20">
              <p className="text-gray-400 mb-8">
                Crafting digital experiences with modern web technologies
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">
                <a href="#contact">
                  Hire Me
                </a>
              </button>
              <DownloadPDFButton />
            </div>
          </div>

          <div className=" h-[470px] mb-24 absolute right-10 overflow-hidden">
            <img
              src={gif3}
              alt="Developer illustration"
              width={500}
              height={500}
              className="hidden lg:block object-fill"
            />
          </div>


    
        </section>

        {/* About Section */}
        <AnimatedSection>
        <section id="about" className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={imagen3}
              alt="Workspace"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 mb-6">
                I am a web developer with 2 years of experience developing all
                kinds of projects, using technologies such as Django, NestJS,
                PostgreSQL, Tailwind, and ReactJS, with a great passion for
                learning every day and achieving new goals.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techIcons.map((tech) => (
                    <div
                      key={tech.name}
                      className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center gap-2"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection >
        <section id="projects" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <ProjectCard
                key={key}
                project={project}
                setHoveredProject={setHoveredProject}
                setSelectedProject={setSelectedProject}
                setIsModalOpen={setIsModalOpen}
                index={key}
              />
            ))}
          </div>
        </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
        <section id="skills" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What I Can Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-center gap-4"
              >
                <Briefcase className="w-6 h-6 text-emerald-400" />
                <span className="text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </section>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection>
          <section id="education" className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 mb-8"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className=" w-16 h-16 bg-gray-800 rounded-xl overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className=" object-fill w-full h-full"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-300 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 mb-3">{edu.year}</p>
                      <p className="text-gray-500">{edu.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection>
         <EmailForm/>
        </AnimatedSection>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 ">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/" className="text-xl font-bold flex items-center gap-2">
            <Globe className="w-6 h-6 text-emerald-400" />
            <span>Web Developer Portfolio</span>
          </a>
          <p className="text-gray-400 flex gap-2"><Copyright className="pl-1 "/>All rights reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 overflow-hidden cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 mx-4 p-5  sm:p-8 rounded-lg overflow-hidden cursor-default"
            >
              {/* max-w-3xl w-full max-h-[90vh] */}
              <div className="bg-gray-900 rounded-lg sm:w-full max-w-3xl max-h-[90vh]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-emerald-400">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="grid gap-4 mb-4 ">
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject?.additionalImages.map((img:string, i:number) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                       
                        className="w-auto h-[5rem] sm:h-36 object-fill rounded-md border border-gray-700"
                      />
                    ))}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-300">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className=" px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full  text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-300">
                      Description
                    </h4>
                    <p className="text-gray-300 leading-5" >
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 font-bold py-2 px-4 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
