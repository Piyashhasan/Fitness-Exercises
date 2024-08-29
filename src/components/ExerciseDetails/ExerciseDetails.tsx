"use client";
import iconOne from "@/../public/assets/icons/body-part.png";
import iconTwo from "@/../public/assets/icons/target.png";
import iconThree from "@/../public/assets/icons/equipment.png";
import {
  useGetExerciseDetailsQuery,
  useGetSimilarTargetExercisesQuery,
} from "@/redux/features/api/exercisesApiSlice";
import Image from "next/image";
import React, { useEffect } from "react";
import { Exercise } from "@/types/types";

interface Props {
  data: Exercise;
}
const ExerciseDetails = ({ data }: Props) => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <div className="px-10">
          <img
            className="w-full object-cover object-top"
            src={data?.gifUrl}
            alt="image"
          />
        </div>
        <div className="px-10">
          <h1 className="text-black text-[38px] font-semibold capitalize">
            {data?.name}
          </h1>
          <p className="my-8">
            Exercises keep you strong. {data?.name} is one of the best Exercises
            to target your {data?.target} By focusing on the {data?.bodyPart}{" "}
            area. It will help you improve your mood and gain energy.
          </p>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-2">
              <div className="bg-[#FFE08A] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                <Image
                  className="w-[40px] object-contain"
                  src={iconOne}
                  alt="icon"
                />
              </div>
              <p className="capitalize">{data?.bodyPart}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#FFE08A] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                <Image
                  className="w-[40px] object-contain"
                  src={iconTwo}
                  alt="icon"
                />
              </div>
              <p className="capitalize">{data?.target}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#FFE08A] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                <Image
                  className="w-[40px] object-contain"
                  src={iconThree}
                  alt="icon"
                />
              </div>
              <p className="capitalize">{data?.equipment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
