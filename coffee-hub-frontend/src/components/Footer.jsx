import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#4e342e] rounded-none shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#hero" className="flex items-center mb-6 sm:mb-0 space-x-3">
            <span className="self-center text-2xl text-[#f7f7f7] tracking-wide">
              <Logo
                coffeeColor="#f7f7f7"
                hubColor="#d4a373"
                className="text-base sm:text-lg"
              />
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#e0d6c8] sm:mb-0">
            <li>
              <a href="#features" className="hover:underline me-4 md:me-6">
                Why Coffee-Hub
              </a>
            </li>
            <li>
              <a href="#howitworks" className="hover:underline me-4 md:me-6">
                How It Works
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#e0d6c8]/30 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-[#e0d6c8] text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Coffee-Hub</span> All rights reserved.
          Developed by <span className="font-semibold">Dorukhan Bekdur.</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
