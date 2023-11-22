import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'Tailwind CSS', 'Javascript', 'React', 'Git', 'GitHub', 'Figma', 'Netlify/Vercel'];

  return (
    <Element name="skills">
      <section id="skills" className="h-screen p-8 text-grape flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-archivo font-bold mb-10">SKILLS</h2>
          {/* Add animation for skills here */}
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="font-semibold bg-cream p-3 border border-solid border-grape rounded-md md:w-1/3 lg:w-1/4">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;
