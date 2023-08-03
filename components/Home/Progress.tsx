import { CircularProgress } from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "@/utils/motion";
import { Pargraph } from "..";

type Props = {
  process: boolean;
  message: string;
};

const Progress: React.FC<Props> = ({ process, message }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      {process ? (
        <motion.div
          variants={ZoomIn(0, 0.7)}
          initial="hidden"
          whileInView="show"
          className=" flex flex-col justify-center items-center gap-2"
        >
          <AiFillCheckCircle className=" text-BlueLight text-7xl transition-all duration-500 ease-in-out" />
          <Pargraph lable={message} />
        </motion.div>
      ) : (
        <CircularProgress
          sx={{
            color: "#0878ab",
          }}
        />
      )}
    </div>
  );
};

export default Progress;
