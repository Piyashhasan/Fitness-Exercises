import navLogo from "@/../public/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="wrapper px-[20px] xl:px-0">
        <div className="flex items-end gap-10 lg:gap-20 py-5">
          {/* --- left side start --- */}
          <Link href="/">
            <Image src={navLogo} alt="logo" />
          </Link>
          {/* --- left side end --- */}

          {/* --- right side start --- */}
          <div>
            <ul className="flex items-center gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/exercise">Exercise</Link>
              </li>
            </ul>
          </div>
          {/* --- right side end --- */}
        </div>
      </div>
    </nav>
  );
}
