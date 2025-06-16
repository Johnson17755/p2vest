"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How does Revve work?",
    answer:
      "Revve is a digital financial platform that allows you to send, receive, and manage money seamlessly. Simply create an account, verify your identity, and start using our services to transfer money, pay bills, and more.",
  },
  {
    question: "Where is Revve available?",
    answer:
      "Revve is currently available in multiple countries across Africa, Europe, and North America. We're continuously expanding our services to new regions. Check our website for the most up-to-date list of supported countries.",
  },
  {
    question: "Is Revve a bank?",
    answer:
      "No, Revve is not a traditional bank. We are a licensed financial technology company that partners with regulated financial institutions to provide our services. Your funds are held securely with our banking partners.",
  },
  {
    question: "Is my money safe with Revve?",
    answer:
      "Yes, your money is safe with Revve. We use bank-level security measures, including encryption, fraud monitoring, and regulatory compliance. Your funds are held in segregated accounts with our licensed banking partners.",
  },
  {
    question: "What document do I need for verification?",
    answer:
      "For verification, you'll need a valid government-issued photo ID (passport, driver's license, or national ID card) and proof of address (utility bill, bank statement, or rental agreement) dated within the last 3 months.",
  },
  {
    question: "What should I do if my transaction is delayed or fails?",
    answer:
      "If your transaction is delayed or fails, first check your transaction history in the app. If the issue persists, contact our customer support team with your transaction reference number. We'll investigate and resolve the issue promptly.",
  },
  {
    question: "Can I transfer money within the same currency?",
    answer:
      "Yes, you can transfer money within the same currency. Revve supports domestic transfers as well as international transfers. Same-currency transfers typically have lower fees and faster processing times.",
  },
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-[#4F0072] p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-16 md:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4 lg:pt-37 space-y-8 sm:space-y-12 lg:space-y-20">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-paytone font-bold text-white">
                FAQs
              </h1>

              <p className="text-purple-200 text-sm sm:text-base text-bold max-w-full sm:max-w-md lg:max-w-sm">
                Here are some basic questions and answers to help you get
                started
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-purple-200 text-xs sm:text-sm">
                Get Revve on your phone
              </p>

              <button className="bg-white text-purple-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200 text-sm sm:text-base">
                Download the app
              </button>
            </div>

            {/* Bottom text with lock icon - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2 text-purple-300 text-xs mt-6 sm:mt-8">
              <div className="w-4 h-4 border border-purple-300 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <span>Point your mouse cursor here to continue scrolling</span>
            </div>
          </div>

          {/* Right FAQ Items */}
          <div className="lg:col-span-8 space-y-2 sm:space-y-4 font-paytone">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-purple-600 last:border-b-0"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-6 text-left group hover:text-purple-200 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-purple-200 pr-3 sm:pr-4 leading-tight">
                    {item.question}
                  </h3>

                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                    {openItems.includes(index) ? (
                      <Minus className="w-4 h-4 sm:w-6 sm:h-6 lg:w-16 lg:h-6 text-purple-200 group-hover:text-white transition-colors duration-200" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-6 sm:h-6 lg:w-16 lg:h-6 stroke-[3] sm:stroke-[4] text-purple-200 group-hover:text-white transition-colors duration-200" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="pb-4 sm:pb-6 pr-8 sm:pr-12 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-purple-300 leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
