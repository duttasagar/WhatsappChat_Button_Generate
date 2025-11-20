import React, { useState } from "react";
import logo3 from "../assets/logo3.png";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "#" },
    { name: "Services", path: "#" },
    { name: "Portfolio", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-inter">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo3}
            alt="Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-white"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-12 text-black font-medium text-base lg:text-lg">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "underline"
                  : "hover:text-green-500 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 lg:gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 sm:px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 sm:px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Signup
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md w-full absolute top-full left-0 flex flex-col items-center py-4 space-y-3 transition-all">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-green-500 font-medium transition-colors text-base"
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex flex-col gap-2 w-full px-6 mt-2">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
              Login
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
              Signup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
