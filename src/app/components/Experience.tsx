import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

// interface ExperienceItem {
//   role: string;
//   company: string;
//   duration: string;
//   description: string;
// }

const Experience = () => {
  const educationData: EducationItem[] = [

    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Kazi Azim Uddin College, Gazipur',
      duration: '2025',
      details: 'business Group.'
    }
  ];

//   const experienceData: ExperienceItem[] = [
//     {
//       role: 'Junior Frontend Developer',
//       company: 'Tech Solutions Ltd.',
//       duration: '2025 - Present',
//       description: 'Building responsive user interfaces using Next.js and Tailwind CSS. Collaborating with backend teams to integrate RESTful API configurations.'
//     },
//     {
//       role: 'Web Development Intern',
//       company: 'SoftDev Agency',
//       duration: '2024 (6 Months)',
//       description: 'Assisted in building functional client websites using JavaScript, HTML, and CSS. Resolved dynamic layout UI bugs across various screen resolutions.'
//     }
//   ];

  return (
    <section id="experience" className="py-20 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Block */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              <div className="h-1 w-12 bg-blue-600 mt-2 rounded"></div>
            </div>
            
            <div className="space-y-6 border-l-2 border-neutral-800 pl-6 ml-2">
              {educationData.map((item, idx) => (
                <div key={idx} className="relative space-y-2">
                  {/* Timeline point accent decoration */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-neutral-900" />
                  <span className="text-xs font-semibold text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                    {item.duration}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-200 pt-1">{item.degree}</h3>
                  <p className="text-sm font-medium text-blue-500">{item.institution}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Block */}
          {/* <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
              <div className="h-1 w-12 bg-blue-600 mt-2 rounded"></div>
            </div>
            
            <div className="space-y-6 border-l-2 border-neutral-800 pl-6 ml-2">
              {experienceData.map((item, idx) => (
                <div key={idx} className="relative space-y-2">
                 
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-neutral-900" />
                  <span className="text-xs font-semibold text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                    {item.duration}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-200 pt-1">{item.role}</h3>
                  <p className="text-sm font-medium text-blue-500">{item.company}</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default Experience;