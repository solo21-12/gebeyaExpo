import { ZoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { AiFillAlert, AiFillCheckCircle } from "react-icons/ai";
import { Pargraph } from "..";

type Props = {
  error?: boolean;
  message: string;
};

const AppMessage: React.FC<Props> = ({ error, message }) => {
  return (
    <motion.div
      variants={ZoomIn(0, 0.7)}
      initial="hidden"
      whileInView="show"
      className=" flex flex-col justify-center items-center gap-2"
    >
      {error ? (
        <AiFillAlert className="  text-red-600 text-7xl transition-all duration-500 ease-in-out" />
      ) : (
        <AiFillCheckCircle className=" text-BlueLight text-7xl transition-all duration-500 ease-in-out" />
      )}
      <Pargraph
        lable={message}
        className={error ? " text-red-600 " : " text-BlueLighter"}
      />
    </motion.div>
  );
};

export default AppMessage;
