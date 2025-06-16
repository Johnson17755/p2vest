"use client";

import { useState, useEffect, useCallback } from "react";
import { Send } from "lucide-react";
import Image from "next/image";
import naira from "@/assets/images/naira.svg";
import shop from "@/assets/images/Shopping.svg";
import black from "@/assets/images/black.svg";
import mask from "@/assets/images/mask.svg";
import mw from "@/assets/images/MW.svg";
import man from "@/assets/images/Man.svg";
import happy from "@/assets/images/happy.svg";
import ray from "@/assets/images/ray.svg";
import doe from "@/assets/images/doe.svg";
import does from "@/assets/images/does.svg";
import smill from "@/assets/images/smill.svg";
import smil from "@/assets/images/smil.svg";

import eating from "@/assets/images/Eating.svg";

import { useInView } from "./use-in-view";

// Define carousel images
const carouselImages = [
  {
    src: mask,
    alt: "Person with hands on face against yellow background",
  },
  {
    src: man,
    alt: "Two people embracing against brown background",
  },
  {
    src: happy,
    alt: "Person in light hoodie against blue background",
  },
  {
    src: mw,
    alt: "Person in purple clothing with green beanie against pink background",
  },
];
const floatingImages = [
  {
    src: shop,
    alt: "Person in blue jacket",
  },
  {
    src: ray,
    alt: "Man in yellow outfit",
  },
  {
    src: doe,
    alt: "Happy woman smiling",
  },
  {
    src: smill,
    alt: "Happy woman smiling",
  },
];
const floatingRight = [
  {
    src: black,
    alt: "Person in blue jacket",
  },
  {
    src: eating,
    alt: "Man in yellow outfit",
  },
  {
    src: does,
    alt: "Happy woman smiling",
  },
  {
    src: smil,
    alt: "Happy woman smiling",
  },
];

const FloatingIcon = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`absolute transform transition-all duration-1000 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function LoadingHome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [carouselRef, carouselInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [waitTextRef, waitTextInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextImage = useCallback(() => {
    setFadeState("fade-out");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
      setFadeState("fade-in");
    }, 500);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, [nextImage]);

  return (
    <div className="min-h-screen bg-white mb-39 sm:top-32">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <FloatingIcon
          className="top-8 sm:top-12 lg:top-16 left-0 sm:left-2 lg:left-0 -translate-x-2 sm:-translate-x-3 lg:-translate-x-4"
          delay={200}
        >
          <div className="w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-16 bg-teal-900 rounded-r-xl sm:rounded-r-2xl flex items-center justify-end pr-2 sm:pr-4 lg:pr-8 shadow-lg">
            <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">
              nd
            </span>
          </div>
        </FloatingIcon>

        <FloatingIcon
          className="top-20 sm:top-32 md:top-40 lg:top-95 left-2 sm:left-3 md:left-4 lg:-left-5"
          delay={600}
        >
          <div className="w-20 h-36 sm:w-24 sm:h-44 lg:w-28 lg:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg relative">
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                fadeState === "fade-in" ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={
                  floatingImages[currentImageIndex].src || "/placeholder.svg"
                }
                alt={floatingImages[currentImageIndex].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FloatingIcon>

        <FloatingIcon
          className="top-32 sm:top-40 md:top-44 lg:top-48 left-16 sm:left-20 md:left-28 lg:left-32 xl:left-48"
          delay={800}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
            <Image
              src={naira || "/placeholder.svg"}
              alt="Naira symbol"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-40 lg:h-40"
            />
          </div>
        </FloatingIcon>

        <FloatingIcon
          className="top-8 sm:top-12 lg:top-16 right-4 sm:right-6 md:right-8 lg:right-16"
          delay={400}
        >
          <div className="w-20 h-36 sm:w-24 sm:h-44 lg:w-30 lg:h-30 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg relative">
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                fadeState === "fade-in" ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={floatingRight[currentImageIndex].src || "/placeholder.svg"}
                alt={floatingRight[currentImageIndex].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FloatingIcon>

        <FloatingIcon
          className="top-40 sm:top-48 md:top-52 lg:top-60 right-8 sm:right-12 md:right-16 lg:right-16 xl:right-50"
          delay={1000}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-25 lg:h-25 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
            <Send className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
          </div>
        </FloatingIcon>

        <FloatingIcon
          className="bottom-16 sm:bottom-12 md:top-auto lg:top-110 -right-2 sm:-right-3 lg:-right-4 translate-x-2 sm:translate-x-3 lg:translate-x-4"
          delay={1200}
        >
          <div className="w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-16 bg-teal-900 rounded-l-xl sm:rounded-l-2xl flex items-center justify-start pl-2 sm:pl-3 lg:pl-4 shadow-lg">
            <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">
              SeM
            </span>
          </div>
        </FloatingIcon>

        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center">
          <div
            ref={carouselRef}
            className={`relative mb-8 sm:mb-10 lg:mb-12 transition-all duration-1000 ease-out ${
              carouselInView
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-2xl sm:rounded-3xl overflow-hidden relative">
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  fadeState === "fade-in" ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={
                    carouselImages[currentImageIndex].src || "/placeholder.svg"
                  }
                  alt={carouselImages[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white text-xs sm:text-sm md:text-sm">
                <p className="leading-snug">
                  Seamlessly bridge distances with our effortless remittance
                  service. Send support, and financial care to your loved ones
                  back home.
                </p>
              </div>
            </div>
          </div>

          <h1
            ref={headingRef}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-paytone text-slate-900 mb-6 sm:mb-8 leading-tight transition-all duration-1000 ease-out ${
              headingInView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Send and Receive <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-slate-900-clip-text font-bold">Money</span>
          </h1>
        </div>

        <div
          ref={waitTextRef}
          className={`absolute top-4 sm:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
            waitTextInView
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1 sm:gap-2 text-slate-400 text-xs sm:text-sm">
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-slate-300 border-t-transparent rounded-full animate-spin"></div>
            <span>scrole down</span>
          </div>
        </div>
      </section>
    </div>
  );
}
