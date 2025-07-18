import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#73b1a6] tracking-wide">
          Coffee<span className="text-[#f7ba34]">Hub</span>
        </div>

        {/* Menü */}
        <ul className="hidden md:flex space-x-8 text-[#333] font-medium">
          <li>
            <a
              href="#features"
              className="hover:text-[#f7ba34] transition-colors"
            >
              Neden Coffee-Hub?
            </a>
          </li>
          <li>
            <a
              href="#howitworks"
              className="hover:text-[#f7ba34] transition-colors"
            >
              Nasıl Çalışır?
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-[#f7ba34] transition-colors">
              SSS
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div>
          <a
            href="/register"
            className="bg-[#f7ba34] text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition-colors"
          >
            Hemen Başla
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
