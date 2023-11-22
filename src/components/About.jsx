import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
      <section id="about" className="h-screen bg-gradient-to-r from-blue-purple to-queen-pink p-8 text-grape flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold mb-5 border-b-2 border-white pb-5">ABOUT ME</h2>
            <p className="text-lg">
              I am a passionate frontend developer with a keen interest in technology since childhood. Eager to contribute my
              skills and enthusiasm to a dynamic team, I bring a fresh perspective and a commitment to delivering engaging and
              user-friendly web experiences.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
