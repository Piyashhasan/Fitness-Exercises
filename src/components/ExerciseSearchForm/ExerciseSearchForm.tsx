export default function ExerciseSearchForm() {
  return (
    <div>
      <form className="flex items-center my-5">
        <input
          className="w-full outline-none border-[1px] px-5 py-3"
          type="text"
          placeholder="Search Exercise"
        />
        <button className="px-12 py-3 bg-[#FF2625] text-white hover:bg-[#f54242]">
          Search
        </button>
      </form>
    </div>
  );
}
