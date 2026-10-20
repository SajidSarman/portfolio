import React from 'react';

interface Skill {
  name: string;
  level: string;
}

interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

const Skills = () => {
  const skillGroups: SkillCategory[] = [
    {
      categoryName: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: '90%' },
        { name: 'TypeScript', level: '85%' },
        { name: 'Tailwind CSS', level: '95%' },
      ],
    },
    {
      categoryName: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: '80%' },
        { name: 'MongoDB', level: '75%' },
        { name: 'PostgreSQL', level: '70%' },
      ],
    },
    {
      categoryName: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: '90%' },
        { name: 'Docker', level: '65%' },
        { name: 'Vercel / Netlify', level: '85%' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Tech Stack</h2>
          <div className="h-1 w-12 bg-blue-600 mt-2 mx-auto md:mx-0 rounded"></div>
        </div>

        {/* Graphical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div 
              key={group.categoryName} 
              className="bg-neutral-800/40 p-6 rounded-xl border border-neutral-800/80"
            >
              <h3 className="text-lg font-semibold text-blue-500 mb-6 pb-2 border-b border-neutral-800">
                {group.categoryName}
              </h3>
              
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-neutral-200">{skill.name}</span>
                      <span className="text-neutral-400">{skill.level}</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;