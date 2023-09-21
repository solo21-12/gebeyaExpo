"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { NavList } from "@/constants/navbarlist";
import { Options } from "@/types/navbarlist";
import { motion, AnimatePresence } from "framer-motion";
import { NavVariants } from "@/utils/motion";

type Props = {
  isOpen: boolean;
  menuOptions: Options[];
  handleClick: (index: number) => void;
  selectedElement: string;
  active: number;
  setIsOpen: (val: boolean) => void;
};

export default function AppDesktopNavMenu({
  isOpen,
  active,
  handleClick,
  menuOptions,
  selectedElement,
  setIsOpen,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="  justify-between hidden md:flex">
          <motion.div
            variants={NavVariants}
            initial="hidden"
            whileInView="show"
            exit="exit"
            className="  flex flex-col  list-none text-White  justify-between mb-8 sm:mb-0 sm:border-l-2 border-b-2 sm:border-b-0 border-White  h-[30vh]  mt-10"
          >
            {NavList.map((list, index) => (
              <li
                key={index}
                className={`cursor-pointer  hover:border-b-2 hover:border-b-BlueLight text-xl p-3 items-center rounded-sm sm:pl-5  ${
                  active == index
                    ? " bg-BlueLighter/80 text-BlueLight border-b-BlueLight  border-b-2 "
                    : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {list.lable}
              </li>
            ))}
          </motion.div>

          {menuOptions.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                x: -200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                y: -200,
              }}
              transition={{
                duration: 1,
              }}
              className=" mt-10"
            >
              <h1 className=" text-2xl xl:text-4xl text-White">
                {selectedElement}
              </h1>
              <div className="  flex flex-col gap-5  list-none text-White mb-8 sm:mb-0  mt-10">
                <AnimatePresence initial={false}>
                  {menuOptions.map((option, index) => (
                    <div>
                      <Link
                        className={`cursor-pointer hover:border-b-2 hover:border-b-BlueLight text-lg p-3 items-center rounded-sm sm:pl-5 transition-all duration-100  `}
                        href={option.path}
                        key={index + 100}
                        onClick={() => setIsOpen(false)}
                      >
                        {option.lable}
                      </Link>
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
