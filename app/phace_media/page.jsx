"use client";

import { Headings, Button } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { PhaceMediaContent, SliderRange } from "@/components";

const PhaceMedia = () => {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1500px] overflow-hidden"
    >
      <PhaceMediaContent />
    </motion.main>
  );
};

export default PhaceMedia;
