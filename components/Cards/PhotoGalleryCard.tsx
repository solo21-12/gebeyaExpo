"use client";
import React, { useState } from "react";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FadeIn } from "@/utils/motion";
type Props = {
  index: number;
  photo: string;
};

export default function PhotoGalleryCard({ index, photo }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEvent = (val: boolean) => {
    setIsHovered(val);
  };

  const handleCLick = () => {
    router.push("/photoGallery");
  };

  return (
    <motion.div
      variants={FadeIn("left", "spring", index * 0.5, 0.75)}
      className="relative  min-w-[240px] lg:min-w-[301px] h-[320px]  lg:h-[447px]  cursor-pointer rounded-md"
      onMouseEnter={() => handleMouseEvent(true)}
      onMouseLeave={() => handleMouseEvent(false)}
      onClick={handleCLick}
    >
      <img
        key={index}
        src={photo}
        alt="photo gallery image"
        className="w-full h-full rounded-md object-cover opacity-100 transition-opacity duration-500"
      />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-md">
          <FiInstagram size={40} color="white" />
        </div>
      )}
    </motion.div>
  );
}
