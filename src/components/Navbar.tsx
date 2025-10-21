"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed  top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="text-white font-bold text-2xl tracking-widest uppercase">
          MEHMET ARI
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-orange-500 cursor-pointer transition-colors">
            Services
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">
            Technologies
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">
            Portfolio
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">
            Contact
          </li>
        </ul>

        <button className="hidden md:flex items-center gap-2 border border-gray-500 rounded-full px-3 py-1 text-white hover:border-orange-500 transition-colors">
          ENG 🌐
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
