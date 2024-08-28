import Image from "next/image";
import footerImage from "@/../public/assets/images/Logo-1.png";

const Footer = () => {
  return (
    <div className="bg-[#FFE5E6] py-8">
      <div className="flex items-center justify-center">
        <Image src={footerImage} alt="Footer logo" />
      </div>
      <h3 className="text-center text-[18px] font-bold mt-6">
        Made by <span className="text-[#FF2625]">Piyash Hasan</span>
      </h3>
    </div>
  );
};

export default Footer;
