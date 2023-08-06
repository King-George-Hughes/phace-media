"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/lib/motion";

const Headings = ({ title, subtitle }) => {
  return (
    <div
      className="container flex items-center justify-between mb-3 z-50"
      style={{ fontFamily: "Nexa" }}
    >
      <motion.h2
        variants={textContainer}
        className="text-lg mt-10 mb-3 font-bold md:text-5xl"
      >
        {/* {Array.from(title).map((letter, index) => { */}
        {title.split("").map((letter, index) => {
          return (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </motion.h2>

      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="hidden md:block md:text-2xl md:mt-10 md:mb-3"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
};

export default Headings;
