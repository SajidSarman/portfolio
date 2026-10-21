import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center md:text-left mb-8">
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <div className="h-1 w-12 bg-blue-600 mt-2 mx-auto md:mx-0 rounded"></div>
                </div>
                {/* <div className="text-left mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <div className="h-1 w-12 bg-blue-600 mt-2 rounded"></div>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left*/}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">My Journey</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                My programming journey started with a simple task to automate a spreadsheet. Since then, I've developed an interest in building web applications and learning modern frontend technologies, design patterns, and state management.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">What I Enjoy</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                I enjoy building simple, user-friendly interfaces and writing clean, reusable code. I also like solving problems and working with others to build better applications.</p>
                        </div>
                    </div>

                    <div className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-800 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Outside of Coding</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                When I'm away from the keyboard, you'll usually find me reading books and manga or sketching.</p>
                        </div>

                        <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-xs font-semibold text-neutral-500 uppercase">Location</span>
                                <span className="text-sm font-medium text-neutral-300">Gazipur, Bangladesh</span>
                            </div>
                            <div>
                                <span className="block text-xs font-semibold text-neutral-500 uppercase">Work Style</span>
                                <span className="text-sm font-medium text-neutral-300">Remote / Hybrid</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;