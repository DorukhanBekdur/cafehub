import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Coffee-Hub?",
      answer:
        "Coffee-Hub is a digital platform designed to help cafes transition to online menu systems effortlessly.",
    },
    {
      question: "How do I create my digital menu?",
      answer:
        "Simply sign up, add your products, categorize them, and your digital menu is ready to go!",
    },
    {
      question: "Is Coffee-Hub free to use?",
      answer:
        "We offer a free basic version, and premium features are available with a subscription plan.",
    },
    {
      question: "Can I update my menu anytime?",
      answer:
        "Absolutely! You can update your menu items, prices, and categories anytime from the admin panel.",
    },
    {
      question: "Do my customers need an app?",
      answer:
        "No app required! They just scan the QR code to view your digital menu on their browser.",
    },
    {
      question: "Is support available?",
      answer:
        "Yes, our support team is here to help you with any issues or questions you may have.",
    },
  ];

  return (
    <section className="bg-[#fffaf0] py-24 px-4" id="faq">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-[#4e342e] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-16 border-t border-[#e6dccd] pt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="flex items-center mb-3 text-lg font-semibold text-[#4e342e]">
                <FaQuestionCircle className="text-[#d4a373] mr-2 w-5 h-5" />
                {faq.question}
              </h3>
              <p className="text-[#6b4c3b] text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
