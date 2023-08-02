import { TextVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
type Props = { lable: string; className?: string };
export default function Pargraph({ lable, className }: Props) {
  return (
    <motion.p
      variants={TextVariant(0.4)}
      className={` text-sm lg:text-base max-w-md font-thin ${
        className ? className : "text-BlueDark"
      }`}
    >
      {lable}
    </motion.p>
  );
}
