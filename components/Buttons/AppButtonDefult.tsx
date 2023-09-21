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
      variants={ZoomIn(0, 0.4)}
      className={` bg-BlueLighter hover:bg-BlueLighter/90 rounded-lg text-White  px-2 xl:px-7 py-3 mt-4 text-xs ${conditionalClass}`}
      onClick={handleAction}
    >
      {label}
    </motion.button>
  );
}
