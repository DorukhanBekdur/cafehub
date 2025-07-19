import React from "react";
import { FaQrcode, FaCogs, FaChartLine } from "react-icons/fa";

const WhyCoffeeHub = () => {
  return (
    <section
      id="features"
      className="bg-[#fefaf6] min-h-screen flex items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4e342e] mb-6">
          Elevate Your Café Experience with{" "}
          <span className="text-[#d4a373]">Coffee-Hub</span>
        </h2>

        <p className="text-[#6b4c3b] text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Coffee-Hub helps cafés like yours stand out in a digital world —
          paperless menus, seamless updates, and a modern experience that your
          customers will love.
        </p>

        {/* Card Section */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative w-full max-w-sm bg-white shadow-md border border-[#e0d6c8] rounded-lg p-5 pb-6 mx-auto hover:shadow-lg hover:-translate-y-1 transition">
            <div className="flex justify-center mb-4 mt-3">
              <FaQrcode className="w-10 h-10 text-[#4e342e]" />
            </div>
            <div className="flex justify-center mb-3">
              <h3 className="text-xl tracking-widest font-light mb-3 text-[#d4a373] uppercase">
                Instant Digital Menus
              </h3>
            </div>
            <div className="p-2 mt-3 border-t border-[#4e342e] text-center max-h-48 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-[#d4a373]/40 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-[#fefaf6]">
              <p className="text-[#6b4c3b] font-light leading-relaxed">
                Say goodbye to paper menus. Let your customers instantly access
                digital menus via QR code.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-sm bg-white shadow-md border border-[#e0d6c8] rounded-lg p-5 pb-6 mx-auto hover:shadow-lg hover:-translate-y-1 transition">
            <div className="flex justify-center mb-4 mt-3">
              <FaCogs className="w-10 h-10 text-[#4e342e]" />
            </div>
            <div className="flex justify-center mb-3">
              <h3 className="text-xl tracking-widest font-light mb-3 text-[#d4a373] uppercase">
                Effortless Menu Control
              </h3>
            </div>
            <div className="p-2 mt-3 border-t border-[#4e342e] text-center max-h-48 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-[#d4a373]/40 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-[#fefaf6]">
              <p className="text-[#6b4c3b] font-light leading-relaxed">
                Add, edit, and categorize your products easily. You control
                everything from your dashboard.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-sm bg-white shadow-md border border-[#e0d6c8] rounded-lg p-5 pb-6 mx-auto hover:shadow-lg hover:-translate-y-1 transition">
            <div className="flex justify-center mb-4 mt-3">
              <FaChartLine className="w-10 h-10 text-[#4e342e]" />
            </div>
            <div className="flex justify-center mb-3">
              <h3 className="text-xl tracking-widest font-light mb-3 text-[#d4a373] uppercase">
                Stand Out Locally
              </h3>
            </div>
            <div className="p-2 mt-3 border-t border-[#4e342e] text-center max-h-48 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-[#d4a373]/40 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-[#fefaf6]">
              <p className="text-[#6b4c3b] font-light leading-relaxed">
                Reach more customers around you and boost your presence with
                Coffee-Hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoffeeHub;
