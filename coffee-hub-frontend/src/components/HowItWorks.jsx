import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description:
        "Sign up and set up your café’s digital identity in minutes.",
    },
    {
      number: 2,
      title: "Build Your Menu",
      description:
        "Add your products, organize them into categories, and upload prices.",
    },
    {
      number: 3,
      title: "Share & Serve",
      description:
        "Print the QR code and let your customers browse your menu — no wait, no app.",
    },
  ];

  return (
    <section id="howitworks" className="bg-[#f5ebe0] py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4e342e] mb-4">
          How It Works ?
        </h2>
        <p className="text-[#6b4c3b] mb-12 max-w-xl mx-auto">
          In just a few simple steps, bring your café into the digital age.
          Create your profile, build a menu that reflects your brand, and offer
          customers instant access through a sleek, QR-powered interface.
        </p>

        <ol className="flex flex-col sm:flex-row items-start sm:items-stretch justify-center gap-10">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex sm:flex-col sm:items-center gap-4 sm:gap-3 max-w-xs text-left sm:text-center"
            >
              <span className="flex items-center justify-center w-12 h-12 border-2 border-[#d4a373] text-[#4e342e] rounded-full font-bold text-lg">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#4e342e]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6b4c3b] mt-1">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
