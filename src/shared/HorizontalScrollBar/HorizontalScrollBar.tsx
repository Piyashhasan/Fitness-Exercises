"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Exercise } from "@/types/types";
import React, { useRef } from "react";
import Slider from "react-slick";
import nextIcon from "@/../public/assets/icons/right-arrow.png";
import prevIcon from "@/../public/assets/icons/left-arrow.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HorizontalScrollBar = ({ data }: { data: Exercise[] }) => {
  const router = useRouter();
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
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
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

  const handleDynamicRoute = (id: string) => {
    router.push(`/exercise/${id}`);
    if (id) {
      const exerciseDetailsSection =
        document.getElementById("exercise-details");
      if (exerciseDetailsSection) {
        const topOffset = exerciseDetailsSection.offsetTop;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className="category-filter">
        {data?.map((exercise) => {
          return (
            <div
              onClick={() => handleDynamicRoute(exercise?.id)}
              key={exercise.id}
              className="cursor-pointer"
            >
              <div className="p-3 shadow-md bg-[#FFF7F7] border-t-2 border-[#FF2625] min-h-[360px]">
                <div className="flex items-center justify-center">
                  <img
                    className="w-full h-[200px] object-contain object-top"
                    src={exercise?.gifUrl}
                    alt="exercise"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-center text-white gap-1 md:gap-3">
                    <button className="text-[12px] md:text-[16px] bg-red-200 px-8 py-1 rounded-full capitalize">
                      {`${exercise?.bodyPart.slice(0, 10)}`}
                    </button>
                    <button className="text-[12px] md:text-[16px] px-8 py-1 bg-yellow-200 rounded-full capitalize">
                      {`${exercise?.target.slice(0, 10)}`}
                    </button>
                  </div>
                  <h3 className="md:text-[20px] text-black font-bold mt-5 text-center capitalize">
                    {exercise?.name ? exercise?.name.slice(0, 25) : "---"}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
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
