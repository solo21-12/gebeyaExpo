"use client";
import React from "react";
import { motion } from "framer-motion";

import { LogoContainer } from "..";
import { Header, MoreCardCircle, Pargraph } from "@/components";
import { MoreFactData } from "@/constants/homepage";

type Props = {};

export default function MoreFacts({}: Props) {
  const { Data, backGroundImage } = MoreFactData;

  return (
    <LogoContainer backGroundImage={backGroundImage}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mb-20 lg:mb-0 lg:h-[80vh] w-[85%] mx-auto"
      >
        <Header lable={"More Facts About"} />
        <Header lable={"GebeyaXpo"} className="text-BlueLight" />
        <Pargraph
          lable="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate doloribus accusamus aspernatur, nobis nihil amet cupiditate. Ipsum esse perferendis eveniet aperiam eligendi, illum,"
          className="mt-5"
        />

        <div className="flex justify-between mt-16 lg:px-10 overflow-x-auto overflow-y-hidden">
          {Data.map((item, index) => (
            <MoreCardCircle Item={item} index={index} key={index} />
          ))}
        </div>
      </motion.div>
    </LogoContainer>
  );
}
