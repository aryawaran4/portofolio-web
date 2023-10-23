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

const Navbar = () => {
  const menuFunction = () => {
    const navMenu = document.getElementById("popup-navmenu");
    const navToggle = document.getElementById("open-popup-navmenu");
    const navClose = document.getElementById("close-popup-navmenu");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  };

  return (
    <nav className="navbar w-full">
      {/* <---------------------------------------------------------NAVBAR----------------------------------------------------------------> */}
      <div
        id="nav-bar"
        className="w-full hidden md:flex h-fit bg-white fixed top-0 text-secondary text-opacity-70 justify-center z-50"
      >
        <div
          id="nav-bar-content"
          className="font-medium w-3/4 text-lg py-4 flex justify-between items-center"
        >
          <div>
            <p>Rangga</p>
          </div>
          <div className="flex gap-10 items-center">
            <a
              className="text-tertiary text-opacity-60 hover:text-opacity-100 active:text-opacity-100"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-tertiary text-opacity-60 hover:text-opacity-100 active:text-opacity-100"
              href="#about"
            >
              About
            </a>
            <a
              className="text-tertiary text-opacity-60 hover:text-opacity-100 active:text-opacity-100"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-tertiary text-opacity-60 hover:text-opacity-100 active:text-opacity-100"
              href="#portofolio"
            >
              Portofolio
            </a>
            <a
              className="text-tertiary text-opacity-60 hover:text-opacity-100 active:text-opacity-100"
              href="#contact"
            >
              Contact me
            </a>
            {/* <p>darkmode</p> */}
          </div>
        </div>
      </div>

      <div
        id="nav-bar"
        className="w-full fixed bottom-0 md:hidden h-fit bg-white text-secondary text-opacity-70 z-50"
      >
        <div className="flex flex-col w-full items-center">
          <div
            id="nav-bar-content"
            className="font-medium w-full flex flex-col items-center text-base py-4 bg-white z-10 fixed bottom-0 border-t border-primary border-opacity-50"
          >
            <div className="w-4/5 flex justify-between items-center">
              <div>
                <p>Rangga</p>
              </div>
              <div className="flex gap-10 items-center">
                <p
                  onClick={menuFunction}
                  id="open-popup-navmenu"
                  className="cursor-pointer"
                >
                  <FontAwesomeIcon icon={faBars} size="xl" />
                </p>
                {/* <p>darkmode</p> */}
              </div>
            </div>
          </div>
          <div
            id="popup-navmenu"
            className="z-20 w-full bg-white fixed grid grid-cols-3 grid-row-2 py-8 gap-y-8 border-t border-primary"
          >
            <div className="font-medium cursor-pointer">
              <a
                href="#home"
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon icon={faHome} size="lg" className="mb-1" />
                <div>Home</div>
              </a>
            </div>
            <div className="font-medium cursor-pointer">
              <a
                href="#about"
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon icon={faUser} size="lg" className="mb-1" />
                <div>About</div>
              </a>
            </div>
            <div className="font-medium cursor-pointer">
              <a
                href="#skills"
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon icon={faCode} size="lg" className="mb-1" />
                <div>Skills</div>
              </a>
            </div>
            <div className="font-medium cursor-pointer">
              <a
                href="#portofolio"
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon icon={faFile} size="lg" className="mb-1" />
                <div>Portofolio</div>
              </a>
            </div>
            <div className="font-medium cursor-pointer">
              <a
                href="#contact"
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  size="lg"
                  className="mb-1"
                />
                <div>Contact me</div>
              </a>
            </div>
            <div
              id="close-popup-navmenu"
              className="font-medium cursor-pointer"
            >
              <p
                onClick={menuFunction}
                className="flex flex-col items-center text-tertiary text-opacity-60 hover:text-opacity-100"
              >
                <FontAwesomeIcon icon={faXmark} size="lg" className="mb-1" />
                <div>Close</div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}
    </nav>
  );
};

export default Navbar;
