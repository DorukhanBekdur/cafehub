import React from "react";
import CoffeeImage from "/images/coffee-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "url('/images/bg-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-x-12">
        <div className="text-center md:text-left md:max-w-xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#4e342e] leading-tight">
            Your Café, Smarter.
          </h1>
          <p className="mt-6 text-lg text-[#6b4c3b]">
            Create a digital menu in minutes — no printing, no delays, just a
            seamless customer experience.
          </p>
          <a
            href="/register"
            className="mt-8 inline-flex items-center bg-[#d4a373] hover:bg-[#c28d5f] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join Coffee Hub Today
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
          </a>
        </div>

        <div className="mb-12 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src="/images/coffee-hero.jpg"
            alt="Coffee menu illustration"
            className="w-full max-w-md h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
