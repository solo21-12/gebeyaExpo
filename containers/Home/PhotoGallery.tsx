"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AppButtonDefult,
  Header,
  Pargraph,
  PhotoGalleryCard,
} from "@/components";
import { PhotoGalleryData } from "@/constants/homepage";
import { useRouter } from "next/navigation";

type Props = {};

export default function PhotoGallery({}: Props) {
  const router = useRouter();
  return (
    <section id="photGallery">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mb-20 lg:mb-0 lg:h-[80vh] w-[85%] mx-auto lg:items-center flex flex-col lg:flex-row gap-10 lg:justify-between"
      >
        <div className=" flex flex-col gap-4  lg:gap-5">
          <Header lable="Photo Gallery" />
          <Pargraph
            lable="
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste sint eum dolores explicabo error, perspiciatis ipsa ea id tenetur fuga natus ipsum molestiae rerum voluptas nam ducimus quo in sapiente!
            "
          />
          <AppButtonDefult
            label="Show More"
            handleAction={() => router.push("/photoGallery")}
            conditionalClass=" w-1/2"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" flex  gap-5 overflow-x-scroll"
        >
          {PhotoGalleryData.map((photo, index) => (
            <PhotoGalleryCard index={index} photo={photo}  key={index}/>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
