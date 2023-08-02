"use client";

import { VideoPopup } from "@/components";
import { VideoData } from "@/constants/homepage";
import { ZoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React, { useState } from "react";
const YourComponent: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const { videoId } = VideoData;

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <motion.div
      variants={ZoomIn(0, 1.5)}
      initial="hidden"
      whileInView="show"
      className="relative w-full h-[80vh]  mb-20"
    >
      {isPopupOpen ? (
        <VideoPopup isOpen={isPopupOpen} videoId={videoId} />
      ) : (
        <div className=" bg-BlueLighter">
          <img
            src="/video.webp"
            alt="YouTube Image"
            className="w-full  object-cover opacity-70 h-[80vh]"
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handleOpenPopup}
          >
            <div className="w-24 h-24 rounded-full border-2 border-BlueLighter bg-opacity-50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="72"
                height="72"
                fill="#0878ab"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default YourComponent;
