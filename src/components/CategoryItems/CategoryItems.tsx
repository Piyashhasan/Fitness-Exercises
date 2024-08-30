"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import icon from "@/../public/assets/icons/gym.png";
import Slider from "react-slick";
import nextIcon from "@/../public/assets/icons/right-arrow.png";
import prevIcon from "@/../public/assets/icons/left-arrow.png";
import { useGetBodyPartListQuery } from "@/redux/services/exercisesApi";
import CategorySkeleton from "@/shared/Skeleton/CategorySkeleton";

interface Props {
  selectCategory: string;
  handleSelectCategory: (categoryName: string) => void;
}

const CategoryItems = ({ selectCategory, handleSelectCategory }: Props) => {
  // -- Body part fetch from api ---
  const { data, isLoading, isError } = useGetBodyPartListQuery({});

  const [bodyPart, setBodyPart] = useState<string[]>([]);
  useEffect(() => {
    if (data) {
      setBodyPart(["all", ...data]);
    }
  }, [data]);

  // --- Horizontal Scrollbar functionality ---
  let sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  if (isError) {
    return <p className="text-center">Category Not Found, Error from server</p>;
  }

  return (
    <>
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <Slider ref={sliderRef} {...settings} className="category-filter">
          {bodyPart?.map((category: string, index: number) => {
            return (
              <div
                key={index}
                onClick={() => handleSelectCategory(category)}
                className={`bg-[#FFE5E6] h-[170px] !flex items-center justify-center cursor-pointer shadow-md ${
                  selectCategory === category
                    ? "border-t-[2px] border-red-400"
                    : ""
                } `}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center">
                    <Image className="w-[40px]" src={icon} alt="category" />
                  </div>
                  <h3 className="text-black text-center font-bold capitalize">
                    {category}
                  </h3>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

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

export default CategoryItems;
