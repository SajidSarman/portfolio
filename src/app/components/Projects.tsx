'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  liveLink: string;
  githubLink: string;
  challenges: string;
  futureImprovements: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectData: Project[] = [
    {
      id: 1,
      name: 'Bazar Dor',
      description: 'A Bangla-language web app for checking current prices of everyday products.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Better Auth with MongoDB'],
      imageSrc: '/projects/Bazar_Dor.png',
      liveLink: 'https://bazar-dor-b14-a07-s-sarman.vercel.app/',
      githubLink: 'https://github.com/SajidSarman/b14-a07',
      challenges: '---',
      futureImprovements: '---'
    },
    {
      id: 2,
      name: 'FITLOG',
      description: 'A simple and fast workout tracking dashboard to browse exercises, plan your daily lifts, and save workouts for later.',
      techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      imageSrc: '/projects/FITLOG.png',

      liveLink: 'https://fitlog-b14-a06-s-sarman.vercel.app/',
      githubLink: 'https://github.com/SajidSarman/b14-a06',
      challenges: '---',
      futureImprovements: '---'
    },
    {
      id: 3,
      name: 'DevStack',
      description: 'A simple DevStack application to manage your development technologies.',
      techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      imageSrc: '/projects/DevStack.png',
      liveLink: 'https://devstack-s-sarman-b14-a05.netlify.app/',
      githubLink: 'https://github.com/SajidSarman/B14-A05',
      challenges: '---',
      futureImprovements: '---'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-1 w-12 bg-blue-600 mt-2 mx-auto md:mx-0 rounded"></div>
        </div>
        {/* <div className="mb-12 text-left">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-1 w-12 bg-blue-600 mt-2 rounded"></div>
        </div> */}

        {/*cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="bg-neutral-800/50 rounded-xl border border-neutral-800 flex flex-col justify-between overflow-hidden shadow-lg">

              <div className="relative h-48 w-full bg-neutral-800 border-b border-neutral-800">
                <Image
                  src={project.imageSrc}
                  alt={`${project.name} Screenshot`}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Fallback Image Block */}
              {/* <div className="h-48 bg-neutral-700/40 w-full flex items-center justify-center border-b border-neutral-800">
                <span className="text-xs text-neutral-500 font-mono">[ {project.name} Thumbnail ]</span>
              </div> */}

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-200">{project.name}</h3>
                  <p className="text-sm text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-center py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium rounded-lg text-sm border border-neutral-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/*Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto space-y-6 relative text-left">

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-800"
              >
                ✕
              </button>

              {/*title*/}
              <div>
                <h3 className="text-2xl font-bold text-white pr-8">{selectedProject.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold px-2.5 py-1 bg-blue-900/40 text-blue-400 border border-blue-800/40 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/*Info*/}
              <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
                <div>
                  <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Description</h4>
                  <p>{selectedProject.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Challenges Faced</h4>
                  <p>{selectedProject.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-1">Future Plans & Improvements</h4>
                  <p>{selectedProject.futureImprovements}</p>
                </div>
              </div>

              {/*links*/}
              <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition"
                >
                  Live Preview
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium rounded-lg text-sm border border-neutral-700 transition"
                >
                  GitHub Link
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;