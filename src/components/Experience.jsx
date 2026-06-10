import React from 'react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'PropTechBuzz',
    duration: 'Mar 2025 - Mar 2026',
    points: [
      'Built responsive and reusable UIs using Next.js, TypeScript, and Tailwind CSS.',
      'Developed backend APIs with PostgreSQL and Prisma, including schema design and type-safe integrations.',
      'Integrated Directus CMS and built workflows for News, Events, and content pages.',
      'Built event-driven workflows for speaker invitations and notifications.',
    ],
  },
  {
    role: 'Developer Intern',
    company: 'Invisible Studios',
    duration: 'Aug 2024 - Feb 2025',
    points: [
      'Built and maintained a reusable icon library using Next.js, TypeScript, and Tailwind CSS.',
      'Developed responsive UI components and forms from Figma designs.',
      'Debugged and resolved frontend issues, improving application stability.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'AgentProd',
    duration: 'Dec 2023 - Apr 2024',
    points: [
      'Developed UI using React, Next.js, Node.js, and Tailwind CSS.',
      'Integrated HubSpot and backend APIs into frontend applications.',
      'Built custom functions for AI assistants using OpenAI.',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-blue-purple to-queen-pink px-8 py-20 text-grape"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-archivo font-bold text-center mb-14">
          EXPERIENCE
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-cream/60 border-2 border-grape rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                </div>

                <span className="font-semibold text-sm md:text-base">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2 text-base font-medium">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;