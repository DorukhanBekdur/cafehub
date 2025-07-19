import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo ve Tanım */}
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Coffee<span className="text-[#f7ba34]">Hub</span>
          </h3>
          <p className="text-gray-300 text-sm">
            Kahve dükkanınızı dijitale taşıyın. Müşterilerinizin sizi kolayca
            bulmasını sağlayın.
          </p>
        </div>

        {/* Linkler */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Linkler</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#features" className="hover:text-[#f7ba34]">
                Neden Coffee-Hub?
              </a>
            </li>
            <li>
              <a href="#howitworks" className="hover:text-[#f7ba34]">
                Nasıl Çalışır?
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#f7ba34]">
                SSS
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-[#f7ba34]">
                Kayıt Ol
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Bizi Takip Et</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-[#f7ba34]">
              Instagram
            </a>
            <a href="#" className="hover:text-[#f7ba34]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Coffee-Hub. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
