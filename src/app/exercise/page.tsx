import Category from "@/components/Category/Category";
import Exercises from "@/components/Exercises/Exercises";
import ExerciseSearchForm from "@/components/ExerciseSearchForm/ExerciseSearchForm";
import Footer from "@/shared/Footer/Footer";

export default function Exercise() {
  return (
    <main>
      <div className="wrapper">
        <div className="py-[50px] px-[20px] xl:px-0">
          <h1 className="text-[26px] text-center text-black font-bold sm:text-[42px]">
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
