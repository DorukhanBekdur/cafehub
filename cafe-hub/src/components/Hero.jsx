import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-[#f7f7f7] py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#333] mb-4">
          Kahve Dükkanınızı{" "}
          <span className="text-[#73b1a6]">Dijitale Taşıyın</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Coffee-Hub ile kendi dijital menünüzü oluşturun, müşterileriniz sizi
          kolayca bulsun.
        </p>
        <a
          href="/register"
          className="bg-[#f7ba34] hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Hemen Başla
        </a>
      </section>
    </div>
  );
};

export default Hero;
