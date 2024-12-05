import { ExternalLink, Github, Eye } from "lucide-react";
import { motion } from "framer-motion";


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

interface ProjectCard{
  project:Project;
  setHoveredProject:(hover?:number)=>void,
  setSelectedProject:(project?:Project)=>void,
  setIsModalOpen:(state:boolean)=>void,
  index:number,
}

export default function ProjectCard({
  project,
  setHoveredProject,
  setSelectedProject,
  setIsModalOpen,
  index,
}:ProjectCard) {
  return (
    <motion.div
      onHoverStart={() => setHoveredProject(index)}
      onHoverEnd={() => setHoveredProject()}
    >
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden ">
        <div className="p-0 relative ">
          <div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative w-full h-48"
            >
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover cursor-pointer"
            
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              >
                <div className="flex justify-center items-center gap-2">
                  <p className="text-emerald-300 text-lg font-semibold ">
                    View More
                  </p>

                  <Eye className="   text-emerald-300 " />
                </div>
              </motion.div>
            </motion.div>
          </div>


          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-7 h-14 ">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.link}
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-2"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={project.github}
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-2"
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
