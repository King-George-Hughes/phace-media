"use client";

import { NavBar, Footer, Headings } from "@/components";
import { motion } from "framer-motion";
import {
  staggerContainer,
  imageVariants,
  fadeIn,
  textVariant,
  textVariant2,
} from "@/lib/motion";

export default function Home() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full"
    >
      <NavBar />

      <section className="px-5">
        <h1 className="text-md text-center my-3">Trending</h1>
        <img src="images/be Heard thumbnail 1.png" alt="" className="w-full" />
        <Headings title={"Up Coming Events"} subtitle={"Projects"} />
      </section>

      <section className="bgSection relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container px-5 py-10 flex items-center justify-between gap-2"
        >
          <div>
            <motion.div variants={imageVariants("left")} className="">
              <img src="images/Do right by me.png" alt="" />
            </motion.div>
            <motion.div variants={textVariant(0.5)}>
              <motion.h2
                variants={fadeIn("right", "tween", 0.5, 1.5)}
                className="text-sm px-5 ml-6 max-w-md"
              >
                Here we describe the outstanding functionalities on flexipay and
                how these features provide conveneince and makes flexipay stand
                out.
              </motion.h2>
            </motion.div>
          </div>
          <motion.div variants={fadeIn("left", "tween", 0.2, 1.2)}>
            <h2 className="whitespace-nowrap">Buy a Ticket</h2>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
