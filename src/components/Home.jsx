import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialMediaLinks = [
  { href: 'https://twitter.com/Sanika_0305', icon: faTwitter },
  { href: 'https://www.linkedin.com/in/sanika-suryawanshi-b17181205', icon: faLinkedin },
  { href: 'https://github.com/Sanika03', icon: faGithub },
  { href: "https://mail.google.com/mail/u/0/?fs=1&to=sanikasuryawanshi0305@gmail.com&tf=cm", icon: faEnvelope },
];

const Home = () => {
  return (
    <Element name="home">
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center"
      >
        <div className="max-w-2xl mx-auto text-center bg-opacity-70">
          <p className="font-bold text-grape text-4xl">Hello, I'm</p>
          <h1 className="text-7xl font-extrabold leading-tight my-5 text-black font-dancing-script">Sanika Suryawanshi</h1>
          <p className="text-lg text-grape font-medium mb-7">A FRONTEND WEB DEVELOPER</p>
          <div className="flex space-x-4 justify-center">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grape hover:text-black"
              >
                <FontAwesomeIcon icon={link.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Home;
