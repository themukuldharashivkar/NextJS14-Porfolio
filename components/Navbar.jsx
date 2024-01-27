"use client";

// components/Navbar.js
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="p-4 pb-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div
          className="flex items-center gap-[1ch] text-slate-700 text-lg font-bold cursor-pointer"
          onClick={() => navigateTo("/")}
        >
          <div className="w-5 h-5 bg-emerald-500 rounded-full" />
          Mukul
        </div>

        {/* Menu Button for small devices */}
        <button
          className="lg:hidden text-slate-700 focus:outline-none bg-emerald-400 px-2 py-1 rounded-lg hover:bg-emerald-300"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <div
            className="text-slate-700 cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            Home
          </div>
          <div
            className="text-slate-700 cursor-pointer"
            onClick={() => navigateTo("/projects")}
          >
            Projects
          </div>
          <div
            className="text-slate-700 cursor-pointer"
            onClick={() => navigateTo("/contact")}
          >
            Contact
          </div>
        </div>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-12 left-0 right-0 bg-white p-4 px-9">
            <div
              className="text-slate-700 block py-2 cursor-pointer"
              onClick={() => navigateTo("/")}
            >
              Home
            </div>
            <div
              className="text-slate-700 block py-2 cursor-pointer"
              onClick={() => navigateTo("/projects")}
            >
              Projects
            </div>
            <div
              className="text-slate-700 block py-2 cursor-pointer"
              onClick={() => navigateTo("/contact")}
            >
              Contact
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
