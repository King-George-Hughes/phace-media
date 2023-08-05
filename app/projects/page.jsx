"use client";

import { Headings, SliderRange } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const Projects = () => {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1500px] overflow-hidden"
    >
      {/* Up To */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-5 md:px-16 mt-2 mb-5 md:mt-8 text-center"
      >
        <Headings
          title={"What we’ve been up to"}
          subtitle={"Screen Projects"}
        />

        <SliderRange />
      </motion.section>
    </motion.main>
  );
};

export default Projects;
