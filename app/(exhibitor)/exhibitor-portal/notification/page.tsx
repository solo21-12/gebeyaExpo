'use client'
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { FadeIn } from "@/utils/motion";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Notification } from "@/types/exhibitor";
import React from "react";
import { textCliper } from "@/utils";

const page = () => {
  const { notification, currentUser, setNotification } =
    useExhibitorPortalContext();
  const router = useRouter();

  const handleClick = (Currentnotification: Notification) => {
    router.push(`/exhibitor-portal/notification/${Currentnotification.id}`);
    if (!Currentnotification.seen) {
      let newNotification = notification.filter(
        (item) => item.id === Currentnotification.id
      );
      let newNotification2 = notification.filter(
        (item) => item.id !== Currentnotification.id
      );
      newNotification[0].seen = true;
      setNotification([...newNotification, ...newNotification2]);
    }
  };
  return (
    <div className=" xs:ml-[130px]  md:ml-[290px]">
      <div className="">
        {currentUser.notificationCount > 0 ? (
          notification.length > 0 ? (
            <div className=" mt-32 h-[80vh] border-l-2 border-l-BlueLighter  overflow-y-auto flex flex-col gap-5">
              {notification.map((item) => (
                <motion.div
                  variants={FadeIn("up", "", 0, 1)}
                  initial="hidden"
                  whileInView="show"
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className={` bg-BlueLighter ${
                    item.seen ? "bg-opacity-10" : "bg-opacity-30"
                  } w-[90%] md:w-[80%] xl:w-[50%] ml-5  cursor-pointer hover:translate-x-2 transition-transform transform ease-in-out duration-200 rounded-lg box-border p-5 flex flex-col gap-1`}
                >
                  <h3 className=" text-base lg:text-2xl font-bold text-BlueDark ">
                    {item.title}
                    {!item.seen && (
                      <sup className={`ml-2  bg-teal-400 px-1 rounded-sm`}>
                        New
                      </sup>
                    )}
                  </h3>
                  <p className=" text-sm lg:text-base text-gray-600 font-medium">
                    {textCliper(item.description)}
                  </p>
                  <p className=" uppercase text-xs lg:text-sm">{item.date}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className=" h-screen flex flex-col justify-center items-center">
              <CircularProgress />
            </div>
          )
        ) : (
          <div className=" flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[45%] w-[90%] md:w-[75%] mx-auto border-dashed border-2 h-[50vh] p-10 flex flex-col items-center justify-center">
              <h3 className=" text-base lg:text-2xl text-gray-400 font-bold">
                You don't have any notifications yet
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
