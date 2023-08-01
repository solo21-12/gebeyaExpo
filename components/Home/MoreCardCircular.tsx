"use client";

import { FadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
type Props = {
  index: number;
  Item: {
    Icon: React.ReactNode;
    number: number;
    lable: string;
    description: string;
  };
};

export default function MoreCardCircle({
  Item: { Icon, description, lable, number },
  index,
}: Props) {
  return (
    <motion.div
      variants={FadeIn("right", "spring", index * 0.5, 0.75)}
      className=" flex items-center align-middle justify-between"
    >
      <div className="  flex flex-col items-center gap-5">
        <div className=" h-52 w-52 rounded-full bg-BlueLight flex flex-col justify-center items-center text-7xl text-White">
          {Icon}
        </div>
        <h3 className=" text-2xl text-BlueDark">
          <span className=" text-BlueLight">{number}+</span> {lable}
        </h3>
        <p className=" max-w-[260px]">{description}</p>
      </div>
      {index !== 2 && <div className=" w-64 h-[1px]  bg-BlueLighter/80"></div>}
    </motion.div>
  );
}
