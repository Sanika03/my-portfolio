import React from 'react';

const About = () => {
  return (
    <section id="about" className="h-screen bg-gradient-to-r from-blue-purple to-queen-pink p-8 text-grape flex justify-center items-center">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h2 className="text-[26px] font-archivo font-bold mb-6 border-b-2 border-white pb-6">CRAFTING IDEAS INTO STUNNING WEB REALITIES</h2>
          <div className="text-lg font-medium flex flex-col gap-4">
          <p>Passionate about frontend development since my early days, I bring a tech-driven journey to your team.</p>
          <p>Known for my precision and a commitment to perfection, I tackle challenges head-on, always figuring things out even in the unknown.</p>
          <p>As a team player with a friendly demeanor, I seamlessly fit into any collaborative environment.</p>
          <p>Let's connect and craft remarkable web experiences together!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;