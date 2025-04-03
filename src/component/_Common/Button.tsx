import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="inline-block bg-gradient-to-br from-blue-600 to-purple-700 text-white px-6 py-2 rounded-lg shadow-lg hover:ring-2 hover:ring-purple-500 transition"
    >
      {text}
    </a>
  );
};

export default Button;
