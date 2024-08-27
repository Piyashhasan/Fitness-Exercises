"use client";
import Link from "next/link";
import { Paginator } from "primereact/paginator";
import { useState } from "react";

const ExerciseItems = () => {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(9);

  const onPageChange = (event: { first: number; rows: number }) => {
    console.log(event.first);
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-3">
        <Link href={`/exercise/${1}`}>
          <div className="p-3 shadow-md rounded-md bg-[#FFF7F7]">
            <div className="flex items-center justify-center">
              <img
                className="w-full h-[250px] object-contain object-top"
                src="https://v2.exercisedb.io/image/WkeCFzyNTeMr87"
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
        <div className="p-3 shadow-md rounded-md bg-[#FFF7F7]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[250px] object-contain object-top"
              src="https://v2.exercisedb.io/image/WkeCFzyNTeMr87"
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
        <div className="p-3 shadow-md rounded-md bg-[#FFF7F7]">
          <div className="flex items-center justify-center">
            <img
              className="w-full h-[250px] object-contain object-top"
              src="https://v2.exercisedb.io/image/WkeCFzyNTeMr87"
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
      </div>

      <div className="mt-10">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ExerciseItems;
