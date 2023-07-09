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
  listVariant,
  listVariantParent,
} from "@/lib/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-[250px] md:h-[400px] lg:h-[570px] xl:h-[700px] relative bg-red-500 rounded-xl md:rounded-2xl overflow-hidden"
        >
          {/* <img
            src="images/be Heard thumbnail 1.png"
            alt=""
            className="w-full"
          /> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1kaDVu2cnBY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="absolute w-full h-full"
          ></iframe>
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
          <motion.div
            variants={listVariantParent}
            initial="hidden"
            whileInView="show"
          >
            <motion.p
              variants={listVariant}
              className="text-sm max-w-[300px] ml-5"
            >
              Here we describe the outstanding functionalities on flexipay and
              how these features provide conveneince and makes flexipay stand
              out.
            </motion.p>
          </motion.div>

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
          <motion.div
            variants={listVariantParent}
            initial="hidden"
            whileInView="show"
          >
            <motion.p
              variants={listVariant}
              className="text-sm max-w-[300px] ml-5"
            >
              Here we describe the outstanding functionalities on flexipay and
              how these features provide conveneince and makes flexipay stand
              out.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section Four */}
      <motion.section
        variants={listVariantParent}
        initial="hidden"
        whileInView="show"
        className="py-5"
      >
        <div className="container px-5">
          <div className="w-full flex items-center justify-around">
            <motion.h1 variants={listVariant}>What do you need?</motion.h1>
            <motion.select
              variants={listVariant}
              name=""
              id=""
              className="bgSection rounded-full px-2 py-1 text-gray-400 text-sm outline-none text-center"
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

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}
