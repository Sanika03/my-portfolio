import React from 'react';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Element name="contact">
      <section id="contact" className="h-screen bg-queen-pink p-8 text-grape flex justify-center items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
          <p className="text-lg font-semibold mb-5">| I AM OPEN TO WORK AND NETWORK |</p>
          <p className="mb-6">
            If you have an exciting project in mind, want to collaborate, or simply wish to connect, let's initiate a conversation. 
          </p>
          <div className="flex items-center justify-center">
            <a href="mailto:sanikasuryawanshi0305@gmail.com" className="mr-4">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className='hover:text-black'/>
            </a>
            <a href="tel:9834057317">
              <FontAwesomeIcon icon={faPhone} className='hover:text-black'/>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Contact;
