import CategoryScrollBar from "@/components/CategoryScrollBar/CategoryScrollBar";
import ExerciseSearchForm from "@/components/ExerciseSearchForm/ExerciseSearchForm";

export default function Exercise() {
  return (
    <main>
      <div className="wrapper">
        <div className="py-[50px]">
          <h1 className="text-center text-[42px] text-black font-bold">
            Awesome Exercise You <br /> Should Know
          </h1>
          {/* --- Search input start --- */}
          <ExerciseSearchForm />
          {/* --- Search input start --- */}

          {/* --- filter category slider button start --- */}
          <CategoryScrollBar />
          {/* --- filter category slider button end --- */}
        </div>
      </div>
    </main>
  );
}
