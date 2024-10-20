import { forwardRef, useEffect, useState } from "react";

const Introduction = forwardRef<HTMLDivElement>((props, ref) => {
  const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false);

  const toggleFileExplorer = () => {
    setIsFileExplorerOpen(!isFileExplorerOpen);
  };

  const navigationItems = [
    {
      label: "Files",
      icon: "fas fa-folder",
      onClick: () => {
        toggleFileExplorer();
      },
    },
    { label: "Search", icon: "fas fa-search" },
    { label: "Source Control", icon: "fas fa-code-branch" },
    { label: "Extensions", icon: "fas fa-puzzle-piece" },
  ];

  const topBarItems = [
    {
      label: "Files",
      icon: "fas fa-file",
      onClick: () => console.log("Files clicked"),
    },
    {
      label: "Edit",
      icon: "fas fa-edit",
      onClick: () => console.log("Edit clicked"),
    },
    { label: "View", icon: "fas fa-eye", onClick: toggleFileExplorer },
  ];
  const [content, setContent] = useState<string>("");
  const [lineCount, setLineCount] = useState<number>(1); // Initialize line count to 1

  useEffect(() => {
    // Function to type the content line by line
    const typeContent = async () => {
      const developerData = `
import Developer from './World/dev.js';
const personalData = {
  name: "Prachi Digambar Raut",
  role: "Software Developer",
  dob: "11th April 2002",
  location: "Navi-Mumbai, India",
  email: "prachiraut446@gmail.com",
  phone: "+91 8989898989"
};`;

      const delay = 60;
      let typedContent = "";
      let lines = 1; // Initialize line count to 1

      for (let i = 0; i < developerData.length; i++) {
        typedContent += developerData[i];
        setContent(typedContent);

        // Increment line count when a newline character is encountered
        if (developerData[i] === "\n") {
          lines++;
          setLineCount(lines);
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    };
    typeContent();
  }, []);

  // Define color coding logic based on content
  const getColor = (part: string): string => {
    if (/^import$|^from$|^const$/.test(part)) {
      return "#c957ff"; // Change to #c957ff for import and from
    } else if (/^Developer$|^personalData$/.test(part)) {
      return "#1167b1"; // Blue color for specific words (developer, personalData)
    } else if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(part)) {
      return "#f9c70c"; // Yellow color for variables, function names, etc.
    } else if (/[{}]/.test(part)) {
      return "#f9c70c"; // Purple color for braces
    } else if (/^name:|^role:|^dob:|^location:|^email:|^phone:/.test(part)) {
      return "#6bbf59"; // Change color as needed
    }
    return "white"; // Default color
  };
  // Define status bar items
  const statusBarItems = [
    {
      label: "Line Count",
      icon: "fas fa-file-alt",
      value: `${lineCount} lines`,
    },
    { label: "Language Mode", icon: "fas fa-code", value: "JavaScript" },
  ];

  return (
    <div ref={ref} className="h-screen lg:flex">
      {/* Side Navigation */}
      <div className="flex mx-5">
        <div className={`w-auto h-6/6 bg-gray-800 text-white p-2`}>
          {/* Render navigation items dynamically */}
          <ul className="space-y-6">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer flex items-center space-x-2"
                onClick={item.onClick}
              >
                <i className={item.icon}></i>
              </li>
            ))}
          </ul>
        </div>

        {/* Files Folder Navigation */}
        <div
          className={`w-auto h-6/6 bg-gray-800 text-white py-4 border-l border-gray-950 ${
            isFileExplorerOpen ? "" : "hidden"
          }`}
        >
          <h1 className="text-[10px] mb-4">Explorer</h1>
          {/* Render file explorer items dynamically */}
          <ul className="space-y-2">
            <li className="cursor-pointer flex items-center space-x-2 text-[9px]">
              <i className="fas fa-globe"></i>
              <span>World</span>
            </li>
            <li className="cursor-pointer flex items-center space-x-2 text-[9px]">
              <i className="fas fa-file-code"></i>
              <span>developer.jsx</span>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="w-auto bg-gray-800 text-white flex items-center justify-between p-2">
            <div className="flex items-center space-x-4">
              {topBarItems.map((item, index) => (
                <button
                  key={index}
                  className="text-white hover:text-gray-400 text-[10px]"
                  onClick={item.onClick}
                >
                  <i className={`${item.icon} me-1`}></i>
                  <span className="hidden">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center text-xs">
              <button
                className="text-white hover:text-gray-400 mr-4"
                onClick={() => console.log("Minimize clicked")}
              >
                <i className="fas fa-window-minimize"></i>
              </button>
              <button
                className="text-white hover:text-gray-400 mr-4"
                onClick={() => console.log("Maximize clicked")}
              >
                <i className="fas fa-window-maximize"></i>
              </button>
              <button
                className="text-white hover:text-gray-400"
                onClick={() => console.log("Close clicked")}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className=" border-y border-l bg-gray-800 border-gray-900 text-[9px]">
            <h1 className="m-1">
              <i className="fas fa-file-code me-1"></i> developer.jsx
              <button
                className="ms-1 text-gray-400 hover:text-gray-600"
                onClick={() => console.log("Close clicked")}
              >
                <i className="fas fa-times"></i>
              </button>
            </h1>
          </div>

          <div className="flex-1 flex bg-gray-900 text-white">
            {/* Line Numbers */}
            <div className="bg-gray-800 text-white p-3 py-2 text-[9px] border-x border-gray-950 text-right">
              {Array.from(Array(lineCount).keys()).map((lineNumber) => (
                <div key={lineNumber}>{lineNumber + 1}</div>
              ))}
            </div>

            <div className="w-full lg:w-auto h-80 bg-gray-800 text-white px-1 py-2.5 outline-none overflow-x-auto text-[9px]">
              <pre className="whitespace-pre-wrap">
                {content.split("\n").map((line, index) => (
                  <div key={index}>
                    {line.split(/("[^"]*"|\s+)/).map((part, i) => (
                      <span key={i} style={{ color: getColor(part) }}>
                        {part}
                      </span>
                    ))}
                  </div>
                ))}
              </pre>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-gray-800 text-white flex items-center px-2 py-1 text-[7.2px]">
            {statusBarItems.map((item, index) => (
              <div key={index} className="flex items-center me-6">
                <i className={`${item.icon} me-1`}></i>
                <span>
                  {item.label}: {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
      

      

      {/* Right Panel */}
      <div className="w-auto h-full bg-gray-200 p-4 mx-5">
        <h1 className="text-xl font-bold mb-4">Welcome</h1>
        <p>This is an introduction to your application.</p>
        {/* Add other UI components here */}
      </div>
    </div>
  );
});

export default Introduction;
