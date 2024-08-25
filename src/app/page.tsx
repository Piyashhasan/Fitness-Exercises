import bannerImage from "@/../public/assets/images/banner.png";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <div className="flex items-center justify-between">
          {/* --- left side start --- */}
          <div className="w-full bg-red-300">
            <h5>Fitness Club</h5>
            <h1>Sweat, Smile And Repeat</h1>
            <p>
              Check out the most effective exercise personalized to you... !
            </p>

            <button className="">Explore Exercise</button>
          </div>
          {/* --- left side end --- */}

          {/* --- right side start --- */}
          <div className="w-full mt-[-82px]">
            <div className="object-contain object-top">
              <Image
                className="w-full"
                src={bannerImage}
                alt="Banner Image"
                placeholder="blur"
              />
            </div>
          </div>
          {/* --- right side end --- */}
        </div>
      </div>
    </main>
  );
}
