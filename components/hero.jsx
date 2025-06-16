"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowLeft, ArrowRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/button";
import { AnimatedText } from "@/components/animated-text";
import logo from "@/assets/images/logo.svg";
import canada from "@/assets/images/flagC.svg";
import ghana from "@/assets/images/flagG.svg";
import nigeria from "@/assets/images/flagN.svg";
import mask from "@/assets/images/masks.svg";
import topup from "@/assets/images/MTN.svg";
import man from "@/assets/images/mans.svg";
import absa from "@/assets/images/absa.svg";
import happy from "@/assets/images/happys.svg";
import kfc from "@/assets/images/kfc.svg";
import mw from "@/assets/images/mws.svg";
import outline from "@/assets/images/Outline.svg";

const slides = [
  {
    id: 0,
    bgImage: mask,
    bgColorClass: "bg-orange-950",
    countryLeft: "Canada",
    countryRight: "Nigeria",
    currencySymbol: "₦",
    flagIcon: canada,
    amount: "-17,000",
    flagIcons: topup,
    transactionTime: "Today, 3:15 PM",
    transactionType: "Airtime top-up",
    transactionAmount: "+₦17,000",
  },
  {
    id: 1,
    bgImage: mw,
    bgColorClass: "bg-orange-950",
    countryLeft: "Nigeria",
    countryRight: "Nigeria",
    currencySymbol: "C$",
    flagIcon: nigeria,
    amount: "+750",
    flagIcons: topup,
    transactionTime: "Yesterday, 1:28 AM",
    transactionType: "Transfer to Lil Sis",
    transactionAmount: "-₦862,912.94",
  },
  {
    id: 2,
    bgImage: happy,
    bgColorClass: "bg-purple-950",
    countryLeft: "Nigeria",
    countryRight: "Ghana",
    currencySymbol: "₦",
    flagIcon: nigeria,
    amount: "-98,000",
    flagIcons: kfc,
    transactionTime: "Today, 11:28 AM",
    transactionType: "Paid at KFC",
    transactionAmount: "-₵760.87",
  },
  {
    id: 3,
    bgImage: man,
    bgColorClass: "bg-slate-900",
    countryLeft: "Canada",
    countryRight: "Ghana",
    currencySymbol: "₵",
    flagIcon: ghana,
    amount: "+3,920",
    flagIcons: absa,
    transactionTime: "Today, 9:45 AM",
    transactionType: "Online transaction",
    transactionAmount: "-C$440.11",
  },
];

// Animation variants for different elements
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const phoneRef = useRef(null);
  const rightSectionRef = useRef(null);

  // Scroll-based transforms
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.9]);

  // InView hooks for different sections
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const leftInView = useInView(leftSectionRef, { once: true, threshold: 0.3 });
  const phoneInView = useInView(phoneRef, { once: true, threshold: 0.2 });
  const rightInView = useInView(rightSectionRef, {
    once: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div
            style={{
              y: backgroundY,
              scale: backgroundScale,
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.bgImage || "/placeholder.svg"}
              alt={`Background for ${currentSlide.countryLeft}`}
              fill
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            style={{ opacity: overlayOpacity }}
            className={`absolute inset-0 w-full h-full ${currentSlide.bgColorClass} z-10`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-8 md:py-12 lg:py-5 text-white flex flex-col h-full min-h-screen">
        {/* Header with scroll animations */}
        <motion.header
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 md:mb-16 lg:mb-24 gap-4 sm:gap-0"
        >
          <motion.div
            variants={fadeInLeft}
            className="flex items-center order-1 sm:order-none"
          >
            <Image
              src={logo}
              alt="Revve Logo"
              width={80}
              height={42}
              className="sm:w-[90px] sm:h-[47px] md:w-[100px] md:h-[52px]"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-paytone font-bold text-center flex-grow order-2 sm:order-none"
          >
            Send. Shop. Spend
          </motion.h1>
        </motion.header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-grow gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Left Section with scroll animations */}
          <motion.div
            ref={leftSectionRef}
            variants={staggerContainer}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/3 order-2 lg:order-1"
          >
            {/* Heading Row with slide-in animation */}
            <motion.div
              variants={fadeInLeft}
              className="flex dm items-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4"
            >
              <AnimatedText
                text={currentSlide.countryLeft}
                animationKey={currentSlide.id}
              />
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  rotateZ: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-20 lg:h-15" />
              </motion.div>
            </motion.div>

            {/* Paragraph with fade-in animation */}
            <motion.p
              variants={fadeInUp}
              className="max-w-xs sm:max-w-sm text-sm sm:text-base md:text-lg lg:text-xl px-4 lg:px-0"
            >
              Seamlessly bridge distances with our effortless remittance
              service. Send support, and financial care to your loved ones back
              home.
            </motion.p>
          </motion.div>

          {/* Phone Mockup with complex animations */}
          <motion.div
            ref={phoneRef}
            initial="hidden"
            animate={phoneInView ? "visible" : "hidden"}
            variants={scaleIn}
            className="relative z-30 w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[360px] md:h-[540px] lg:w-[400px] lg:h-[600px] rounded-[1.5rem] sm:rounded-[2rem] border-4 sm:border-6 md:border-8 border-white shadow-xl order-1 lg:order-2"
          >
            {/* Floating animation for the entire phone */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
                rotateY: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col items-center justify-center">
                {/* Amount Display with enhanced animations */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center gap-1 sm:gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4"
                >
                  <motion.div
                    className="relative"
                    animate={{
                      x: [-5, 5, -5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={currentSlide.flagIcon || "/placeholder.svg"}
                      alt="Flag"
                      width={32}
                      height={32}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"
                    />
                  </motion.div>
                  <motion.span
                    key={currentSlide.amount}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  >
                    {currentSlide.currencySymbol}
                    {currentSlide.amount}
                  </motion.span>
                </motion.div>

                {/* Transaction Card with slide-up animation */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-8 sm:bottom-12 md:bottom-15 left-3 right-3 sm:left-4 sm:right-4 bg-gray-100 rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-center justify-between text-xs sm:text-sm text-gray-700"
                >
                  <motion.div
                    className="flex items-center gap-1 sm:gap-2 p-2 sm:p-3 md:p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Image
                        src={currentSlide.flagIcons || "/placeholder.svg"}
                        alt="Icon"
                        width={16}
                        height={16}
                        className="w-4 h-4 sm:w-5 sm:h-5 border rounded-full sm:rounded-3xl"
                      />
                    </motion.div>
                    <div>
                      <motion.div
                        key={currentSlide.transactionTime}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="font-medium text-xs sm:text-sm"
                      >
                        {currentSlide.transactionTime}
                      </motion.div>
                      <motion.div
                        key={currentSlide.transactionType}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-xs"
                      >
                        {currentSlide.transactionType}
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    key={currentSlide.transactionAmount}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="font-semibold text-xs sm:text-sm"
                  >
                    {currentSlide.transactionAmount}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section with scroll animations */}
          <motion.div
            ref={rightSectionRef}
            variants={staggerContainer}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center lg:items-end lg:text-right w-full lg:w-1/3 order-3"
          >
            <motion.div
              variants={fadeInRight}
              className="flex items-center dm gap-1 sm:gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4"
            >
              <motion.div
                animate={{
                  x: [0, -10, 0],
                  rotateZ: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-20 lg:h-15" />
              </motion.div>
              <AnimatedText
                text={currentSlide.countryRight}
                animationKey={currentSlide.id}
              />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-xs sm:max-w-sm text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 px-4 lg:px-0"
            >
              Get Revve on your phone
            </motion.p>

            <motion.div
              variants={fadeInRight}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              >
                Download the app
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
