"use client";
import Link from "next/link";
import { Exercise } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetAllExercisesQuery } from "@/redux/services/exercisesApi";
import { useEffect, useState } from "react";
import { addExercises } from "@/redux/features/exercise/exerciseSlice";
import { Paginator } from "primereact/paginator";
import ExerciseItemSkeleton from "@/shared/Skeleton/ExerciseItemSkeleton";

const ExerciseItems = () => {
  // --- Exercise call from Store ---
  const { filterExercises } = useAppSelector((state) => state.exercises);

  // --- data fetch from api ---
  const { data, isLoading, isError } = useGetAllExercisesQuery({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addExercises(data));
    }
  }, [data]);

  // --- pagination functionality ---
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(9);

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const perPageExercise = filterExercises?.slice(first, first + rows);

  if (isError) {
    return <p className="text-center">Exercise Not Found, Error from server</p>;
  }

  return (
    <div className="my-10">
      {isLoading ? (
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-3 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="p-3 shadow-md rounded-md min-h-[400px]">
              <ExerciseItemSkeleton key={index} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-3 lg:grid-cols-3">
          {perPageExercise?.map((exercise: Exercise) => {
            return (
              <Link key={exercise.id} href={`/exercise/${exercise?.id}`}>
                <div className="p-3 shadow-md rounded-md bg-[#FFF7F7] min-h-[420px]">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-full h-[250px] object-contain object-top"
                      src={exercise?.gifUrl}
                      alt="exercise"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center justify-center gap-x-3 text-white">
                      <button className="bg-red-200 px-8 py-1 rounded-full capitalize">
                        {`${exercise?.bodyPart.slice(0, 10)}`}
                      </button>
                      <button className="px-8 py-1 bg-yellow-200 rounded-full capitalize">
                        {`${exercise?.target.slice(0, 10)}`}
                      </button>
                    </div>
                    <h3 className="text-[20px] text-black font-bold mt-5 text-center capitalize">
                      {exercise?.name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div className="mt-10 flex items-center justify-center">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={filterExercises?.length}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ExerciseItems;
