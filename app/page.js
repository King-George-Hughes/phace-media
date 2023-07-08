"use client";

import { NavBar, Footer, Headings } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

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

      <section className="bgSection">
        <div className="container"></div>
      </section>

      <Footer />
    </motion.main>
  );
}
