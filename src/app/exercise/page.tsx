import Category from "@/components/Category/Category";
import Exercises from "@/components/Exercises/Exercises";
import ExerciseSearchForm from "@/components/ExerciseSearchForm/ExerciseSearchForm";
import Footer from "@/shared/Footer/Footer";

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
          <Category />
          {/* --- filter category slider button end --- */}

          {/* --- All Exercise section start --- */}
          <Exercises />
          {/* --- All Exercise section end --- */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
