import React from "react";

const ExerciseVideos = () => {
  return (
    <div className="py-10">
      <h2 className="text-black text-[32px] font-semibold">
        Watch <span className="text-[#FF2625]">All Four Squad Stretch</span>{" "}
        exercise videos
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-10 mb-6">
        <div className="shadow-lg p-5 rounded-tl-[30px] rounded-br-[30px] bg-[#FFF7F7]">
          <div className="w-full  object-cover object-top">
            <img
              className="w-full h-[200px] object-cover object-center rounded-[10px]"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt=""
            />
          </div>
          <div className="mt-5">
            <p className="text-[24px] text-black font-semibold">
              All Four Squad Stretch Things Exercises
            </p>
            <p className="text-black text-[14px] mt-5">
              Genemedics Health Institution
            </p>
          </div>
        </div>
        <div className="shadow-lg p-5 rounded-tl-[30px] rounded-br-[30px] bg-[#FFF7F7]">
          <div className="w-full  object-cover object-top">
            <img
              className="w-full h-[200px] object-cover object-center rounded-[10px]"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt=""
            />
          </div>
          <div className="mt-5">
            <p className="text-[24px] text-black font-semibold">
              All Four Squad Stretch Things Exercises
            </p>
            <p className="text-black text-[14px] mt-5">
              Genemedics Health Institution
            </p>
          </div>
        </div>
        <div className="shadow-lg p-5 rounded-tl-[30px] rounded-br-[30px] bg-[#FFF7F7]">
          <div className="w-full  object-cover object-top">
            <img
              className="w-full h-[200px] object-cover object-center rounded-[10px]"
              src="https://v2.exercisedb.io/image/ba2gqTlyjYvi8x"
              alt=""
            />
          </div>
          <div className="mt-5">
            <p className="text-[24px] text-black font-semibold">
              All Four Squad Stretch Things Exercises
            </p>
            <p className="text-black text-[14px] mt-5">
              Genemedics Health Institution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseVideos;
