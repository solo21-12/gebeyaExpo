"use client";
import { Header, MoreCardCircle, Pargraph } from "@/components";
import React from "react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
type Props = {};

export default function MoreFacts({}: Props) {
  const moreFactData = [
    {
      Icon: <MdPrecisionManufacturing />,
      number: 180,
      lable: "Exhibitors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores atque omnis cupiditate inventore quod unde sapiente",
    },
    {
      Icon: <BsFillFlagFill />,
      number: 30,
      lable: "Countries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores atque omnis cupiditate inventore quod unde sapiente",
    },
    {
      Icon: <FiUsers />,
      number: 5000,
      lable: "Visitors",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores atque omnis cupiditate inventore quod unde sapiente",
    },
  ];

  return (
    <section id="moreFacts">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="h-screen w-[85%] mx-auto"
        style={{
          backgroundImage: `url(${'/logo-08.png'})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Header lable={"More Facts About"} />
        <Header lable={"GebeyaXpo"} className="text-BlueLight" />
        <Pargraph
          lable="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate doloribus accusamus aspernatur, nobis nihil amet cupiditate. Ipsum esse perferendis eveniet aperiam eligendi, illum,"
          className="mt-5"
        />

        <div className="flex justify-between mt-16 px-10 overflow-x-auto overflow-y-hidden">
          {moreFactData.map((item, index) => (
            <MoreCardCircle Item={item} index={index} key={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
