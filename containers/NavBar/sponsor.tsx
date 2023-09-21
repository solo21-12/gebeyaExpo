import { motion } from "framer-motion";
import React from "react";

import { OfficeData, SocialLinks } from "@/constants/homepage";
import { NavVariants } from "@/utils/motion";

type Props = {
  isOpen: boolean;
};

export default function Sponsor({ isOpen }: Props) {
  const { Data } = OfficeData;
  
  return (
    <div>
      {isOpen && (
        <motion.div
          variants={NavVariants}
          initial="hidden"
          whileInView="show"
          className=" flex flex-col md:flex-row justify-between mt-48 md:mt-20 px-5 text-White"
        >
          <div className=" md:w-[50%] leading-6">
            <h3 className=" text-2xl font-bold">Our Officess</h3>
            <div className=" flex justify-between mt-5">
              {Data.map((office, index) => (
                <div key={index}>
                  <h4 className=" text-base font-semibold ">
                    Office {index + 1}
                  </h4>
                  <p className=" text-sm font-thin">{office.location}</p>
                  {office.phone.map((num, i) => (
                    <p className=" text-sm font-thin" key={i}>
                      {num}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className=" text-xl">Follow us</h3>
            <div className=" flex gap-5 mt-10 text-xl">
              {SocialLinks.map((socila, index) => (
                <div
                  key={index}
                  className=" cursor-pointer hover:text-BlueLight"
                >
                  {socila.Icon}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
