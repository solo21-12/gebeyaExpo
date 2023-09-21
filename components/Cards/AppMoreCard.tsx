"use client";
import { motion } from "framer-motion";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FadeIn } from "../../utils/motion";
type Props = {
  index: number;
  handleClick: () => void;
};

export default function AppMoreCard({ handleClick, index }: Props) {
  return (
    <motion.div
      variants={FadeIn("right", "spring", index * 0.5, 0.75)}
      className={` bg-BlueDark  lg:flex-[0.5] flex-[2] relative flex flex-col items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer rounded-[24px]`}
      onClick={() => handleClick()}
    >
      <h3 className="font-semibold sm:text-[20px] text-[18px] text-white absolute z-0 lg:bottom-40 lg:rotate-[-90deg] lg:origin-[0,0] flex items-center gap-5">
        Know more
        <AiOutlinePlus className=" lg:text-4xl text-White  text-2xl " />
      </h3>
    </motion.div>
  );
}
