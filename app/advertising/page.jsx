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

const Advertising = () => {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full overflow-hidden"
    >
      {/* Section Three */}
      <section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container px-5 py-8"
        >
          <Headings
            title="Bring your business to life"
            subtitle="Advertising"
          />
          <div>
            <p className="text-sm max-w-[300px] ml-5 md:ml-1 md:mt-5 md:max-w-[500px] md:text-lg">
              We believe that every business has a unique story to tell, and
              it's our mission to bring that story to life. We provide
              full-service advertising dedicated to helping our clients make a
              lasting impact in today's dynamic and competitive market.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section Four */}
      <motion.section
        variants={listVariantParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-5 md:mt-16 md:mb-8"
      >
        <div className="container px-5">
          <div className="w-full flex items-center justify-around">
            <motion.h1 variants={listVariant} className="md:text-2xl">
              What do you need?
            </motion.h1>
            <motion.select
              variants={listVariant}
              name=""
              id=""
              className="bgSection rounded-full px-2 py-1 text-gray-400 text-[0.7em] outline-none text-center md:text-2xl md:px-10 md:py-3"
            >
              <option value="" selected>
                --- Select a Category ---
              </option>
              <option value="">Money Transfer</option>
              <option value="">Data Packages</option>
              <option value="">Airtime</option>
            </motion.select>
          </div>
        </div>
      </motion.section>

      {/* Swipper */}
      <section className="pb-10 pt-2">
        <div className="container px-5">
          <Swiper
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={1.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src="images/WhatsApp Image 2022-07-15 at 9.18 1.png"
                alt="slider"
                width={"100%"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/WhatsApp Image 2022-07-15 at 9.18 1.png"
                alt="slider"
                width={"100%"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/WhatsApp Image 2022-07-15 at 9.18 1.png"
                alt="slider"
                width={"100%"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/WhatsApp Image 2022-07-15 at 9.18 1.png"
                alt="slider"
                width={"100%"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </motion.main>
  );
};

export default Advertising;
