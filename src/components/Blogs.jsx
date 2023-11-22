import React from 'react';
import { Element } from 'react-scroll';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula mauris eu urna aliquet, eu tincidunt odio hendrerit.",
      link: "https://example.com/blog1",
    },
  ];

  return (
    <Element name="blogs">
      <section id="blog" className="h-screen p-8 flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-archivo font-bold mb-8 text-grape">BLOG</h2>
          {blogs.map(({ id, title, content, link }) => (
            <div key={id} className="bg-cream text-grape p-6 rounded-md shadow-md mb-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm mb-4">{content}</p>
              <a href={link} className="text-grape py-2 px-4 rounded-md underline hover:opacity-60">Visit</a>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default Blogs;
