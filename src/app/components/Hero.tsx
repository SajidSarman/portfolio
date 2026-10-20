'use client';

import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 bg-neutral-900 text-white min-h-[85vh] flex items-center">
            <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                        {/* <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              Welcome to my portfolio
            </span> */}
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Hi, I'm <span className="text-blue-500">Sajid Sarman</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-neutral-300">
                            Full Stack Web Developer
                        </p>
                    </div>

                    <p className="text-neutral-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
I build clean, user-friendly web applications and optimize them for better performance and user experience.                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm transition shadow-lg"
                        >
                            Download Resume
                        </a>


                        <div className="flex space-x-3">
                            <a href="https://github.com/SajidSarman" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-300 hover:text-white transition" aria-label="GitHub">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sajid-sarman/" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-300 hover:text-white transition" aria-label="LinkedIn">
                                LinkedIn
                            </a>
                            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-300 hover:text-white transition" aria-label="Twitter">
                Twitter
              </a> */}
                        </div>
                    </div>
                </div>

                {/* Photo Placeholder */}
                <div className="flex justify-center">
                    <div className="relative w-64 h-74 md:w-80 md:h-90 rounded-2xl overflow-hidden border-4 border-neutral-800 shadow-2xl bg-neutral-800 flex items-center justify-center">
                        <Image
                            src="/profile.jpeg"
                            alt="John Doe Profile"
                            width={400}
                            height={450}
                            priority
                            className="w-full h-full object-cover object-center"
                        />

                        {/* Fallback*/}
                        {/* <div className="text-center p-4">
    <svg className="w-16 h-16 text-neutral-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div> */}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;