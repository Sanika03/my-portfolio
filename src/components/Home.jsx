import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const socialMediaLinks = [
  { href: 'https://twitter.com/Sanika_0305', icon: faTwitter },
  { href: 'https://www.linkedin.com/in/sanika-suryawanshi-b17181205', icon: faLinkedin },
  { href: 'https://github.com/Sanika03', icon: faGithub },
  { href: "https://mail.google.com/mail/u/0/?fs=1&to=sanikasuryawanshi0305@gmail.com&tf=cm", icon: faEnvelope },
];

const etchedTextStyle = {
  position: 'relative',
  color: '#000',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontFamily: 'SwearDisplay-BoldItalic', // Add this line for the font family
  letterSpacing: '0.02em',
  textShadow: `
    1px 1px 0 #fff,
    -1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px -1px 0 #fff,
    4px 4px 0 #aaa
  `,
  animation: 'fadeIn 2s ease-in-out',
  whiteSpace: 'nowrap',
  fontSize: '5rem',
};

const greetings = ["Hello", "Bonjour", "Hola", "Konnichiwa", "Namaste"]; // Add more greetings as needed

const Home = () => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [displayedGreeting, setDisplayedGreeting] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentGreeting = greetings[currentGreetingIndex];
      let displayText = '';

      setIsTyping(true); // Start typing animation

      // Generate typing effect
      for (let i = 0; i < currentGreeting.length; i++) {
        setTimeout(() => {
          displayText += currentGreeting[i];
          setDisplayedGreeting(displayText);
        }, i * 100); // Adjust typing speed here (100ms per letter)
      }

      // Reset after full display
      setTimeout(() => {
        setIsTyping(false); // Stop typing animation
        setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setDisplayedGreeting('');
      }, currentGreeting.length * 100 + 1000); // Wait 1 second after full display
    }, 2500); // Delay between greeting changes (adjust as needed)

    return () => clearInterval(interval);
  }, [currentGreetingIndex]);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center bg-opacity-70">
        <div className="text-white text-4xl font-bold mb-5">
          {isTyping ? (
            <>
              {displayedGreeting}
              <span className="cursor-animation">|</span>
            </>
          ) : (
            <>{greetings[currentGreetingIndex]}</>
          )} , I'm
        </div>
        <h1
          style={{
            ...etchedTextStyle,
            color: '#DEA6FF', // Color change for "Sanika Suryawanshi"
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Drop shadow effect
          }}
          className="text-7xl font-extrabold leading-tight my-5 font-dancing-script fade-in-text"
        >
          Sanika Suryawanshi
        </h1>
        <p className="text-white text-lg font-medium mb-7">A FRONTEND WEB DEVELOPER</p>
        <div className="flex space-x-4 justify-center">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black"
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
