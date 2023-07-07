"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant, textVariant2 } from "@/lib/motion";

const Headings = ({ title, subtitle }) => {
  return (
    <div className="container flex items-center justify-between mb-3">
      <motion.h1 variants={textContainer} className="text-lg mt-10 mb-3">
        {Array.from(title).map((letter, index) => {
          return (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </motion.h1>
      {/* <h1 className="hidden md:block md:text-lg md:mt-10 md:mb-3">
        {subtitle}
      </h1> */}
    </div>
  );
};

export default Headings;
