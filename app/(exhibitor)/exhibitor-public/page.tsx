"use client";

import ExhibitorsData from "@/data/temporarayData";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page: React.FC<Props> = ({}) => {
  const router = useRouter();
  return (
    <div className=" h-screen mt-40 w-[1200px] mx-auto">
      {ExhibitorsData.map((exhibitor) => (
        <div
          className=" flex flex-col gap-6 "
          key={exhibitor.id}
          onClick={() => router.push(`/exhibitor-public/${exhibitor.id}`)}
        >
          <div className="flex h-[50px] w-[500px] p-5 mb-4  bg-White/80 items-center gap-5 hover:bg-White cursor-pointer hover:scale-105 transition-transform ease-in-out duration-700 ">
            <Avatar src={exhibitor.image} className=" border-BlueDark border" />
            <p>{exhibitor.businessName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
