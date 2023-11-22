import React from 'react';
import { Element } from 'react-scroll';

const Projects = () => {
  const projects = [
    {
      title: 'SilkCraft',
      skills: 'HTML | CSS | Javascript | React',
      about: 'An e-commerce platform showcasing Paithani silk sarees with mock backend, login and signup management functionality.',
      learning: 'Acquired React skills, learnt components organization, effectively utilized multiple hooks, and refined API call orchestration.',
      visitLink: 'https://silkcraft.vercel.app',
      sourceLink: 'https://github.com/Sanika03/silk-craft',
    },
    {
      title: 'BuzzShare',
      skills: 'HTML | CSS | Javascript | React',
      about: 'Created BuzzShare, a dynamic social media web-app with login/signup and personalized profiles and posts.',
      learning: 'Developed proficiency in writing optimized React code and implementing aesthetically pleasing color schemes.',
      visitLink: 'https://buzz-share.vercel.app',
      sourceLink: 'https://github.com/Sanika03/BuzzShare',
    },
    {
      title: 'SwiftChat',
      skills: 'HTML | CSS | Javascript | Express.js | Socket.io',
      about: 'Real-time chat app utilizing ChatGPT for dynamic online conversations, displaying active users.',
      learning: 'Gained proficiency in directing ChatGPT and adeptly managed and modified its code for optimal utilization.',
      visitLink: 'https://swiftchat-ia0e.onrender.com',
      sourceLink: 'https://github.com/Sanika03/SwiftChat',
    },
    {
      title: '100x App Layouts',
      skills: 'HTML | Tailwind CSS | Figma',
      about: 'Showcasing screen layouts for the 100x app, a Twitter clone, meticulously designed with Figma styles.',
      learning: 'Acquired the skill of writing pixel-perfect code based on Figma design files.',
      visitLink: 'https://sanika03.github.io/100x-app-layouts/src/login/index.html',
      sourceLink: 'https://github.com/Sanika03/100x-app-layouts',
    },
    {
      title: '100x App Components',
      skills: 'HTML | Tailwind CSS | Figma',
      about: 'Collection of components for the 100x app (Twitter clone) designed with Figma for seamless integration.',
      learning: 'Gained proficiency in crafting precise code from Figma designs, ensuring consistency across layouts and components.',
      visitLink: 'https://sanika03.github.io/100x-components/src/index.html',
      sourceLink: 'https://github.com/Sanika03/100x-components',
    },
    {
      title: 'Pricing Cards Page',
      skills: 'HTML | Tailwind CSS | Figma',
      about: 'Demo pricing card page crafted with Tailwind CSS for a sleek and responsive design.',
      learning: 'Developed proficiency in utilizing Tailwind CSS, refining skills in creating responsive web designs.',
      visitLink: 'https://sanika03.github.io/Pricing-cards-page/src/index.html',
      sourceLink: 'https://github.com/Sanika03/Pricing-cards-page',
    },
  ];

  return (
    <Element name="projects">
      <section id="projects" className="bg-gradient-to-b from-blue-purple to-queen-pink p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-archivo font-bold text-center text-cream my-10">PROJECTS</h2>
          <div className="flex flex-wrap -mx-2 mb-8">
            {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/2 text-grape mb-10">
                <div className="bg-cream p-6 border border-grape rounded-md mb-4 flex flex-col gap-3 h-full">
                  <h3 className="text-[23px] font-archivo font-bold mb-2">{title}</h3>
                  <p className="text-[13px] text-grape mb-2">{skills}</p>
                  <div className="flex flex-col justify-between">
                    <p className="text-base mb-4 font-medium">{about}</p>
                    <p className="text-base mb-4 font-medium"><span className='font-bold'>Learnings</span>: {learning}</p>
                  </div>
                  <div className="flex gap-4 text-grape">
                    <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">Visit</a>
                    <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:opacity-60">View Source</a>
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
