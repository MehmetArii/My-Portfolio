"use client";

import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 w-12 h-12" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 w-12 h-12" />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-12 h-12" /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-500 w-12 h-12" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-12 h-12" /> },
];

const Skills = () => {
  return (
    <section className="w-full py-20 bg-gray-950 text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
        <p className="text-gray-400 mb-12">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"
            >
              <div className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition transform duration-300">
                {skill.icon}
                <p className="mt-4 text-lg font-medium">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
