import React, { useState } from "react";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-[#fefaf6] via-[#f2e6dc] to-[#e7d3c2] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="p-1">
          <Logo coffeeColor="#4e342e" hubColor="#d4a373" />
        </div>

        <ul className="hidden md:flex space-x-8 text-[#4e342e] font-medium">
          <li className="cursor-pointer">
            <a
              href="#features"
              className="hover:text-[#d4a373] transition-colors"
            >
              Why Coffee-Hub?
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#howitworks"
              className="hover:text-[#d4a373] transition-colors"
            >
              How It Works
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#faq" className="hover:text-[#d4a373] transition-colors">
              FAQs
            </a>
          </li>
        </ul>

        <Link
          to="/choose-role"
          className="bg-[#d4a373] hover:bg-[#c28d5f] text-[#1a1a1a] font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
        >
          Get Started
          <svg
            className="ms-2 w-4 h-4 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-[#4e342e] font-medium bg-gradient-to-r from-[#fefaf6] via-[#f2e6dc] to-[#e7d3c2]">
          <a href="#features" className="block hover:text-[#d4a373]">
            Why Coffee-Hub?
          </a>
          <a href="#howitworks" className="block hover:text-[#d4a373]">
            How It Works
          </a>
          <a href="#faq" className="block hover:text-[#d4a373]">
            FAQs
          </a>
          <a
            href="/register"
            className="inline-block bg-[#d4a373] hover:bg-[#c28d5f] text-[#1a1a1a] font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
