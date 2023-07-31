import { motion } from "framer-motion";
import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTelegram,
  BsInstagram,
} from "react-icons/bs";
type Props = {
  isOpen: boolean;
};

export default function Sponsor({ isOpen }: Props) {
  const socialLinks = [
    {
      Icon: <BsFacebook />,
      path: "/",
    },
    {
      Icon: <BsInstagram />,
      path: "/",
    },
    {
      Icon: <BsLinkedin />,
      path: "/",
    },
    {
      Icon: <BsTelegram />,
      path: "/",
    },
  ];

  return (
    <div>
      {isOpen && (
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
          className=" flex flex-col md:flex-row justify-between mt-48 md:mt-20 px-10 text-White"
        >
          <div className=" md:w-[50%] leading-6">
            <h3 className=" text-2xl font-bold">Our Officess</h3>
            <div className=" flex justify-between mt-5">
              <div>
                <h4 className=" text-base font-semibold ">Office One</h4>
                <p className=" text-sm font-thin">Bole Rwanda,Addis Ababa</p>
                <p className=" text-sm font-thin">+2512345678</p>
              </div>
              <div>
                <h4 className=" text-base font-semibold ">Office Two</h4>
                <p className=" text-sm font-thin">Bole Rwanda,Addis Ababa</p>
                <p className=" text-sm font-thin">+2512345678</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className=" text-xl">Follow us</h3>
            <div className=" flex gap-5 mt-10 text-xl">
              {socialLinks.map((socila, index) => (
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
