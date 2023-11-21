import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ menuOpen, setMenuOpen, toggleMenu }) => {
  return (
    menuOpen && (
      <div className={`bg-cream text-grape fixed top-0 right-0 h-full p-4 w-1/2 lg:w-24 xl:w-1/4 transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1000 }}>
        <div className="flex justify-end mb-4">
          {/* Close Button */}
          <div className="cursor-pointer" onClick={() => toggleMenu()}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <a href="#home" className="border-b border-solid border-queen-pink pb-3 w-full">
            <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>HOME</p>
          </a>
          <a href="#about" className="border-b border-solid border-queen-pink pb-3 w-full">
            <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>ABOUT</p>
          </a>
          <a href="#skills" className="border-b border-solid border-queen-pink pb-3 w-full">
            <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>SKILLS</p>
          </a>
          <a href="#projects" className="border-b border-solid border-queen-pink pb-3 w-full">
            <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>PROJECTS</p>
          </a>
          <a href="#blog" className="border-b border-solid border-queen-pink pb-3 w-full">
            <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>BLOG</p>
          </a>
          <a href="#contact" className="border-b border-solid border-queen-pink pb-3 w-full">
            <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>CONTACT</p>
          </a>
        </div>
      </div>
    )
  );
};

export default Menu;
