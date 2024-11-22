import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const LinkStyle = `
  flex 
  items-center 
  justify-center 
  px-4 
  py-2 
  text-white 
  bg-teal-600 
  rounded-sm 
  hover:bg-teal-700 
  transition 
  duration-300 
  ease-in-out
`;

const NavBar = () => {
  const links = [
    {
      name: "Join Us",
      href: "https://t.me/OSCommunityChat",
      icon: <FaInfoCircle />,
    },
  ];

  return (
    <nav className="text-teal-600 flex items-center justify-between p-5 border border-teal-500 bg-gradient-to-r from-gray-100 to-gray-50">
      <h1 className="font-bold text-2xl">Ubma Website Evolution</h1>
      <div className="ml-auto flex space-x-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={LinkStyle}
          >
            <span className="mr-2">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
