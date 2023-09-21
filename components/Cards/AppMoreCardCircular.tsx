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
    <div className=" px-5 min-w-[90%] lg:min-w-[33%] flex items-center align-middle justify-between ">
      <div className="  flex flex-col items-center gap-5">
        <div className=" w-[8rem] h-[8rem] lg:h-52 lg:w-52 rounded-full bg-BlueLight flex flex-col justify-center items-center text-4xl lg:text-7xl text-White">
          {Icon}
        </div>
        <h3 className=" text-base lg:text-2xl text-BlueDark">
          <span className=" text-BlueLight">{number}+</span> {lable}
        </h3>
        <p className=" max-w-[360px] text-xs">{description}</p>
      </div>
      {index !== 2 && (
        <div className=" w-32 lg:w-64 h-[1px]  bg-BlueLighter/80"></div>
      )}
    </div>
  );
}
