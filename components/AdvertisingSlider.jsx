"use client";

import { Headings } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
// import Swiper JS

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const AdvertisingSlider = () => {
  return (
    <>
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

      {/* Swipper */}
      <section className="pb-10 pt-2">
        <Swiper
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={2.5}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
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
      </section>
    </>
  );
};

export default AdvertisingSlider;
