"use client";

import { Headings } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer, listVariant, listVariantParent } from "@/lib/motion";

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
        <div className="container px-5 flex items-center justify-center">
          <img src="images/Image 1.png" alt="images" className="w-[50%]" />
        </div>
      </section>
    </motion.main>
  );
};

export default Advertising;
