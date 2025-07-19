import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleNavigate = (role) => {
    navigate(`/register/${role}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col sm:flex-row">
      {/* Café Owner Side */}
      <div
        onClick={() => handleNavigate("owner")}
        className="group relative w-full sm:w-1/2 flex flex-col justify-center items-center text-center p-10 cursor-pointer overflow-hidden z-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: "url('/images/cafe-owner.jpg')" }}
        ></div>

        <div className="relative z-30 bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
          <h2 className="text-2xl font-bold text-[#4e342e] mb-2">
            I’m a Café Owner
          </h2>
          <p className="text-[#6b4c3b] max-w-sm mb-4 font-light">
            Create your digital café profile and manage your menu with ease.
          </p>
          <button className="bg-[#d4a373] text-[#1a1a1a] px-6 py-2 rounded-full font-medium hover:bg-[#6b4c3b] transition cursor-pointer">
            Register as Owner
          </button>
        </div>
      </div>

      {/* Customer Side */}
      <div
        onClick={() => handleNavigate("customer")}
        className="group relative w-full sm:w-1/2 flex flex-col justify-center items-center text-center p-10 cursor-pointer overflow-hidden z-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: "url('/images/customer.jpg')" }}
        ></div>

        <div className="relative z-30 bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-[#4e342e] mb-2">
            I’m a Customer
          </h2>
          <p className="text-[#6b4c3b] max-w-sm mb-4 font-light">
            Explore cafés, scan QR menus, and rate your experiences instantly.
          </p>
          <button className="bg-[#6b4c3b] text-[#d4a373] px-6 py-2 rounded-full font-medium hover:bg-[#4e342e] transition cursor-pointer">
            Register as Customer
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChooseRole;
