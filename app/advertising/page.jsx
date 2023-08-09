"use client";

import { AdvertisingSlider } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const Advertising = () => {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1500px] overflow-hidden"
    >
      <AdvertisingSlider />
    </motion.main>
  );
};

export default Advertising;
