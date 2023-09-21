import { TextVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

type Props = { lable: string; className?: string };

export default function Header({ lable, className }: Props) {
  return (
    <motion.h1
      variants={TextVariant(0.4)}
      className={` text-3xl lg:text-5xl max-w-lg font-semibold capitalize ${
        className ? className : "text-BlueDark"
      }`}
    >
      {lable}
    </motion.h1>
  );
}
