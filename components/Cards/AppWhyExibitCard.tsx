"use client";
import { motion } from "framer-motion";
import React from "react";
import { FadeIn } from "../../utils/motion";
type Props = {
  item?: {
    id: string;
    imageUrl: string;
    label: string;
  };
  index: number;
  active: string;
  handleClick: (id: string) => void;
};

export default function WhyExibitCard({
  active,
  handleClick,
  index,
  item,
}: Props) {
  return (
    <motion.div
      variants={FadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === item?.id ? "lg:flex-[1] flex-[5]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(item?.id || "")}
    >
      <img
        src={item?.imageUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== item?.id ? (
        <h3 className="font-semibold sm:text-[20px] text-[18px] text-white absolute z-0 lg:bottom-40 lg:rotate-[-90deg]">
          {item?.label}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[24px] font-semibold sm:text-[22px] text-[24px] text-white">
            {item?.label}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
