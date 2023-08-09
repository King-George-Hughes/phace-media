"use client";

import { useState } from "react";
import { Headings, Button, SliderRange, AdvertisingSlider } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, slideIn } from "@/lib/motion";
// import Swiper JS

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
                  initial={{ opacity: 1, y: "0%" }}
                  animate={{ opacity: 1, y: "-100%" }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ duration: 0.25 }}
                  className="w-full bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.25)] rounded-2xl flex items-items justify-between p-2 lg:p-10 gap-5 md:gap-10 backdrop-blur-md absolute text-black pointer-events-none"
                  onMouseOver={(e) => e.stopPropagation()}
                >
                  <span className="w-3/4 md:w-2/3 flex flex-col items-start gap-1 md:gap-2 text-start">
                    <h5 className="font-bold text-sm md:text-2xl text-gray-900">
                      Synopsis
                    </h5>
                    <p className="text-[12px] text-sm md:text-lg font-normal">
                      Dorm, Abeiku and Snypa are three unemployed graduates
                      struggling to the teeth to make ends meet. Their destinies
                      take a different turn as they host 3 daughters of Eve for
                      a weekend.
                    </p>
                  </span>
                  <span className="w-1/4 md:w-1/3 flex flex-col items-start gap-1 md:gap-2 text-start">
                    <h5 className="font-bold text-sm md:text-2xl text-gray-900">
                      Genre
                    </h5>
                    <p className="text-[12px] text-sm md:text-lg font-normal">
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

      {/* Swipper */}
      <section className="pb-10 pt-2">
        <AdvertisingSlider />
      </section>
    </motion.main>
  );
}
