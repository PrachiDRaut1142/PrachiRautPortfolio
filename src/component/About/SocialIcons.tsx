import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialIcons = () => {
  const icons = [
    { href: "https://github.com/PrachiDRaut1142", icon: faGithub, glowClass:'glow-github' },
    { href: "https://linkedin.com/in/prachi-raut", icon: faLinkedinIn , glowClass:'glow-linkedin'},
    { href: "https://twitter.com/PrachiDRaut1142", icon: faTwitter , glowClass:'glow-twitter'},
    { href: "https://instagram.com/prachiraut1142", icon: faInstagram , glowClass:'glow-instagram'},
    { href: "tel:+7666275213", icon: faPhone , glowClass:'glow-phone'},
    { href: "mailto:prachiraut446@gmail.com", icon: faEnvelope , glowClass:'glow-email'},
  ];

  return (
    <div className="flex space-x-6 mt-6">
      {icons.map(({ href, icon,glowClass }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white hover:text-blue-400 transition duration-300 glowing-icon ${glowClass}`}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
