"use client";
import { StaticImageData } from "next/image";
import icon from "@/../public/assets/icons/gym.png";
import CategoryItems from "../CategoryItems/CategoryItems";
import { useState } from "react";

interface Item {
  id: number;
  name: string;
  img: string | StaticImageData;
}

const items: Item[] = [
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
  {
    id: 4,
    name: "Check 1",
    img: icon,
  },
  {
    id: 5,
    name: "Check 2",
    img: icon,
  },
  {
    id: 6,
    name: "Check 3",
    img: icon,
  },
  {
    id: 7,
    name: "Check 4",
    img: icon,
  },
  {
    id: 8,
    name: "Check 5",
    img: icon,
  },
  {
    id: 9,
    name: "Check 6",
    img: icon,
  },
];

export default function Category() {
  const [selectCategory, setSelectCategory] = useState<string>("");

  const handleSelectCategory = (categoryName: string) => {
    console.log("category name", categoryName);
    setSelectCategory(categoryName);
  };

  return (
    <div className="py-10">
      <CategoryItems
        items={items}
        selectCategory={selectCategory}
        handleSelectCategory={handleSelectCategory}
      />
    </div>
  );
}
