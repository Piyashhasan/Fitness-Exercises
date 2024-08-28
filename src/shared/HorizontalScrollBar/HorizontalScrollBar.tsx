"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import nextIcon from "@/../public/assets/icons/right-arrow.png";
import prevIcon from "@/../public/assets/icons/left-arrow.png";
import Image from "next/image";
import Link from "next/link";

const HorizontalScrollBar = () => {
  let sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className="category-filter">
        <Link href={`/exercise/${2}`}>
          <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625]">
            <div className="flex items-center justify-center">
              <img
                className="w-full h-[200px] object-cover object-center"
                src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
                alt="exercise"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-center gap-x-3 text-white">
                <button className="bg-red-200 px-8 py-1 rounded-full">
                  Back
                </button>
                <button className="px-8 py-1 bg-yellow-200 rounded-full">
                  Lats
                </button>
              </div>
              <h3 className="text-[20px] text-black font-bold mt-5 text-center">
                Cable Bar Lateral Pulldown
              </h3>
            </div>
          </div>
        </Link>
        <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[200px] object-cover object-center"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt="exercise"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center gap-x-3 text-white">
              <button className="bg-red-200 px-8 py-1 rounded-full">
                Back
              </button>
              <button className="px-8 py-1 bg-yellow-200 rounded-full">
                Lats
              </button>
            </div>
            <h3 className="text-[20px] text-black font-bold mt-5 text-center">
              Cable Bar Lateral Pulldown
            </h3>
          </div>
        </div>
        <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[200px] object-cover object-center"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt="exercise"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center gap-x-3 text-white">
              <button className="bg-red-200 px-8 py-1 rounded-full">
                Back
              </button>
              <button className="px-8 py-1 bg-yellow-200 rounded-full">
                Lats
              </button>
            </div>
            <h3 className="text-[20px] text-black font-bold mt-5 text-center">
              Cable Bar Lateral Pulldown
            </h3>
          </div>
        </div>
        <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[200px] object-cover object-center"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt="exercise"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center gap-x-3 text-white">
              <button className="bg-red-200 px-8 py-1 rounded-full">
                Back
              </button>
              <button className="px-8 py-1 bg-yellow-200 rounded-full">
                Lats
              </button>
            </div>
            <h3 className="text-[20px] text-black font-bold mt-5 text-center">
              Cable Bar Lateral Pulldown
            </h3>
          </div>
        </div>
        <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[200px] object-cover object-center"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt="exercise"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center gap-x-3 text-white">
              <button className="bg-red-200 px-8 py-1 rounded-full">
                Back
              </button>
              <button className="px-8 py-1 bg-yellow-200 rounded-full">
                Lats
              </button>
            </div>
            <h3 className="text-[20px] text-black font-bold mt-5 text-center">
              Cable Bar Lateral Pulldown
            </h3>
          </div>
        </div>
        <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[200px] object-cover object-center"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt="exercise"
            />
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center gap-x-3 text-white">
              <button className="bg-red-200 px-8 py-1 rounded-full">
                Back
              </button>
              <button className="px-8 py-1 bg-yellow-200 rounded-full">
                Lats
              </button>
            </div>
            <h3 className="text-[20px] text-black font-bold mt-5 text-center">
              Cable Bar Lateral Pulldown
            </h3>
          </div>
        </div>
      </Slider>

      <div className="flex items-center justify-end gap-5">
        <button onClick={previous} className="button">
          <Image src={prevIcon} alt="preview icon" />
        </button>
        <button onClick={next} className="button">
          <Image src={nextIcon} alt="next icon" />
        </button>
      </div>
    </>
  );
};

export default HorizontalScrollBar;
