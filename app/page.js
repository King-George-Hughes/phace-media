"use client";

import Link from "next/link";
import { NavBar, Footer, Headings } from "@/components";
import { motion } from "framer-motion";
import {
  staggerContainer,
  imageVariants,
  fadeIn,
  textVariant,
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
      className="w-full overflow-hidden"
    >
      {/* Nav Bar */}
      <NavBar />

      {/* Section One */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-5 md:px-20"
      >
        <motion.h1
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-md text-center my-3 md:text-5xl md:mb-5"
          style={{ fontFamily: "Nexa" }}
        >
          Trending
        </motion.h1>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-[250px] md:h-[400px] lg:h-[580px] xl:h-[700px] relative  rounded-xl md:rounded-2xl overflow-hidden md:mb-20"
        >
          <iframe
            width="100%"
            height="100%"
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
          viewport={{ once: true, amount: 0.25 }}
          className="container px-5 py-10 flex items-center justify-between gap-2 md:gap-5"
        >
          <div className="md:flex items-center justify-between">
            <motion.div variants={imageVariants("left")} className="">
              <img src="images/Do right by me.png" alt="" />
            </motion.div>
            <motion.div variants={textVariant(0.5)}>
              <motion.h2
                variants={fadeIn("right", "tween", 0.5, 1.5)}
                className="text-sm px-5 ml-6 max-w-md md:text-xl md:max-w-lg"
              >
                Here we describe the outstanding functionalities on flexipay and
                how these features provide conveneince and makes flexipay stand
                out.
              </motion.h2>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1.2)}
            style={{ fontFamily: "Nexa" }}
          >
            <h2 className="whitespace-nowrap font-bold md:text-2xl">
              Buy a Ticket
            </h2>
          </motion.div>
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
          <motion.div
            variants={listVariantParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={listVariant}
              className="text-sm max-w-[300px] ml-5 md:ml-1 md:mt-5 md:max-w-[500px] md:text-lg"
            >
              Here we describe the outstanding functionalities on flexipay and
              how these features provide conveneince and makes flexipay stand
              out.
            </motion.p>
          </motion.div>

          <div className="md:flex md:gap-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-8"
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className=""
              >
                <img src="images/lady.png" alt="" className="w-full" />
              </motion.div>
            </motion.div>

            <div className="md:flex md:flex-col md:items-center md:justify-between">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="hidden mt-8 md:block"
              >
                <motion.div
                  variants={slideIn("right", "tween", 0.2, 1)}
                  className=""
                >
                  <img src="images/November 1.png" alt="" className="w-full" />
                </motion.div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
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
            </div>
          </div>

          <Headings
            title="Let's help you finish that project!"
            subtitle="Rentals"
          />
          <motion.div
            variants={listVariantParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={listVariant}
              className="text-sm max-w-[300px] ml-5 md:ml-1 md:mt-5 md:max-w-[500px] md:text-lg"
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
        viewport={{ once: true, amount: 0.25 }}
        className="py-5"
      >
        <div className="container px-5">
          <div className="w-full flex items-center justify-around">
            <motion.h1 variants={listVariant}>What do you need?</motion.h1>
            <motion.select
              variants={listVariant}
              name=""
              id=""
              className="bgSection rounded-full px-2 py-1 text-gray-400 text-[0.7em] outline-none text-center"
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

      {/* Footer */}
      <Footer />
    </motion.main>
  );
}
