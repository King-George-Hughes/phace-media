"use client";

import Link from "next/link";
import { NavBar, Footer, Headings, Button } from "@/components";
import { motion } from "framer-motion";
import {
  staggerContainer,
  slideIn,
  listVariant,
  listVariantParent,
} from "@/lib/motion";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

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
        className="px-5 md:px-16 mt-2 md:mt-8 text-center"
      >
        <Headings
          title={"What we’ve been up to"}
          subtitle={"Screen Projects"}
        />

        <div className="w-full h-[250px] md:h-[400px] lg:h-[580px] xl:h-[700px] relative  rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1kaDVu2cnBY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="absolute w-full h-full"
          ></iframe>
        </div>

        <div className="inline-block w-full max-w-[60%] h-2 md:h-3 bg-[rgba(255,255,255,0.2)] rounded-full relative md:mb-16">
          <div className="absolute bg-white h-3 md:h-5 -mt-[2px] md:-mt-1 ml-3 w-[50%] rounded-full"></div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Projects;
