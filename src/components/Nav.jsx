import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ menuOpen, toggleMenu }) => {
  const menuItems = ["home", "projects", "experience", "skills", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      if (menuOpen) {
        toggleMenu();
      }
    }
  };

  return (
    <>
      <nav className="text-grape bg-cream p-4 fixed top-0 right-0 left-0 z-50 border-b border-grape">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold">
            Sanika Suryawanshi
          </div>

          <div className="hidden md:flex gap-6 font-medium">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:underline"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-cream border-l border-grape z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 mt-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-left text-lg font-medium hover:underline"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Nav;
