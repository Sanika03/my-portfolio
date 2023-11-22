import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ menuOpen, setMenuOpen, toggleMenu }) => {
  const menuItems = [
    'home',
    'about',
    'skills',
    'projects',
    'blog',
    'contact',
  ];

  return (
    menuOpen && (
      <div className={`bg-cream text-grape fixed top-0 right-0 h-full p-4 w-1/2 lg:w-24 xl:w-1/4 transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1000 }}>
        <div className="flex justify-end mb-4">
          <div className="cursor-pointer" onClick={() => toggleMenu()}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item}`} className={`border-b border-solid border-queen-pink pb-3 w-full`}>
              <p className='hover:opacity-50' onClick={() => setMenuOpen(false)}>{item.toUpperCase()}</p>
            </a>
          ))}
        </div>
      </div>
    )
  );
};

export default Menu;
