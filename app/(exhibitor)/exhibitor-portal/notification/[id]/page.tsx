"use client";
import React, { useEffect, useState } from "react";
import { Notification } from "@/types/exhibitor";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { CircularProgress } from "@mui/material";

type Props = {
  params: {
    id: number;
  };
};

const page = ({ params: { id } }: Props) => {
  const [currentNotificatin, setCurrentNotificatin] =
    useState<Notification | null>();
  const { notification } = useExhibitorPortalContext();

  useEffect(() => {
    if (id) {
      const newNotefication = notification.filter((item) => item.id == id);
      setCurrentNotificatin(newNotefication[0]);
    }
  }, []);

  return (
    <div className=" xs:ml-[130px]  md:ml-[290px] h-screen  flex flex-col justify-center items-center">
      <div className="">
        {currentNotificatin ? (
          <div className=" mt-32 h-[80vh]  w-[80vw] lg:w-[50vw] mx-auto border-dashed border-2  overflow-y-auto flex flex-col gap-5">
            <h3 className=" text-base lg:text-4xl font-bold text-BlueDark text-center py-5 ">
              {currentNotificatin.title}
            </h3>
            <p className=" text-sm lg:text-base text-gray-600 font-medium px-10 text-center">
              {currentNotificatin.description}
            </p>
          </div>
        ) : (
          <div className=" h-screen flex flex-col justify-center items-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
