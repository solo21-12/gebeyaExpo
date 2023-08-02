"use client";
import React from "react";
import { Pargraph } from "..";
import { motion } from "framer-motion";
import { PlanetVariants, slideIn } from "@/utils/motion";

type Props = {
  partner: {
    logo: string;
    partnerLevel: string;
  };
  index: number;
};

export default function PartnersCard({
  partner: { logo, partnerLevel },
  index,
}: Props) {
  return (
    <motion.div
      variants={slideIn("down")}
      initial="hidden"
      whileInView="show"
      className={` text-center w-[145px] md:w-[200px] h-[250px] border-[1px]  border-BlueLighter px-5 py-10 rounded-[15px] cursor-pointer ${
        index % 2 != 0 && index < 7 ? "mt-10" : ""
      }  ${index % 2 != 0 && index >= 7 ? "xl:-mt-8 mt-8" : ""} `}
      viewport={{ once: true }}
    >
      <img
        src={logo}
        alt="partner logo"
        className="  w-full h-full object-contain"
      />
      <Pargraph lable={`${partnerLevel} Partner`} className=" " />
    </motion.div>
  );
}
