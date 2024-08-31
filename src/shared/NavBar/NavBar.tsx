"use client";
import navLogo from "@/../public/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav>
      <div className="wrapper px-[20px] xl:px-0">
        <div className="flex items-end gap-10 py-5 lg:gap-20">
          {/* --- left side start --- */}
          <Link href="/">
            <Image src={navLogo} alt="logo" />
          </Link>
          {/* --- left side end --- */}

          {/* --- right side start --- */}
          <div className="">
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  className={`${
                    pathName === "/" ? "border-b-2 border-[#FF2625]" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName.startsWith("/exercise")
                      ? "border-b-2 border-[#FF2625]"
                      : ""
                  }`}
                  href="/exercise"
                >
                  Exercise
                </Link>
              </li>
            </ul>
          </div>
          {/* --- right side end --- */}
        </div>
      </div>
    </nav>
  );
}
