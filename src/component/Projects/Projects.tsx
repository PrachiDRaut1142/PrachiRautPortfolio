import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bgTexture from '../../assets/svg/bg-texture.svg';
const projects = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, Tailwind, and TypeScript.",
    technologies: ["Angular", "Tailwind", "TypeScript", "Figma"],
    status: "Closed",
    date: "August - 2024",
    image: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "#",
    demo: "#",
  },
  {
    title: "Hinez",
    description:
      "Unlock comprehensive efficiency and growth potential. Transform your operations today to boost workforce engagement and productivity.",
    technologies: ["PHP", "Laravel", "SQL", "Bootstrap"],
    status: "Closed",
    date: "May - 2024",
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, Tailwind, and TypeScript.",
    technologies: ["Angular", "Tailwind", "TypeScript", "Figma"],
    status: "Closed",
    date: "August - 2024",
    image: "https://images.unsplash.com/photo-1642132652809-8c6ab1971169?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "#",
    demo: "#",
  },
  {
    title: "Hinez",
    description:
      "Unlock comprehensive efficiency and growth potential. Transform your operations today to boost workforce engagement and productivity.",
    technologies: ["PHP", "Laravel", "SQL", "Bootstrap"],
    status: "Closed",
    date: "May - 2024",
    image: "https://images.unsplash.com/photo-1642132652795-4a46f8ce789e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="relative z-40 border-t border-[#25213b]">
      <img alt="Hero" loading="lazy" width="1572" height="795" decoding="async" data-nimg="1" className="absolute top-0 -z-10" style={{ color: 'transparent' }} src={bgTexture}></img>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white mx-8 md:mx-12">
        <div className="flex justify-center mt-5 pt-10 pb-10 lg:mt-0 lg:pt-0">
          <div className="flex items-center space-x-2">
            <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"<>"}</span>
            <span className="bg-[rgba(73,66,121,1)] w-fit text-white p-2 px-5 text-xl rounded-md">Projects</span>
            <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"</>"}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative rounded-2xl p-[3px] border-gradient-project">
              <div className="relative bg-[#2A2154] rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                  {project.technologies.slice(0, 2).map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <span className={`text-sm font-semibold ${project.status === "Closed" ? "text-red-500" : "text-blue-500"}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                    <i className="fas fa-external-link-alt text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="#_" className="relative inline-flex items-center justify-center px-10 py-3 w-64 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white"> <FontAwesomeIcon icon={faArrowRight} />
              <span className="ms-3">See More</span></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
