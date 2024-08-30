import bannerImage from "@/../public/assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="wrapper px-[20px] py-[10px] xl:p-0">
        <div className="relative z-20 flex items-center mt-10 sm:justify-between sm:mt-0">
          {/* --- left side start --- */}
          <div className="w-full flex flex-col items-center sm:block">
            <h5 className="text-center text-[20px] text-[#FF2625] font-bold sm:text-left">
              Fitness Club
            </h5>
            <h2 className="text-center text-[32px] font-semibold text-black py-5 sm:text-left">
              Sweat, Smile <br className="hidden sm:block" /> And Repeat
            </h2>
            <p className="text-center text-black sm:text-left md:pr-4 lg:pr-0">
              Check out the most effective exercise personalized to you... !
            </p>

            <Link href="/exercise">
              <button className="bg-[#FF2625] text-white px-8 py-2 rounded-[3px] mt-5">
                Explore Exercise
              </button>
            </Link>
          </div>
          {/* --- left side end --- */}

          {/* --- right side start --- */}
          <div className="hidden sm:block sm:w-full lg:mt-[-92px] xl:mt-[-82px]">
            <div className="flex items-center justify-end">
              <Image
                className="w-auto rounded-3xl object-contain lg:h-[650px] lg:rounded-none"
                src={bannerImage}
                alt="Banner Image"
                placeholder="blur"
              />
            </div>
          </div>
          {/* --- right side end --- */}
        </div>
        <div className="relative z-10 hidden lg:block lg:mt-[-160px] xl:mt-[-185px]">
          <h1 className="text-[#FFE5E6] lg:text-[190px] xl:text-[210px]">
            Exercise
          </h1>
        </div>
      </div>
    </main>
  );
}
