"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Iconphone from "@/assets/images/iconphone.svg";
import thought from "@/assets/images/thought.svg";
import envelop from "@/assets/images/envelop.svg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "johndoe@gmail.com",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="relative min-h-screen bg-[#4F0072] p-2 sm:p-4 md:p-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="lg:col-span-4 space-y-6 pt-8 sm:pt-12 md:pt-20 pb-8 sm:pb-12 md:pb-50 px-2 sm:px-4 md:px-8 lg:px-25">
        {/* Thought bubble - Hidden on mobile and small tablets */}
        <div className="hidden lg:block absolute top-1/4 -right-15 w-42 m-20 h-34 opacity-90">
          <div className="relative w-full h-full">
            <Image
              src={thought}
              alt="thought"
              width={200}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-1">
              <div className="w-2 h-2 bg-purple-800 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-800 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Phone icon - Hidden on mobile, visible from medium screens up */}
        <div className="hidden md:block absolute bottom-16 right-1 m-20 w-42 h-34 opacity-90">
          <Image
            src={Iconphone}
            alt="Phone showing ASOS shopping app"
            width={200}
            height={200}
            className="w-full h-auto rounded-[2rem] object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6 md:space-y-18">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-paytone font-bold text-white leading-tight">
                    Get in touch
                  </h1>
                  <div className="space-y-2">
                    <p className="text-purple-200 text-sm sm:text-base md:text-lg">
                      Do you have any questions or feedback?
                    </p>
                    <p className="text-purple-200 text-sm sm:text-base md:text-lg">
                      We'd love to hear from you.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base md:text-lg">
                      +1(343)338-5190
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base md:text-lg break-all">
                      hello@revveme.com
                    </span>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                      2482 Yonge St Toronto ON M4P 2H5
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="relative">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-purple-200 text-sm font-medium mb-2"
                    >
                      Fullname
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      placeholder="Firstname Lastname"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-purple-200 text-sm font-medium mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-purple-200 text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type here.."
                      rows="4"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 md:rows-5 bg-transparent border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-white text-purple-900 hover:bg-gray-100 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </div>

                {/* Envelope - Hidden on mobile and small screens */}
                <div className="hidden lg:block absolute -bottom-65 -left-170 w-42 h-64 opacity-80 mb-[-20px]">
                  <Image
                    src={envelop}
                    alt="envelop"
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
