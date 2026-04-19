import { useState, useRef, useEffect, useMemo, ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Globe, X, GraduationCap, Briefcase } from "lucide-react";
import Satelite from "./Satelite.tsx";
import {
  SiReact,
  SiDjango,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
  SiGit,
  SiTailwindcss,
  SiAngular,
  SiJest,
  SiOdoo,
} from "react-icons/si";
import Navigation from "./header.tsx";
import EmailForm from "./EmailForm";
import { Copyright } from "lucide-react";
import imagen3 from "/internetPc.webp";

import imagen4 from "/Screenshot65.png";
import imagen5 from "/Screenshot77.png";
import imagen7 from "/Screenshot81.png";
import imagen8 from "/Screenshot84.webp";
import imagen10 from "/Screenshot86.png";
import imagen12 from "/Screenshot92.png";
import imagen13 from "/Screenshot.webp";
import imagen14 from "/Screenshot95.png";
import imagen15 from "/Screenshot96.png";

import olo1 from "/olo1.png";
import olo2 from "/olo2.png";
import olo3 from "/olo3.png";

import reserva1 from "/reserva1.png";
import reserva2 from "/reserva2.png";
import reserva3 from "/reserva3.png";

import backoffice1 from "/backoffice1.png";
import backoffice2 from "/backoffice2.png";
import backoffice3 from "/backoffice3.png";

import emailjs from "@emailjs/browser";

import uci from "/uci.png";
import ProjectCard from "./ProjectCard";
import DownloadPDFButton from "./DownloadPDFButton.tsx";
import WorkExperienceTimeline from "./WorkExperienceTimeline";
import {
  portfolioCopy,
  workExperienceByLang,
  getInitialLangFromBrowser,
  type Lang,
} from "../i18n/portfolioCopy";

export interface Project {
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  fullDescription: string;
  category: string;
  link: string | null;
  github: string | null;
  technologies: string[]; // Cambiado a un array de cadenas
}

type BilingualText = Record<Lang, string>;

type ProjectI18n = Omit<Project, "title" | "description" | "fullDescription"> & {
  title: BilingualText;
  description: BilingualText;
  fullDescription: BilingualText;
};

const PROJECTS_I18N: ProjectI18n[] = [
  {
    title: {
      en: "Restaurant backoffice",
      es: "Backoffice para restaurantes",
    },
    description: {
      en: "Admin platform for restaurants and multi-channel sales with rich reporting.",
      es: "Plataforma de administración para restaurantes y ventas multicanal con informes.",
    },
    fullDescription: {
      en: "Backoffice to streamline restaurant operations across delivery, in-house sales, and reservations: inventory, staff, orders, and analytics for better decisions.",
      es: "Backoffice para operaciones de restaurantes en delivery, venta local y reservas: inventario, personal, pedidos y analíticas para decidir con datos.",
    },
    image: `${backoffice1}`,
    additionalImages: [`${backoffice1}`, `${backoffice2}`, `${backoffice3}`],
    category: "web",
    link: "https://office.juvomos.com",
    github: "",
    technologies: ["Angular", "PrimeNG", "Redux", "TypeScript"],
  },
  {
    title: {
      en: "Online restaurant sales",
      es: "Ventas en línea para restaurantes",
    },
    description: {
      en: "Online ordering with maps, admin, payments, and product customization.",
      es: "Pedidos en línea con mapas, administración, pagos y personalización de productos.",
    },
    fullDescription: {
      en: "Platform for restaurant online sales: live location for delivery, admin for orders and catalog, secure payments (Stripe), and multi-channel reach—including hybrid mobile with Ionic.",
      es: "Plataforma de ventas en línea para restaurantes: ubicación en vivo para reparto, administración de pedidos y catálogo, pagos seguros (Stripe) y multicanal, con app híbrida en Ionic.",
    },
    image: `${olo1}`,
    additionalImages: [`${olo1}`, `${olo2}`, `${olo3}`],
    category: "web",
    link: "https://olo.juvomos.com",
    github: null,
    technologies: [
      "Angular",
      "Redux",
      "Google Maps API",
      "Stripe",
      "Ionic",
    ],
  },
  {
    title: {
      en: "Business market dashboard",
      es: "Tablero de mercado empresarial",
    },
    description: {
      en: "Market analytics, Stripe flows, and AI-assisted insights for operators.",
      es: "Analíticas de mercado, pagos con Stripe e insights asistidos por IA.",
    },
    fullDescription: {
      en: "Dashboard to monitor price trends, manage Stripe-backed transactions, and surface AI recommendations—plus tools for internal deals and operations.",
      es: "Tablero para seguir tendencias de precios, operar flujos con Stripe y obtener recomendaciones con IA, además de gestionar acuerdos y procesos internos.",
    },
    image: `${reserva1}`,
    additionalImages: [`${reserva1}`, `${reserva2}`, `${reserva3}`],
    category: "web",
    link: "https://reservaerp.com/",
    github: null,
    technologies: [
      "React",
      "Django REST Framework",
      "Stripe",
      "PostgreSQL",
      "Material UI",
      "OpenAI API",
      "Chart.js",
    ],
  },
  {
    title: { en: "FreshShop", es: "FreshShop" },
    description: {
      en: "E‑commerce for food sales with cart, checkout, payments, and admin tools.",
      es: "E‑commerce de alimentos con carrito, pago, administración y más.",
    },
    fullDescription: {
      en: "E‑commerce platform for food sales: product browsing, authentication, admin panel, payment gateways, shopping cart, checkout, and search. Code on GitHub; deployment live on Render.",
      es: "Plataforma de comercio electrónico para venta de alimentos: catálogo, autenticación, panel de administración, pasarelas de pago, carrito, compras y búsqueda. Código en GitHub; despliegue activo en Render.",
    },
    image: `${imagen8}`,
    additionalImages: [`${imagen8}`, `${imagen10}`, `${imagen12}`],
    category: "web",
    link: "https://freshshopclient.onrender.com/",
    github:
      "https://github.com/Brayan080808/Full-Stack-Econmerce-Django-React.git",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
      "Git & GitHub",
    ],
  },
  {
    title: { en: "FinanceFlow", es: "FinanceFlow" },
    description: {
      en: "Dashboard to manage and track business finances and analytics.",
      es: "Tablero para gestionar y analizar las finanzas de un negocio.",
    },
    fullDescription: {
      en: "Financial dashboard with authentication, charts, statistics, time-based analytics, and guidance for better money management.",
      es: "Tablero financiero con autenticación, gráficos, estadísticas, análisis temporal y recomendaciones para una mejor gestión económica.",
    },
    image: `${imagen5}`,
    additionalImages: [`${imagen5}`, `${imagen4}`, `${imagen7}`],
    category: "mobile",
    link: "https://financeflow.aam.cu/",
    github: "https://github.com/Brayan080808/FinanceFlow",
    technologies: ["React", "PostgreSQL", "Tailwind CSS", "NestJS", "Node.js"],
  },
  {
    title: { en: "Portfolio website", es: "Sitio portafolio" },
    description: {
      en: "Personal portfolio with projects, experience, and contact.",
      es: "Portafolio personal con proyectos, experiencia y contacto.",
    },
    fullDescription: {
      en: "Responsive portfolio with project showcases, bilingual UI, smooth motion, and a contact form—focused on performance and UX.",
      es: "Portafolio responsivo con proyectos, interfaz bilingüe, animaciones fluidas y formulario de contacto, pensado en rendimiento y UX.",
    },
    image: `${imagen13}`,
    additionalImages: [`${imagen13}`, `${imagen14}`, `${imagen15}`],
    category: "web",
    link: "https://portfolio-ab6j.onrender.com/",
    github: "https://github.com/Brayan080808/Portfolio.git",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
];

interface AnimatedSectionProps {
  children: ReactNode;
}

const TypewriterEffect: React.FC<{ words: string[] }> = ({ words }) => {
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
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
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
};

export default function Component() {
  const [, setHoveredProject] = useState<number>();
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(() => getInitialLangFromBrowser());

  const t = portfolioCopy[lang];

  const projects = useMemo(
    () =>
      PROJECTS_I18N.map((p) => ({
        title: p.title[lang],
        description: p.description[lang],
        fullDescription: p.fullDescription[lang],
        image: p.image,
        additionalImages: p.additionalImages,
        category: p.category,
        link: p.link,
        github: p.github,
        technologies: p.technologies,
      })),
    [lang]
  );

  const workExperience = workExperienceByLang[lang];

  useEffect(() => {
    fetch("https://financeflowbackend.aam.cu/");
    fetch("https://freshshopclient.onrender.com/");

    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      fetch(`http://ip-api.com/json/${data.ip}`)
      .then(response => response.json())
      .then(data => {
        const templateParamsm = {
          to_email: "",
          subject: "New visitor",
          message: "Someone has visited your portfolio",
        };

        emailjs.send(
          "service_9qmfrib",
          "template_bdfwlzd",
          {
            ...templateParamsm,
            message: templateParamsm.message +  JSON.stringify(data)
          },
          "Hqsub6P4NuqvTjep2"
        );
      });
    });
// 8.8.8.8
    
  }, []);

  const techIcons = [
    { name: "React", icon: <SiReact className="w-6 h-6" /> },
    { name: "Angular", icon: <SiAngular className="w-6 h-6" /> },
    { name: "Django", icon: <SiDjango className="w-6 h-6" /> },
    { name: "NestJS", icon: <SiNestjs className="w-6 h-6" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
    { name: "Git & GitHub", icon: <SiGit className="w-6 h-6" /> },
    { name: "Jest", icon: <SiJest className="w-6 h-6" /> },
    { name: "Odoo", icon: <SiOdoo className="w-6 h-6" /> },
  ];

  const education = useMemo(
    () => [
      {
        degree: t.education.degree,
        institution: t.education.institution,
        year: "2022 - 2026",
        description: t.education.description,
        logo: uci,
      },
    ],
    [t.education.degree, t.education.institution, t.education.description]
  );

  const skills = t.softSkills;

  return (
    <div className="min-h-screen  bg-transparent text-white overflow-x-clip relative">
      <header className="sticky top-0 z-50 backdrop-blur-md ">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold flex items-center gap-2">
              <Globe className="w-8 h-8 text-emerald-400" />
              <span className="max-w-[min(100%,14rem)] text-xl leading-tight sm:max-w-none sm:text-2xl">
                {t.brand}
              </span>
            </a>
            <Navigation
              lang={lang}
              onLangChange={setLang}
              navItems={t.nav}
              hireMeLabel={t.hireMe}
              downloadCvLabel={t.downloadCv}
            />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className=" flex justify-between sm:items-center container h-[88vh] mx-auto px-4 py-4 sm:py-20 
        sm:flex ite  relative
        "
        >
          <div className="max-w-3xl">
            <h1 className="text-6xl sm:text-7xl font-bold mb-8 h-48 sm:h-32  ">
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
                {t.heroHello}
              </span>
              <br />
              <span className="h-[1.2em]  inline-block">
                <TypewriterEffect
                  key={lang}
                  words={[...t.typewriterWords]}
                />
              </span>
            </h1>
            <div className="h-20">
              <p className="text-gray-400 mb-8">{t.heroSubtitle}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
              >
                {t.hireMe}
              </a>
              <DownloadPDFButton label={t.downloadCv} lang={lang} />
            </div>
          </div>

          <Satelite />
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
                <h2 className="text-4xl font-bold mb-6">{t.aboutTitle}</h2>
                <p className="text-gray-400 mb-4">{t.aboutBody}</p>
                <p className="text-gray-500 mb-6 text-sm">{t.aboutLanguages}</p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4">
                    {t.aboutSkillsTitle}
                  </h3>
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

        {/* Experience — línea de tiempo estilo LinkedIn */}
        <AnimatedSection>
          <section id="experience" className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-4 text-center">
              {t.experienceTitle}
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              {t.experienceIntro}
            </p>
            <WorkExperienceTimeline items={workExperience} />
          </section>
        </AnimatedSection>

       {/* Projects Section */}
        <AnimatedSection>
          <section id="projects" className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold mb-12 text-center">
              {t.projectsTitle}
            </h2>
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
              {t.skillsSectionTitle}
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
            <h2 className="text-4xl font-bold mb-12 text-center">
              {t.educationTitle}
            </h2>
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
          <EmailForm
            contactCopy={t.contact}
            contactEmail="bryanayalaacosta@gmail.com"
            phoneDisplay="+53 58683048"
            locationDisplay={
              lang === "es" ? "La Habana, Cuba" : "Havana, Cuba"
            }
          />
        </AnimatedSection>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900 ">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/" className="text-xl font-bold flex items-center gap-2">
            <Globe className="w-6 h-6 text-emerald-400" />
            <span>{t.brand}</span>
          </a>
          <p className="text-gray-400 flex gap-2">
            <Copyright className="pl-1 " />
            {t.footerRights}
          </p>
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
                    {selectedProject?.additionalImages.map(
                      (img: string, i: number) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          className="w-auto h-[5rem] sm:h-36 object-fill rounded-md border border-gray-700"
                        />
                      )
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-emerald-300">
                      {t.modalTech}
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
                      {t.modalDescription}
                    </h4>
                    <p className="text-gray-300 leading-5">
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  {
                    !!selectedProject.link && (
                  <a

                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                  >
                    {t.viewProject}
                  </a>
                    )
                  }

                                    {
                    !!selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 font-bold py-2 px-4 rounded"
                  >
                    {t.github}
                  </a>
                    )
                  }


                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
