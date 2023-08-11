"use client";

import { useState } from "react";
import {
  Headings,
  Button,
  SliderRange,
  AdvertisingSlider,
  PhaceMediaContent,
} from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, slideIn } from "@/lib/motion";

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed w-full h-screen left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)]  pointer-events-none"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showSynopsis && (
              <>
                <motion.div
                  initial={{ opacity: 1, y: "0%" }}
                  animate={{ opacity: 1, y: "-100%" }}
                  exit={{ opacity: 0, y: "100%" }}
                  transition={{ duration: 0.25 }}
                  className="w-full bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.25)] rounded-3xl flex items-items justify-between p-2 lg:p-8 gap-5 md:gap-10 backdrop-blur-md absolute text-black pointer-events-none z-10"
                  // onMouseOver={(e) => e.stopPropagation()}
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
      </motion.section>

      <PhaceMediaContent />

      {/* Swipper */}
      <AdvertisingSlider />
    </motion.main>
  );
}
