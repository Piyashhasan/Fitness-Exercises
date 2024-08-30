"use client";
import { useGetExerciseDetailsQuery } from "@/redux/services/exercisesApi";
import ExerciseDetails from "@/components/ExerciseDetails/ExerciseDetails";
import ExerciseVideos from "@/components/ExerciseVideos/ExerciseVideos";
import TargetExercise from "@/components/TargetExercise/TargetExercise";
import EquipmentExercise from "@/components/EquipmentExercise/EquipmentExercise";
import Footer from "@/shared/Footer/Footer";

interface Props {
  params: {
    id: string;
  };
}

const Exercises = ({ params }: Props) => {
  const { id } = params;
  const { data, isLoading } = useGetExerciseDetailsQuery(id);

  return (
    <>
      <div className="wrapper">
        {/* --- Exercise details start --- */}
        <ExerciseDetails data={data} />
        {/* --- Exercise details end --- */}

        {/* --- Similar Exercise video sections start --- */}
        <ExerciseVideos name={data?.name} loading={isLoading} />
        {/* --- Similar Exercise video sections end --- */}

        {/* --- Similar Target Muscle Exercise start --- */}
        <TargetExercise target={data?.target} loading={isLoading} />
        {/* --- Similar Target Muscle Exercise end --- */}

        {/* --- Similar Equipment Exercise start --- */}
        <EquipmentExercise equipment={data?.equipment} loading={isLoading} />
        {/* --- Similar Equipment Exercise end --- */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Exercises;
