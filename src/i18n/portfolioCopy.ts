export type Lang = "en" | "es";

/**
 * Picks the first supported language from the browser's preference list
 * (`navigator.languages`), then `navigator.language`, matching only `en` and `es`.
 */
export function getInitialLangFromBrowser(): Lang {
  if (typeof navigator === "undefined") {
    return "en";
  }
  const candidates =
    navigator.languages && navigator.languages.length > 0
      ? Array.from(navigator.languages)
      : [navigator.language];

  for (const raw of candidates) {
    const tag = raw?.trim().toLowerCase();
    if (!tag) continue;
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("en")) return "en";
  }
  return "en";
}

export const portfolioCopy: Record<
  Lang,
  {
    brand: string;
    heroHello: string;
    heroSubtitle: string;
    hireMe: string;
    downloadCv: string;
    aboutTitle: string;
    aboutBody: string;
    aboutLanguages: string;
    aboutSkillsTitle: string;
    experienceTitle: string;
    experienceIntro: string;
    projectsTitle: string;
    skillsSectionTitle: string;
    educationTitle: string;
    footerRights: string;
    contact: {
      title: string;
      intro: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      send: string;
    };
    education: {
      degree: string;
      institution: string;
      description: string;
    };
    softSkills: string[];
    typewriterWords: [string, string];
    modalTech: string;
    modalDescription: string;
    viewProject: string;
    github: string;
    nav: { href: string; label: string }[];
  }
> = {
  en: {
    brand: "Web Developer Portfolio",
    heroHello: "Hello, I'm",
    heroSubtitle:
      "Full stack developer crafting web products with modern technologies.",
    hireMe: "Hire Me",
    downloadCv: "Download CV",
    aboutTitle: "About Me",
    aboutBody:
      "I am a web developer with four years of experience building a wide variety of projects, utilizing technologies such as Django, NestJS, PostgreSQL, Tailwind, ReactJS, Angular, and Odoo—driven by a strong passion for learning something new every day and achieving new milestones.",
    aboutLanguages:
      "Languages: Spanish (native), English — professional working level.",
    aboutSkillsTitle: "Tech stack",
    experienceTitle: "Experience",
    experienceIntro:
      "Roles and projects that shaped my work as a full stack developer.",
    projectsTitle: "My Projects",
    skillsSectionTitle: "Soft skills",
    educationTitle: "Education",
    footerRights: "All rights reserved.",
    contact: {
      title: "Contact",
      intro:
        "I'm open to new opportunities. Whether you have a question or just want to say hello, I'll do my best to get back to you!",
      emailPlaceholder: "Your email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your message",
      send: "Send message",
    },
    education: {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "University of Information Sciences (UCI)",
      description:
        "Software engineering, data structures, algorithms, and applied computing.",
    },
    softSkills: [
      "Productivity",
      "Teamwork",
      "Effective communication",
      "Stress management",
      "Adaptability",
      "Creativity",
    ],
    typewriterWords: ["Full Stack Developer", "Bryan"],
    modalTech: "Technologies used",
    modalDescription: "Description",
    viewProject: "View project",
    github: "GitHub",
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
  },
  es: {
    brand: "Portafolio de desarrollador web",
    heroHello: "Hola, soy",
    heroSubtitle:
      "Desarrollador full stack creando productos web con tecnologías modernas.",
    hireMe: "Contrátame",
    downloadCv: "Descargar CV",
    aboutTitle: "Sobre mí",
    aboutBody:
      "Soy desarrollador web con cuatro años de experiencia construyendo una amplia variedad de proyectos, utilizando tecnologías como Django, NestJS, PostgreSQL, Tailwind, ReactJS, Angular y Odoo, impulsado por una gran pasión por aprender algo nuevo cada día y alcanzar nuevos hitos.",
    aboutLanguages:
      "Idiomas: español (nativo), inglés — nivel profesional de trabajo.",
    aboutSkillsTitle: "Stack tecnológico",
    experienceTitle: "Experiencia",
    experienceIntro:
      "Roles y proyectos que marcaron mi trabajo como desarrollador full stack.",
    projectsTitle: "Mis proyectos",
    skillsSectionTitle: "Habilidades blandas",
    educationTitle: "Formación",
    footerRights: "Todos los derechos reservados.",
    contact: {
      title: "Contacto",
      intro:
        "Estoy abierto a nuevas oportunidades. Si tienes una pregunta o solo quieres saludar, haré lo posible por responderte.",
      emailPlaceholder: "Tu correo",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Tu mensaje",
      send: "Enviar mensaje",
    },
    education: {
      degree: "Licenciatura en Ingeniería Informática",
      institution: "Universidad de las Ciencias Informáticas (UCI)",
      description:
        "Ingeniería de software, estructuras de datos, algoritmos e informática aplicada.",
    },
    softSkills: [
      "Productividad",
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Gestión del estrés",
      "Adaptabilidad",
      "Creatividad",
    ],
    typewriterWords: ["Ingeniero Full Stack", "Bryan"],
    modalTech: "Tecnologías",
    modalDescription: "Descripción",
    viewProject: "Ver proyecto",
    github: "GitHub",
    nav: [
      { href: "#about", label: "Sobre mí" },
      { href: "#experience", label: "Experiencia" },
      { href: "#education", label: "Formación" },
      { href: "#skills", label: "Habilidades" },
      { href: "#projects", label: "Proyectos" },
      { href: "#contact", label: "Contacto" },
    ],
  },
};

/** Matches `ExperienceItem` from WorkExperienceTimeline (localized per language). */
export type LocalizedExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills?: string[];
};

export const workExperienceByLang: Record<
  Lang,
  LocalizedExperienceItem[]
> = {
  en: [
    {
      title: "Full Stack Developer",
      company: "Reserva INC",
      companyUrl: "https://reservaerp.com/",
      location: "Havana, Cuba · Remote",
      employmentType: "Full-time",
      startDate: "Jan 2025",
      endDate: "Present",
      description: [
        "Led the development of comprehensive applications using React for dynamic interfaces and Django for robust, scalable backends.",
        "Implemented AI solutions, integrating models to automate internal processes and improve the end-user experience.",
        "Developed and customized Odoo modules, aligning business processes with efficient ERP management.",
        "Built advanced web scraping tools for large-scale data extraction and processing to support market intelligence and decision-making.",
      ],
      skills: [
        "React",
        "Django",
        "Python (Odoo)",
        "AI integration",
        "Web scraping",
        "PostgreSQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "JuvoMOS",
      companyUrl: "https://juvomos.com/",
      location: "Havana, Cuba · Remote",
      employmentType: "Full-time",
      startDate: "Dec 2022",
      endDate: "Jan 2025",
      description: [
        "Developed an administration platform (backoffice) to optimize operational efficiency in restaurants.",
        "Implemented real-time dashboards and consolidated reports using Angular and Redux.",
        "Integrated the system with POS, kiosk, and online sales ecosystems.",
        "Contributed to the full lifecycle of the online sales system and hybrid apps with Ionic.",
      ],
      skills: [
        "Angular",
        "Redux",
        "Ionic",
        "TypeScript",
        "PrimeNG",
        "NestJS",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "FreshShop",
      companyUrl: "https://freshshopclient.onrender.com/",
      location: "Havana, Cuba",
      employmentType: "Project",
      startDate: "Apr 2021",
      endDate: "Nov 2022",
      description: [
        "Contributed to an e-commerce platform for food sales: authentication, admin panel, payment gateways, cart, checkout, and search.",
        "The codebase is on GitHub and the deployment remains operational.",
      ],
      skills: ["React", "Django", "PostgreSQL", "REST API", "Git & GitHub"],
    },
  ],
  es: [
    {
      title: "Desarrollador full stack",
      company: "Reserva INC",
      companyUrl: "https://reservaerp.com/",
      location: "La Habana, Cuba · Remoto",
      employmentType: "Tiempo completo",
      startDate: "ene 2025",
      endDate: "Presente",
      description: [
        "Lideré el desarrollo de aplicaciones integrales con React en el frontend y Django en backends robustos y escalables.",
        "Implementé soluciones de IA integrando modelos para automatizar procesos internos y mejorar la experiencia de usuario.",
        "Desarrollé y personalicé módulos en Odoo alineando los procesos de negocio con una gestión ERP eficiente.",
        "Diseñé herramientas avanzadas de web scraping para extracción y procesamiento masivo de datos e inteligencia de mercado.",
      ],
      skills: [
        "React",
        "Django",
        "Python (Odoo)",
        "Integración IA",
        "Web scraping",
        "PostgreSQL",
      ],
    },
    {
      title: "Desarrollador full stack",
      company: "JuvoMOS",
      companyUrl: "https://juvomos.com/",
      location: "La Habana, Cuba · Remoto",
      employmentType: "Tiempo completo",
      startDate: "dic 2022",
      endDate: "ene 2025",
      description: [
        "Desarrollo de una plataforma de administración (backoffice) para optimizar la eficiencia operativa en restaurantes.",
        "Implementación de tableros en tiempo real e informes consolidados con Angular y Redux.",
        "Integración del sistema con ecosistemas de POS, quiosco y ventas en línea.",
        "Participación en el ciclo de vida del sistema de ventas en línea y apps híbridas con Ionic.",
      ],
      skills: [
        "Angular",
        "Redux",
        "Ionic",
        "TypeScript",
        "PrimeNG",
        "NestJS",
      ],
    },
    {
      title: "Desarrollador full stack",
      company: "FreshShop",
      companyUrl: "https://freshshopclient.onrender.com/",
      location: "La Habana, Cuba",
      employmentType: "Proyecto",
      startDate: "abr 2021",
      endDate: "nov 2022",
      description: [
        "Participé en una plataforma e-commerce de alimentos: autenticación, panel admin, pasarelas de pago, carrito, compras y búsqueda.",
        "El código está en GitHub y el despliegue sigue en operación.",
      ],
      skills: ["React", "Django", "PostgreSQL", "REST API", "Git y GitHub"],
    },
  ],
};
