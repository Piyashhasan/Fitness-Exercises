import icon from "@/../public/assets/icons/gym.png";
import Image from "next/image";

const item = [
  {
    id: 1,
    name: "All",
    img: icon,
  },
  {
    id: 2,
    name: "Back",
    img: icon,
  },
  {
    id: 3,
    name: "Cardio",
    img: icon,
  },
];

export default function CategoryScrollBar() {
  return (
    <div className="py-10">
      <div className="flex items-center gap-5 ">
        {item.map((category) => {
          return (
            <div
              key={category.id}
              className="bg-[#FFE5E6] flex flex-col items-center justify-center gap-5 min-w-[200px] h-[150px] cursor-pointer shadow-md border-t-[2px] border-red-400"
            >
              <div>
                <Image className="w-[40px]" src={category.img} alt="category" />
              </div>
              <h3 className="text-black text-center font-bold">
                {category.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
