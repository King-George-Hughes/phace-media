"use client";

// import Swiper JS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";

const SliderRange = () => {
  const [toggleVideo, setToggleVideo] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,

    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCurrentSlide(value);
    sliderRef.current.slickGoTo(value);
  };

  const youtubeVideos = [
    {
      title: "Beheard",
      image: "images/be Heard thumbnail 1.png",
      thumbnail: "https://www.youtube.com/embed/1kaDVu2cnBY",
    },
    {
      title: "To the ugly me",
      image: "images/Phace Media Banner 2.png",
      thumbnail: "https://www.youtube.com/embed/y-7UdWHt5mA",
    },
    {
      title: "The Lady",
      image: "images/lady.png",
      thumbnail: "https://www.youtube.com/embed/PXI2apYtmyU",
    },
  ];

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
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
                  className="w-full h-full object-cover"
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

      <input
        type="range"
        min={0}
        max={youtubeVideos.length - 1}
        value={currentSlide}
        onChange={handleRangeChange}
        className="range-bar"
      />
    </>
  );
};

export default SliderRange;
