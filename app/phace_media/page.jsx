"use client";

import { Headings, Button } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

const PhaceMedia = () => {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full overflow-hidden"
    >
      {/* Up To */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-5 md:px-16 mt-2 md:mt-16 text-center"
      >
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
    </motion.main>
  );
};

export default PhaceMedia;
