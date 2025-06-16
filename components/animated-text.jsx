"use client";

import { motion, AnimatePresence } from "framer-motion";

const characterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function AnimatedText({ text, animationKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={animationKey} className="inline-block whitespace-nowrap">
        {text.split("").map((char, index) => (
          <motion.span
            key={char + index}
            variants={characterVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
