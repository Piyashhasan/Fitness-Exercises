"use client";
import { useState } from "react";

export default function ExerciseSearchForm() {
  const [searchInput, setSearchInput] = useState<string>("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchText = searchInput
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    setSearchInput("");
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center my-5">
        <input
          className="w-full outline-none border-[1px] px-5 py-3"
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(e.target.value)
          }
          type="text"
          placeholder="Search Exercise"
        />
        <button
          type="submit"
          className="px-12 py-[13px] bg-[#FF2625] text-white hover:bg-[#f54242]"
        >
          Search
        </button>
      </form>
    </div>
  );
}
