import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ menuOpen, toggleMenu }) => {
  return (
    <nav className={`text-grape bg-cream p-4 fixed top-0 right-0 left-0 z-50 ${menuOpen ? 'opacity-30' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          Sanika Suryawanshi
        </div>
        <div className="cursor-pointer" onClick={() => toggleMenu()}>
          {
            menuOpen ?
            null:
            <FontAwesomeIcon icon={faBars} size="lg" />
          }
        </div>
      </div>
    </nav>
  );
};

export default Nav;
