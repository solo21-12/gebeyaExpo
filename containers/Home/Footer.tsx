"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FooterLinks, SocialLinks } from "@/constants/homepage";
import { FooterVariants, textContainer } from "@/utils/motion";

type Props = {};

export default function Footer({}: Props) {
  const { Data, ExpoName, year } = FooterLinks;
  return (
    <section
      className={`flex justify-center items-center sm:py-5 py-6 flex-col px-10 bg-BlueDark rounded-tl-[3rem] rounded-tr-[3rem] mt-10`}
    >
      <div
        className={`flex justify-center items-center md:flex-row flex-col mb-2 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Image
            src={"/logoBlack.png"}
            alt="hoobank"
            className="w-[466px]  object-contain"
            width={500}
            height={100}
          />
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap  text-White">
          {Data.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className=" font-medium text-[23px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <motion.div
                variants={textContainer}
                initial="hidden"
                whileInView="show"
                className="list-none mt-4 flex flex-col"
              >
                {footerlink.links.map((link, index) => (
                  <Link
                    href={link.link}
                    key={link.name}
                    className={` font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer hover:text-BlueLight ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mb-10">
        <p className=" font-normal text-center text-[15px] lg:text-[18px] leading-[27px] text-white">
          Copyright Ⓒ {year} {ExpoName}. All Rights Reserved.
        </p>

        <div className=" flex gap-5 mt-10 text-xl text-White">
          {SocialLinks.map((socila, index) => (
            <div key={index} className=" cursor-pointer hover:text-BlueLight">
              {socila.Icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
