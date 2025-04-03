import React, { useState, useRef, useEffect } from "react";
import { getRandomResponse } from "./commands";

const Terminal = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = input.trim().toLowerCase();
      setInput("");
  
      if (command === "cls") {
        setOutput([]);
      } else {
        setOutput(prev => [
          ...prev,
          `<span class='text-blue-400'>visitor@prachi:~$</span> ${command}`,
          getRandomResponse(command) || "❌ Command not found. Type <strong>'help'</strong> for available commands."
        ]);
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="relative w-full md:w-1/2 text-left rounded-lg shadow-lg overflow-hidden p-[2px] border-gradient mx-4">
      <div className="flex items-center bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      <div
        ref={terminalRef} 
        className="terminal bg-gray-900 text-white font-mono px-6 py-4 overflow-y-auto rounded-b-lg h-64"
      >
        <p>
          Welcome to <span className="text-blue-400">Prachi's</span> Terminal.
          Type <strong>'help'</strong> for a list of commands.
        </p>
        {output.map((line, index) => (
          <div
            key={index}
            className="output"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}

        <div className="prompt mt-4 relative flex">
          <span className="text-green-400 font-bold">visitor@prachi:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="input-field bg-transparent border-none outline-none text-white w-full caret-green-400 ml-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
