"use client";

import { Header, AppMoreCard, Pargraph, WhyExibitCard } from "@/components";
import { WhyExibitData } from "@/constants/homepage";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export default function WhyExibiti({}: Props) {
  const [active, setActive] = useState<string>("res-2");
  const { description, expoName, resones } = WhyExibitData;

  const handleClick = () => {};

  return (
    <div className=" h-screen w-[85%] mx-auto relative">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Header lable={"Why exhibit at "} />
        <Header lable={expoName} className=" text-BlueLight" />
        <Pargraph lable={description} />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {resones.map((item, index) => (
            <WhyExibitCard
              key={index}
              index={index}
              item={item}
              active={active}
              handleClick={setActive}
            />
          ))}
          <AppMoreCard index={4} handleClick={() => console.log("first")} />
        </div>
      </motion.div>
    </div>
  );
}
