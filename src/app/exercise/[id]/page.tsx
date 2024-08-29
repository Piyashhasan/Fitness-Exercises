"use client";
import Image from "next/image";
import ExerciseDetails from "@/components/ExerciseDetails/ExerciseDetails";
import ExerciseVideos from "@/components/ExerciseVideos/ExerciseVideos";
import TargetExercise from "@/components/TargetExercise/TargetExercise";
import EquipmentExercise from "@/components/EquipmentExercise/EquipmentExercise";
import Footer from "@/shared/Footer/Footer";

import { useEffect, useState } from "react";
import { useGetExerciseDetailsQuery } from "@/redux/services/exercisesApi";

interface Props {
  params: {
    id: string;
  };
}

const Exercises = ({ params }: Props) => {
  const { id } = params;
  const { data, error, isLoading } = useGetExerciseDetailsQuery(id);

  return (
    <>
      <div className="wrapper">
        {/* --- Exercise details start --- */}
        <ExerciseDetails data={data} />
        {/* --- Exercise details end --- */}

        {/* --- Similar Exercise video sections start --- */}
        <ExerciseVideos name={data?.name} />
        {/* --- Similar Exercise video sections end --- */}

        {/* --- Similar Target Muscle Exercise start --- */}
        <TargetExercise target={data?.target} />
        {/* --- Similar Target Muscle Exercise end --- */}

        {/* --- Similar Equipment Exercise start --- */}
        <EquipmentExercise equipment={data?.equipment} />
        {/* --- Similar Equipment Exercise end --- */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Exercises;
