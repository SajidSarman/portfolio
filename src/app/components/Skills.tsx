
import React from 'react';
import Image from 'next/image';

interface SkillRow {
  categoryName: string;
  slugs: string;
}

export default function Skills() {
  const skillRows: SkillRow[] = [
    {
      categoryName: 'Frontend',
      slugs: 'html,css,js,ts,react,nextjs,tailwind',
    },
    {
      categoryName: 'Backend & Database',
      slugs: 'nodejs,express,mongodb,vercel,netlify,firebase',
    },
    {
      categoryName: 'Tools & Environment',
      slugs: 'git,github,arch,vscode,bash,npm,notion,figma,blender',
    },
    {
      categoryName: 'Exploring',
      slugs: 'py,matlab,pytorch,docker,cpp,unreal,godot',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
            Skills & Technologies
          </h2>
          <div className="h-1 w-12 bg-blue-600 mt-2 mx-auto md:mx-0 rounded"></div>
        </div>

        {/*Rows*/}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {skillRows.map((row) => (
            <div key={row.categoryName} className="space-y-3">

              <h3 className="text-md font-semibold text-neutral-300 tracking-wide">
                {row.categoryName}
              </h3>
              
              <div className="flex items-center pt-1">
                <div
                  className="relative h-12 min-w-0"
                  style={{ width: `min(100%, ${row.slugs.split(',').length * 55}px)` }}
                >
                  <Image
                    src={`https://skillicons.dev/icons?i=${row.slugs}`}
                    alt={`${row.categoryName} Tech Stack Row`}
                    fill
                    unoptimized
                    className="rounded-xl object-contain object-left shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
