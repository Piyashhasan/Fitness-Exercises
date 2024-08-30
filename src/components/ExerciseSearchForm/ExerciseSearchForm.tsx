"use client";
import { searchExercises } from "@/redux/features/exercise/exerciseSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";

export default function ExerciseSearchForm() {
  const [searchInput, setSearchInput] = useState<string>("");

  const dispatch = useAppDispatch();

  // --- form submit handler ---
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchText = searchInput
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    setSearchInput("");

    if (searchText) {
      dispatch(searchExercises(searchText));
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center mt-8">
        <input
          className="w-full text-[14px] px-[22px] py-[9px] outline-none border-[1px] sm:text-[16px] sm:px-5 sm:py-3"
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          type="text"
          placeholder="Search Exercise"
          required
        />
        <button
          type="submit"
          className="text-[14px] px-[22px] py-[10px] bg-[#FF2625] text-white hover:bg-[#f54242] sm:text-[16px] sm:px-12 sm:py-[13px]"
        >
          Search
        </button>
      </form>
    </div>
  );
}
