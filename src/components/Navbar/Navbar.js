import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCode,
  faFile,
  faHome,
  faPhoneFlip,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { href: "#home", label: "Home", icon: faHome },
    { href: "#about", label: "About", icon: faUser },
    { href: "#skills", label: "Skills", icon: faCode },
    { href: "#portofolio", label: "Portofolio", icon: faFile },
    { href: "#contact", label: "Contact me", icon: faPhoneFlip },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest("#popup-navmenu") &&
        !event.target.closest("#open-popup-navmenu")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Observe each section
    menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      // Cleanup observers
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.unobserve(section);
      });
    };
  }, [menuItems]);

  return (
    <nav className="navbar w-full">
      {/* Desktop Navbar */}
      <div className="w-full hidden md:flex h-fit bg-white fixed top-0 text-secondary text-opacity-70 justify-center z-50">
        <div className="font-medium w-3/4 text-lg py-4 flex justify-between items-center">
          <div>
            <p>Rangga</p>
          </div>
          <div className="flex gap-10 items-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-tertiary text-opacity-60 hover:text-opacity-100 active:text-opacity-100 ${activeSection === item.href.slice(1) ? 'text-secondary' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full fixed bottom-0 md:hidden h-fit bg-white text-secondary text-opacity-70 z-50">
        <div className="flex flex-col w-full items-center">
          <div className="font-medium w-full flex flex-col items-center text-base py-4 bg-white z-10 fixed bottom-0 border-t border-primary border-opacity-50">
            <div className="w-4/5 flex justify-between items-center">
              <div>
                <p>Rangga</p>
              </div>
              <div className="flex gap-10 items-center">
                <p onClick={toggleMenu} id="open-popup-navmenu" className="cursor-pointer">
                  <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="xl" />
                </p>
              </div>
            </div>
          </div>

          {/* Popup Mobile Menu */}
          <div
            id="popup-navmenu"
            className={`z-20 w-full bg-white fixed grid grid-cols-3 grid-row-2 py-8 gap-y-8 border-t border-primary transition-all duration-500 ${isMenuOpen ? "show-menu" : ""
              }`}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="font-medium cursor-pointer">
                <a
                  href={item.href}
                  className={`flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100 ${activeSection === item.href.slice(1) ? 'text-secondary' : ''}`}
                  onClick={toggleMenu} // Close the menu when an item is clicked
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" className="mb-1" />
                  <div>{item.label}</div>
                </a>
              </div>
            ))}

            {/* Close Button */}
            <div id="close-popup-navmenu" className="font-medium cursor-pointer">
              <p
                onClick={toggleMenu} // Close the menu when the close button is clicked
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon icon={faXmark} size="lg" className="mb-1" />
                <div>Close</div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
