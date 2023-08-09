"use client";

import { useState } from "react";
import { Headings, Button, SliderRange } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showSynopsis, setShowSynopsis] = useState(false);

  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1500px] overflow-hidden"
    >
      {/* Comming Up */}
      <section className="px-5 md:px-8 text-center mt-10 md:mt-16 relative">
        <h1
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-md text-center my-3 md:text-5xl md:mb-5 uppercase font-bold tracking-widest"
          style={{ fontFamily: "Insanibc" }}
        >
          Coming Up
        </h1>
        <div className="w-full relative">
          <img
            src="https://res.cloudinary.com/dg4k5afvg/image/upload/v1691582981/Phace_Media_Banner_2_4ce8406e7f.png"
            alt="phaace"
            className="w-full"
            onClick={() => setShowSynopsis((prevState) => !prevState)}
            onMouseOver={() => setShowSynopsis(true)}
            onMouseOut={() => setShowSynopsis(false)}
          />

          <AnimatePresence>
            {showSynopsis && (
              <>
                <motion.div
                  initial={{ opacity: 1, y: "100%" }}
                  animate={{ opacity: 1, y: "-100%" }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ duration: 0.25 }}
                  className="w-full bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.25)] rounded-2xl flex flex-col lg:flex-row items-items justify-between p-2 lg:p-10 gap-5 md:gap-10 backdrop-blur-md absolute text-black pointer-events-none"
                  onMouseOver={(e) => e.stopPropagation()}
                >
                  <span className="w-full lg:w-2/3 flex flex-col items-start gap-1 md:gap-2 text-start">
                    <h5 className="font-bold text-md md:text-2xl text-gray-900">
                      Synopsis
                    </h5>
                    <p className="text-sm md:text-lg font-normal">
                      Dorm, Abeiku and Snypa are three unemployed graduates
                      struggling to the teeth to make ends meet. Their destinies
                      take a different turn as they host 3 daughters of Eve for
                      a weekend.
                    </p>
                  </span>
                  <span className="w-full lg:w-1/3 flex flex-col items-start gap-1 md:gap-2 text-start">
                    <h5 className="font-bold text-md md:text-2xl text-gray-900">
                      Genre
                    </h5>
                    <p className="text-sm md:text-lg font-normal">
                      Comedy, Musical, Political Satire
                    </p>
                  </span>
                  <span></span>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

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

        <div className="mx-3 lg:mx-0">
          <SliderRange />
        </div>
        <div className="md:mb-28" />

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
            <img
              src="https://res.cloudinary.com/dg4k5afvg/image/upload/v1691583950/kaf_1_0eaaa2d92f.png"
              alt="kaf"
              className="w-full"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-between gap-5 relative">
            <img
              src="https://res.cloudinary.com/dg4k5afvg/image/upload/v1691583630/IMG_3230_Edit_2_Large_1_f6dbc1b6c9.png"
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
            <p className="text-sm max-w-[300px] ml-5 md:ml-1 md:mt-5 md:max-w-[800px] md:text-lg">
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
            <motion.h2 variants={listVariant} className="md:text-2xl">
              What do you need?
            </motion.h2>
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
