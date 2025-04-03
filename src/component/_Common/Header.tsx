import { faBars, faCross, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-5xl xl:text-6xl text-blue-200 xl:font-medium" style={{fontFamily:'Fuggles, cursive'}} >
          Prachi Digambar Raut
        </h1>

        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isMenuOpen ? (
           <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>


        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`text-white hover:text-blue-400 ${activeSection === item.id
                    ? "glow-effect text-blue-400"
                    : ""
                  }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="uppercase text-1xl">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col items-center md:hidden bg-gray-800 text-white py-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`hover:text-blue-400 ${activeSection === item.id
                    ? "glow-effect text-blue-400"
                    : ""
                  }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
