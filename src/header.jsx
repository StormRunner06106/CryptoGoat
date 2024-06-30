import React from "react";

function Header() {
  return (
    <header className="w-full bg-transparent p-4 z-10 fixed top-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <img src="logo.svg"></img>
        </div>
        <nav>
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
