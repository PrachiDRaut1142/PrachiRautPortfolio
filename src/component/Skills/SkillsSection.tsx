import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skillsData = {
  backend: [
    { name: 'Node.js', icon: faNodeJs, color: 'text-green-400' },
    { name: 'Java', icon: faJava, color: 'text-red-400' },
    { name: 'Python', icon: faPython, color: 'text-blue-300' },
  ],
  frontend: [
    { name: 'React', icon: faReact, color: 'text-blue-400' },
    { name: 'HTML5', icon: faHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-400' },
  ],
  databases: [
    { name: 'SQL/NoSQL', icon: faDatabase, color: 'text-purple-400' },
  ],
};

const SkillsTreeDiagram = () => {
  return (
    <div id="skills" className="relative z-40 border-t border-[#25213b]">
    <img alt="Hero" loading="lazy" width="1572" height="795" decoding="async" data-nimg="1" className="absolute top-0 -z-10" style={{ color: 'transparent' }} src="/assets/svg/bg-texture.svg"></img>
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
        <div className="flex justify-center lg:mt-0 lg:pt-0 pb-10">
          <div className="flex items-center space-x-2">
            <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"<>"}</span>
            <span className="bg-[rgba(73,66,121,1)] w-fit text-white p-2 px-5 text-xl rounded-md">Skills</span>
            <span className="px-2 w-10 bg-[rgba(73,66,121,1)] rounded-md">{"</>"}</span>
          </div>
        </div>
      <p className="text-lg text-center mb-5 text-gray-300">
        “From pixel-perfect UI to scalable backend architecture—delivering it all.”
      </p>

      <div className="relative w-full max-w-5xl flex justify-center">
        <div className="absolute w-[2px] h-[50px] bg-gradient-to-b from-white to-gray-800 rounded-full"></div>
        <div className="absolute top-[50px] w-[250px] md:w-[600px] lg:w-[650px] xl:w-[800px] h-[2px] bg-gradient-to-r from-white to-gray-800"></div>

        <div className="flex justify-between w-full px-10 mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-4">
              {skillsData.backend.map((skill, index) => (
                <li key={index} className="flex flex-col items-center">
                  <FontAwesomeIcon icon={skill.icon} className={`text-4xl ${skill.color}`} />
                  <span className="mt-2 text-xl">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-4">
              {skillsData.frontend.map((skill, index) => (
                <li key={index} className="flex flex-col items-center">
                  <FontAwesomeIcon icon={skill.icon} className={`text-4xl ${skill.color}`} />
                  <span className="mt-2 text-xl">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Databases</h3>
            <ul className="space-y-4">
              {skillsData.databases.map((skill, index) => (
                <li key={index} className="flex flex-col items-center">
                  <FontAwesomeIcon icon={skill.icon} className={`text-4xl ${skill.color}`} />
                  <span className="mt-2 text-xl">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkillsTreeDiagram;