"use client";

import { Headings } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
// import Swiper JS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Projects = () => {
  const [toggleVideo, setToggleVideo] = useState(false);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  const youtubeVideos = [
    {
      title: "Beheard",
      image: "images/be Heard thumbnail 1.png",
      thumbnail: "https://www.youtube.com/embed/1kaDVu2cnBY",
    },
    {
      title: "To the ugly me",
      image: "images/be Heard thumbnail 1.png",
      thumbnail: "https://www.youtube.com/embed/y-7UdWHt5mA",
    },
  ];

  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full max-w-[1500px] overflow-hidden"
    >
      {/* Up To */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-5 md:px-16 mt-2 md:mt-8 text-center"
      >
        <Headings
          title={"What we’ve been up to"}
          subtitle={"Screen Projects"}
        />

        <Slider {...settings}>
          {youtubeVideos.map((youVid) => {
            return (
              <>
                <div
                  className={
                    toggleVideo
                      ? "hidden"
                      : "w-full h-[250px] md:h-[400px] lg:h-[580px] xl:h-[700px] relative  rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-10"
                  }
                >
                  <img
                    src={youVid.image}
                    alt={youVid.title}
                    className="w-full"
                    onClick={() => setToggleVideo(true)}
                  />
                </div>

                <div
                  className={
                    toggleVideo
                      ? "w-full h-[250px] md:h-[400px] lg:h-[580px] xl:h-[700px] relative  rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-10"
                      : "hidden"
                  }
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={youVid.thumbnail}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className={`absolute w-full h-full`}
                  ></iframe>
                </div>
              </>
            );
          })}
        </Slider>
        {/* <div
          className={
            toggleVideo
              ? "w-full h-[250px] md:h-[400px] lg:h-[580px] xl:h-[700px] relative  rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-10"
              : "hidden"
          }
        >
          {youtubeVideos.map((youVid) => {
            return (
              <iframe
                width="100%"
                height="100%"
                src={youVid.thumbnail}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className={`absolute w-full h-full`}
              ></iframe>
            );
          })}
        </div> */}

        {/*  */}
        {/* <Slider {...settings}>
          <div className="testimoni--wrapper">
            <p>Testimoni One</p>
          </div>
          <div className="testimoni--wrapper">
            <p>Testimoni Two</p>
          </div>
          <div className="testimoni--wrapper">
            <p>Testimoni Three</p>
          </div>
        </Slider> */}
        {/*  */}

        <div className="inline-block w-full max-w-[60%] h-2 md:h-3 bg-[rgba(255,255,255,0.2)] rounded-full relative md:mb-16">
          <div className="absolute bg-white h-3 md:h-5 -mt-[2px] md:-mt-1 ml-3 w-[50%] rounded-full"></div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Projects;
