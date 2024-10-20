import React, { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../../assets/Image/Logo.png";

interface HeaderProps {
  scrollToSection: (index: number) => void;
}
const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  //check the theme of html code from index.html file
  const element = document?.documentElement;
  const modeRef = useRef<HTMLDivElement>(null);
  //check whether the device theme is in dark mode or not
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //fetch theme from localstorage if no theme set then take the system theme by default
  const storedThemeString = localStorage.getItem("theme");
  const storedTheme = storedThemeString
    ? JSON.parse(storedThemeString)
    : {
        icon: "desktop",
        text: "system",
      };
  //theme options with their icon classes from fontawesome
  const themeOptions = [
    {
      icon: "fa-regular fa-sun",
      text: "light",
    },
    {
      icon: "fa-regular fa-moon",
      text: "dark",
    },
    {
      icon: "fa-solid fa-desktop",
      text: "system",
    },
  ];
  //Menu options
  const menuOptions = [
    { label: "Introduction" },
    { label: "About Me" },
    { label: "Skills" },
    { label: "Projects" },
    { label: "Experience" },
    { label: "Contact" },
  ];
  //useState for setting and fetching selected theme
  const [theme, setTheme] = useState(storedTheme);
  //useState for setting and fetching menu modal which is called when there is small device
  const [isOpen, setIsOpen] = useState(false);
  //useState for setting and fetching theme selection modal
  const [modeIsOpen, setModeIsOpen] = useState(false);
  //useState for setting and fetching menu
  const [activeMenu, setActiveMenu] = useState(0);

  //change theme on window load, set theme based on systems theme
  const onWindowGetSystemTheme = useCallback(() => {
    const themeItem = localStorage.getItem("theme");
    if (themeItem !== null) {
      const themeData = JSON.parse(themeItem);
      if (themeData.text === "dark" || (!themeData.text && darkQuery.matches)) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    } else {
      if (darkQuery.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  }, [darkQuery.matches, element.classList]);
  onWindowGetSystemTheme();

  //Closing the theme selection modal onclick of anywhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modeIsOpen &&
        modeRef.current &&
        !modeRef.current.contains(event.target as Node)
      ) {
        setModeIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modeIsOpen]);
  //change theme on basis of selection of theme option
  useEffect(() => {
    switch (theme.text) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", JSON.stringify(theme));
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", JSON.stringify(theme));
        break;
      default:
        localStorage.removeItem("theme");
        onWindowGetSystemTheme();
        break;
    }
  }, [element.classList, onWindowGetSystemTheme, theme]);

  //function for setting selected theme and closing the modal of theme list
  const handleModeChange = (selectedMode: { icon: string; text: string }) => {
    setTheme(selectedMode);
    setModeIsOpen(false);
  };
  //function is used to dynamically update the theme based on the user's system preference for dark mode
  darkQuery.addEventListener("change", (e) => {
    const themeItem = localStorage.getItem("theme");
    if (themeItem !== null) {
      const themeData = JSON.parse(themeItem);
      if (themeData.text === "dark" || (!themeData.text && darkQuery.matches)) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    } else {
      if (darkQuery.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  return (
    <nav className="fixed w-full top-0 z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-around h-12 mt-1 border-[0.5px] border-[#005035] rounded-full bg-gradient-to-b from-[#00150e] via-[#00150e] to-gray-800 bg-opacity-25 shadow-md backdrop-blur-md backdrop-filter">
          <div className="flex-shrink-0">
            <img className="w-16" src={Logo} alt="Logo" />
          </div>

          <div className="flex justify-center items-center">
            <div>
              <div className="sm:hidden">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="text-gray-300 hover:text-[#2afeb7] px-3 py-2 rounded-md text-sm font-medium"
                >
                  {isOpen ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-bars"></i>
                  )}
                </button>
              </div>
              <div className="hidden sm:flex">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`hover:text-[#2afeb7] px-3 pb-1 text-sm font-medium cursor-pointer ${
                        activeMenu === index
                          ? "border-b-[1px] border-[#2afeb7] text-[#2afeb7]"
                          : "text-gray-300"
                      }`}
                      onClick={() => {
                        setActiveMenu(index);
                        scrollToSection(index);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative ml-2" ref={modeRef}>
              <button
                onClick={() => {
                  setModeIsOpen(!modeIsOpen);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {themeOptions?.map((options, index) => (
                  <React.Fragment key={index}>
                    {options.text === theme.text && (
                      <i
                        style={{
                          textShadow: "0 0 2px #2afeb7",
                        }}
                        className={`${options.icon} text-[#2afeb7]`}
                        key={index}
                      ></i>
                    )}
                  </React.Fragment>
                ))}
              </button>
              {modeIsOpen && (
                <ul className="absolute z-10 top-full right-0 rounded-md ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-24 dark:bg-gray-800 p-1">
                  {themeOptions?.map((options, index) => (
                    <li
                      key={index}
                      onClick={() => handleModeChange(options)}
                      className={`py-1 px-2 flex items-center cursor-pointer text-xs text-gray-300 ${
                        theme.text === options.text
                          ? "border-[0.5px] border-[#299571] rounded-sm bg-[#00150e] bg-opacity-100 shadow-xl backdrop-blur-md backdrop-filter mx-[0.5px]"
                          : ""
                      }`}
                    >
                      <i
                        className={`${options.icon} mr-3 ${
                          theme.text === options.text
                            ? "text-[#299571] bg-opacity-100 shadow-xl backdrop-blur-md backdrop-filter"
                            : ""
                        }`}
                      ></i>
                      <span className="text-gray-300 font-medium">
                        {options.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden py-2 ring-1 rounded-md ring-slate-900/10 shadow-lg overflow-hidden mx-10 dark:bg-gray-800 p-1 my-1">
          {menuOptions.map((option, index) => (
            <div
              key={index}
              className={`block text-gray-300 px-4 py-2 text-sm font-medium ${
                activeMenu === index
                  ? "border-[0.5px] border-[#299571] rounded-sm bg-[#00150e] bg-opacity-100 shadow-xl backdrop-blur-md backdrop-filter mx-1"
                  : ""
              }`}
              onClick={() => {
                setActiveMenu(index);
                scrollToSection(index);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
