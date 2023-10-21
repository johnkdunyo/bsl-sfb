import React, { useRef } from "react";
import { Animate } from "../animations/ScrollAnimator";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SingleSlide = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full h-full custom-container flex flex-col  md:justify-center md:items-center   border-red-500">
      <div className=" w-full  flex flex-col items-center   border-green-700 h-full justify-between md:justify-end gap-20  md:gap-8 ">
        <h1 className="font-bold  text-6xl md:text-[10rem] text-[#0071BD]  w-full text-center">
          {title}
        </h1>
        <div className="  h-full">
          <p
            className="paragraphText1 text-[#234222] px-4 sm:px-0 text-center"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

const MissionVission = () => {
  const swiperRef = useRef<SwiperCore>();
  const swiperNavPrevRef = React.useRef<HTMLButtonElement>(null);
  const swiperNavNextRef = React.useRef<HTMLButtonElement>(null);
  const onBeforeInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <section className=" carousel w-full h-full md:h-[60vh] bg-white  py-20">
      <Swiper
        onBeforeInit={onBeforeInit}
        spaceBetween={0}
        cssMode={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 5000,
        }}
        navigation={{
          prevEl: swiperNavPrevRef?.current,
          nextEl: swiperNavNextRef?.current,
        }}
        modules={[Navigation, Autoplay]}
        keyboard={true}
        className="w-full relative "
      >
        <SwiperSlide>
          <SingleSlide
            title="Vision"
            description="Connecting Africa, bridging the digital divide, and increasing affordability; by moving data with the most appropriate technology, to make data accessible even in the most underserved communities."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            title="Mission"
            description="Empowering businesses and communities with reliable connectivity, driving innovation and growth across Ghana and beyond."
          />
        </SwiperSlide>

        <div className="absolute inset-0  w-full  px-10 sm:px-[10%] flex flex-col justify-center ">
          <div className="flex justify-between container mx-auto px-6 max-w-7xl  -mt-36 md:-mt-36">
            <button
              className=" z-10 w-10 h-10 sm:w-16 sm:h-full"
              ref={swiperNavPrevRef}
              onClick={() => swiperRef!.current?.slidePrev()}
            >
              <img src={"/assets/icons/nav-left2.svg"} className=" w-full " />
            </button>

            <button
              className=" z-10 w-10 h-10 sm:w-16 sm:h-full"
              ref={swiperNavNextRef}
              onClick={() => swiperRef!.current?.slideNext()}
            >
              <img src={"/assets/icons/nav-right2.svg"} className="w-full" />
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MissionVission;
