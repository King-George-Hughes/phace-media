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

export default function Home() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1500px] overflow-hidden"
    >
      {/* Comming Up */}
      <section className="px-5 md:px-8 text-center mt-5 md:mt-16">
        <h1
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-md text-center my-3 md:text-5xl md:mb-5 uppercase font-bold tracking-widest"
          style={{ fontFamily: "Insanibc" }}
        >
          Coming Up
        </h1>
        <img src="images/Phace Media Banner 2.png" alt="" className="w-full" />

        <Button text={"Buy Ticket"} />
      </section>

      {/* Up To */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-5 md:px-8 mt-2 md:mt-16 text-center"
      >
        <Headings title={"What we’ve been up to"} subtitle={"Projects"} />

        <div className="w-full h-[250px] md:h-[400px] lg:h-[580px] xl:h-[700px] relative  rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-10">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1kaDVu2cnBY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="absolute w-full h-full"
          ></iframe> */}
          <img
            src="images/be Heard thumbnail 1.png"
            alt="beheard"
            className="w-full"
          />
        </div>

        <div className="inline-block w-full max-w-[60%] h-2 md:h-3 bg-[rgba(255,255,255,0.2)] rounded-full relative md:mb-16">
          <div className="absolute bg-white h-3 md:h-5 -mt-[2px] md:-mt-1 ml-3 w-[50%] rounded-full"></div>
        </div>

        <Headings title={"Who we are"} subtitle={"PhaceMedia"} />
      </motion.section>

      {/* Who we are */}
      <section className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="container px-5 lg:px-0 py-10 flex items-center justify-between gap-5 flex-col md:flex-row md:gap-8"
        >
          <div className="w-full h-full flex flex-col items-center justify-between gap-10 relative">
            <p>
              We are storytellers, visionaries, and creators. We are a
              passionate team of media professionals dedicated to producing
              captivating content that leaves a lasting impact on audiences
              worldwide. With a keen eye for detail and an unwavering commitment
              to quality, we bring ideas to life, one frame at a time.
            </p>
            <div className="absolute bottom-[15%]">
              <Button text={"Learn More"} />
            </div>
            <img src="images/kaf  1.png" alt="kaf" className="w-full" />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-between gap-5 relative">
            <img
              src="images/IMG_3230-Edit-2 Large 1.png"
              alt="kaf"
              className="w-full"
            />
            <div className="absolute top-[5%]">
              <Button text={"View Gallery"} />
            </div>
            <p>
              Phace Media Studios is a Unique Media House, that stems for the
              single objective of changing the Narrative, telling African
              Stories the way they should be told and bridging the media gab
              between Africa and the outside world.
            </p>
          </div>
        </motion.div>
      </section>

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
}
