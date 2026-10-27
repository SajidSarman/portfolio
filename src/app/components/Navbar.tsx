'use client';
import React from 'react';

import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const Navbar = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-900 border-b border-neutral-800 text-white z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">SAJID SARMAN</a>
        
        {/*links*/}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-neutral-400 hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>

        {/*hamburger*/}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-400 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/*mobile links*/}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-4 py-4 flex flex-col space-y-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;