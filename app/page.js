"use client";

import Link from "next/link";
import { NavBar, Footer, Headings } from "@/components";
import { motion } from "framer-motion";
import {
  staggerContainer,
  imageVariants,
  fadeIn,
  textVariant,
  textVariant2,
  slideIn,
} from "@/lib/motion";

export default function Home() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full overflow-hidden"
    >
      {/* Nav Bar */}
      <NavBar />

      {/* Section One */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="px-5"
      >
        <motion.h1
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-md text-center my-3"
        >
          Trending
        </motion.h1>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <img
            src="images/be Heard thumbnail 1.png"
            alt=""
            className="w-full"
          />
        </motion.div>
        <Headings title={"Up Coming Events"} subtitle={"Projects"} />
      </motion.section>

      {/* Section Two */}
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
            <h2 className="whitespace-nowrap font-bold">Buy a Ticket</h2>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Three */}
      <section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container px-5 py-8"
        >
          <Headings
            title="Bring your business to life"
            subtitle="Advertising"
          />
          <motion.p
            variants={fadeIn("left", "tween", 0.5, 1.5)}
            className="text-sm max-w-[300px] ml-5"
          >
            Here we describe the outstanding functionalities on flexipay and how
            these features provide conveneince and makes flexipay stand out.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex w-full items-center justify-center my-10"
          >
            <motion.div variants={fadeIn("right", "tween", 0.5, 1.5)}>
              <Link
                href={"#"}
                className="btnColor text-black w-[150px] h-[40px] flex items-center justify-center rounded-tr-full rounded-bl-full text-sm"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          <Headings
            title="Let's help you finish that project!"
            subtitle="Rentals"
          />
          <motion.p
            variants={fadeIn("left", "tween", 0.5, 1.5)}
            className="text-sm max-w-[300px] ml-5"
          >
            Here we describe the outstanding functionalities on flexipay and how
            these features provide conveneince and makes flexipay stand out.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}
