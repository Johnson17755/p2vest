"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountryName({ name, isActive }) {
  const [animateLetters, setAnimateLetters] = useState(false);

  useEffect(() => {
    if (name === "Nigeria" && isActive) {
      setAnimateLetters(true);

      const timer = setTimeout(() => {
        setAnimateLetters(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [name, isActive]);

  if (name === "Nigeria" && animateLetters && isActive) {
    return (
      <div className="text-white text-3xl md:text-5xl font-bold flex">
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [-20, 0],
              opacity: 1,
              transition: {
                delay: index * 0.2,
                duration: 0.2,
                ease: "easeOut",
              },
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-white text-3xl md:text-5xl font-bold"
    >
      {name}
    </motion.div>
  );
}
