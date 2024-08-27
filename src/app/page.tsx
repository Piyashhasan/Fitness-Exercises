import bannerImage from "@/../public/assets/images/banner.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <div className="relative z-20 flex items-center justify-between">
          {/* --- left side start --- */}
          <div className="w-full">
            <h5 className="text-[20px] text-[#FF2625] font-bold">
              Fitness Club
            </h5>
            <h2 className="text-[32px] font-semibold text-black py-5">
              Sweat, Smile <br /> And Repeat
            </h2>
            <p className="text-black">
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
          <div className="w-full mt-[-82px]">
            <div className="flex items-center justify-end">
              <Image
                className="w-auto max-h-[650px] object-contain"
                src={bannerImage}
                alt="Banner Image"
                placeholder="blur"
              />
            </div>
          </div>
          {/* --- right side end --- */}
        </div>
        <div className="relative z-10 mt-[-185px]">
          <h1 className="text-[210px] text-[#FFE5E6]">Exercise</h1>
        </div>
      </div>
    </main>
  );
}
