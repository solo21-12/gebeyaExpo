"use client";
import { Header, PartnersCard } from "@/components";
import { PartnersData } from "@/constants/homepage";
import { ZoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
type Props = {};

export default function Partners({}: Props) {
  return (
    <section id="partners">
      <motion.div
        variants={ZoomIn(0, 1.5)}
        initial="hidden"
        whileInView="show"
        className=" lg:w-[85%] mx-auto"
      >
        <Header
          lable="We’re working with hundreds of amazing people"
          className=" px-10 text-BlueDark"
        />

        <motion.div className=" flex gap-3 mt-20 flex-wrap pl-10 overflow-y-scroll h-[70vh]">
          {PartnersData.map((partner, index) => (
            <PartnersCard key={index} index={index} partner={partner} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
