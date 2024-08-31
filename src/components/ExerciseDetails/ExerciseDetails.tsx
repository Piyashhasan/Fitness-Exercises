"use client";
import { Exercise } from "@/types/types";
import iconOne from "@/../public/assets/icons/body-part.png";
import iconTwo from "@/../public/assets/icons/target.png";
import iconThree from "@/../public/assets/icons/equipment.png";
import Image from "next/image";
import notFoundImg from "@/../public/assets/images/not-found.png";

interface Props {
  data: Exercise;
}

const ExerciseDetails = ({ data }: Props) => {
  return (
    <div id="exercise-details" className="pb-12 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center lg:h-[500px] lg:object-cover lg:object-top">
          {data?.gifUrl ? (
            <img
              className="lg:w-full lg:h-[500px] lg:object-cover lg:object-top"
              src={data?.gifUrl}
              alt="image"
            />
          ) : (
            <Image
              className="lg:w-full lg:h-[500px] lg:object-cover lg:object-top"
              src={notFoundImg}
              alt="image"
            />
          )}
        </div>
        <div className="md:px-10">
          <div className="text-center lg:text-left">
            <h1 className="text-black text-pretty text-[26px] mt-5 lg:mt-0 sm:text-[38px] font-semibold capitalize">
              {data?.name ? data?.name : "---"}
            </h1>
            <p className="my-5 md:my-8 text-pretty">
              Exercises keep you strong. {data?.name ? data?.name : "---"} is
              one of the best Exercises to target your{" "}
              {data?.target ? data?.target : "---"} By focusing on the
              {data?.bodyPart ? data?.bodyPart : " --- "} area. It will help you
              improve your mood and gain energy.
            </p>
          </div>
          <div className="flex items-center justify-around gap-5 lg:flex-col lg:items-start lg:justify-start">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="bg-[#FFE08A] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] flex items-center justify-center rounded-full">
                <Image
                  className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] object-contain"
                  src={iconOne}
                  alt="icon"
                />
              </div>
              <p className="capitalize text-[14px] sm:text-[16px]">
                {data?.bodyPart ? data?.bodyPart : "---"}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="bg-[#FFE08A] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] flex items-center justify-center rounded-full">
                <Image
                  className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] object-contain"
                  src={iconTwo}
                  alt="icon"
                />
              </div>
              <p className="capitalize text-[14px] sm:text-[16px]">
                {data?.target ? data?.target : "---"}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="bg-[#FFE08A] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] flex items-center justify-center rounded-full">
                <Image
                  className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] object-contain"
                  src={iconThree}
                  alt="icon"
                />
              </div>
              <p className="capitalize text-[14px] sm:text-[16px]">
                {data?.equipment ? data?.equipment : "---"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
