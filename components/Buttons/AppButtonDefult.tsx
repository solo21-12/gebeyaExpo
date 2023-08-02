import { ZoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
type Props = {
  label: string;
  handleAction: () => void;
  conditionalClass?: string;
};

export default function AppButtonDefult({
  handleAction,
  label,
  conditionalClass,
}: Props) {
  return (
    <motion.button
    variants={ZoomIn(0,0.4)}
      className={` bg-BlueLighter rounded-lg text-White px-7 py-3 mt-4 ${conditionalClass}`}
    >
      {label}
    </motion.button>
  );
}
