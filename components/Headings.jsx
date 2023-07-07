"use client";

import { motion } from "framer-motion";

const Headings = ({ title, subtitle }) => {
  return (
    <div className="container flex items-center justify-between mb-3">
      <h1 className="text-lg mt-10 mb-3">{title}</h1>
      <h1 className="hidden md:block md:text-lg md:mt-10 md:mb-3">
        {subtitle}
      </h1>
    </div>
  );
};

export default Headings;
