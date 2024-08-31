import ExerciseItems from "../ExerciseItems/ExerciseItems";

const Exercises = () => {
  return (
    <div className="py-5">
      <h2 className="text-black text-[26px] sm:text-[32px] font-semibold capitalize">
        Showing Results
      </h2>
      {/* exercise items start */}
      <ExerciseItems />
      {/* exercise item end */}
    </div>
  );
};

export default Exercises;
