"use client";

import { useState, useEffect } from "react";
import { Headings } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { FaArrowRight } from "react-icons/fa";
// import Swiper JS

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const AdvertisingSlider = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isNarrow, setIsNarrow] = useState(2.5);
  const [isNarrowSpace, setIsNarrowSpace] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setIsNarrow(1.5);
      setIsNarrowSpace(15);
    } else if (screenWidth < 980) {
      setIsNarrow(2);
      setIsNarrowSpace(25);
    } else {
      setIsNarrow(2.5);
      setIsNarrowSpace(40);
    }
  }, [screenWidth]);

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
          spaceBetween={isNarrowSpace}
          slidesPerView={isNarrow}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg-gray-200 h-[200px] md:h-[300px] lg:h-[400px] rounded-xl md:rounded-2xl lg:rounded-3xl relative overflow-hidden">
              <div className="w-full h-[40px] md:h-[60px] lg:h-[100px] bg-gray-50 absolute bottom-0 rounded-br-[100px] flex items-center justify-center">
                <h1 className="text-black text-md md:text-xl lg:text-3xl font-bold">
                  Video Ads
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 h-[200px] md:h-[300px] lg:h-[400px] rounded-xl md:rounded-2xl lg:rounded-3xl relative overflow-hidden">
              <div className="w-full h-[40px] md:h-[60px] lg:h-[100px] bg-gray-50 absolute bottom-0 rounded-br-[100px] flex items-center justify-center">
                <h1 className="text-black text-md md:text-xl lg:text-3xl font-bold">
                  Animations
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 h-[200px] md:h-[300px] lg:h-[400px] rounded-xl md:rounded-2xl lg:rounded-3xl relative overflow-hidden">
              <div className="w-full h-[40px] md:h-[60px] lg:h-[100px] bg-gray-50 absolute bottom-0 rounded-br-[100px] flex items-center justify-center">
                <h1 className="text-black text-md md:text-xl lg:text-3xl font-bold">
                  Graphic Designs
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <a
        href="#"
        className="lg:text-2xl float-right mb-10 lg:mb-16 inline-flex items-center justify-center gap-5 mr-5 md:mr-2 lg:mr-1"
      >
        See our Catlogue <FaArrowRight />
      </a>
    </>
  );
};

export default AdvertisingSlider;
