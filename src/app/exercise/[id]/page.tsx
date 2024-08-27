import Image from "next/image";
import iconOne from "@/../public/assets/icons/body-part.png";
import iconTwo from "@/../public/assets/icons/target.png";
import iconThree from "@/../public/assets/icons/equipment.png";
import ExerciseVideos from "@/components/ExerciseVideos/ExerciseVideos";

const ExerciseDetails = () => {
  return (
    <div className="wrapper">
      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          <div className="px-10">
            <img
              className="w-full object-cover object-top"
              src={"https://v2.exercisedb.io/image/fJHFclLyPcoPYp"}
              alt="image"
            />
          </div>
          <div className="px-10">
            <h1 className="text-black text-[42px] font-semibold">
              All Fours Squad Stretch
            </h1>
            <p className="my-8">
              Exercises keep you strong. All Fours Squad Stretch bup is one of
              the best Exercises to target your quads. It will help you improve
              your mood and gain energy
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
                <p>Upper Legs</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#FFE08A] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                  <Image
                    className="w-[40px] object-contain"
                    src={iconTwo}
                    alt="icon"
                  />
                </div>
                <p>Quads</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#FFE08A] w-[80px] h-[80px] flex items-center justify-center rounded-full">
                  <Image
                    className="w-[40px] object-contain"
                    src={iconThree}
                    alt="icon"
                  />
                </div>
                <p>Body weight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- Similar Exercise video sections start --- */}
      <ExerciseVideos />
      {/* --- Similar Exercise video sections end --- */}
    </div>
  );
};

export default ExerciseDetails;
