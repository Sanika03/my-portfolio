import React from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      skills: 'HTML | CSS',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.',
      visitLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project 2',
      skills: 'React | JavaScript',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.',
      visitLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project 3',
      skills: 'Node.js | MongoDB',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.',
      visitLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project 4',
      skills: 'Vue.js | Firebase',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.',
      visitLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project 5',
      skills: 'Express.js | PostgreSQL',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.',
      visitLink: '#',
      sourceLink: '#',
    },
    {
      title: 'Project 6',
      skills: 'Django | SQLite',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.',
      visitLink: '#',
      sourceLink: '#',
    },
  ];

  return (
    <Element name="projects">
      <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cream my-10">PROJECTS</h2>
          <div className="flex flex-wrap -mx-2 mb-8">
            {projects.map(({ title, skills, about, visitLink, sourceLink }, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape">
                <div className="bg-cream p-6 border border-grape rounded-md mb-4">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm text-grape mb-2 opacity-80">{skills}</p>
                  <p className="text-sm mb-4">{about}</p>
                  <div className="flex gap-4">
                    <a href={visitLink} className="text-grape underline hover:opacity-60">Visit</a>
                    <a href={sourceLink} className="text-grape underline hover:opacity-60">View Source</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Projects;
