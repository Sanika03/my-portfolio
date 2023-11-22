import React from 'react';
import { Element } from 'react-scroll';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Javascript errors: ReferenceError v/s TypeError",
      content: "A programmer has to write 1000s of lines of code and it is impossible to write 100% error-free code in one go. This article will help you avoid often-made errors in Javascript...",
      link: "https://sanika.hashnode.dev/javascript-errors-referenceerror-vs-typeerror",
    },
  ];

  return (
    <Element name="blogs">
      <section id="blog" className="h-screen p-8 flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-archivo font-bold mb-8 text-grape">BLOG</h2>
          {blogs.map(({ id, title, content, link }) => (
            <div key={id} className="bg-cream text-grape p-6 rounded-md shadow-md mb-4">
              <h3 className="text-[22px] font-bold mb-4">{title}</h3>
              <p className="text-base font-medium mb-4">{content}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-grape py-2 px-4 rounded-md underline hover:opacity-60">Read more</a>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}

export default Blogs;
