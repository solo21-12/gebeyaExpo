"use client";

import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { NavList } from "@/constants/navbarlist";
import { Options } from "@/types/navbarlist";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  menuOptions: Options[];
  handleClick: (index: number) => void;
  selectedElement: string;
  active: number;
};

export default function AppMobileNavMenu({
  isOpen,
  menuOptions,
  handleClick,
  selectedElement,
  active,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className=" pl-10 md:hidden block">
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
            }}
            transition={{
              duration: 1,
            }}
            className="  flex flex-col  list-none text-White  justify-between mb-8 sm:mb-0 md:border-l-2  md:border-b-0 md:border-White  h-[30vh]  mt-10 pb-5"
          >
            {NavList.map((list, index) => (
              <div key={index}>
                <li
                  className={`cursor-pointer  hover:border-b-2 hover:border-b-BlueLight text-xl p-3 items-center rounded-sm sm:pl-5 w-[80%]  ${
                    active == index
                      ? " bg-BlueLighter/80 text-BlueLight border-b-BlueLight  border-b-2 "
                      : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {list.lable}
                </li>
                {menuOptions.length > 0 && selectedElement == list.lable && (
                  <div className="  flex flex-col gap-5  list-none text-White mb-8 sm:mb-0  md:mt-10 mt-5 pl-16">
                    <AnimatePresence initial={false}>
                      {menuOptions.map((option, index) => (
                        <motion.div
                          key={option.lable}
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Link
                            className={`cursor-pointer hover:border-b-2 hover:border-b-BlueLight text-base items-center rounded-sm    `}
                            href={option.path}
                          >
                            {option.lable}
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
