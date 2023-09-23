import { Notification } from "@/types/exhibitor";
import { textCliper } from "@/utils";
import { FadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

type Props = {
  notification: Notification;
  openModal: any;
  handleRouter: (notificaon: Notification) => void;

  //   onDelete: (id: number) => void;
  //   onMarkAsRead: (id: number) => void;
};

const AppNotification = ({ notification, openModal, handleRouter }: Props) => {
  return (
    <motion.div
      variants={FadeIn("up", "", 0, 1)}
      initial="hidden"
      whileInView="show"
      key={notification.id}
      onClick={() => handleRouter(notification)}
      className={` bg-BlueLighter ${
        notification.seen ? "bg-opacity-5" : "bg-opacity-30"
      } w-[90%] md:w-[80%] xl:w-[50%] ml-5  cursor-pointer hover:translate-x-2 transition-transform transform ease-in-out duration-200 rounded-lg box-border p-5 flex justify-between gap-1 `}
    >
      <div>
        <h3 className=" text-base lg:text-xl font-bold text-BlueDark ">
          {notification.title}
          {!notification.seen && (
            <sup className={`ml-2  bg-teal-400 px-1 rounded-sm`}>New</sup>
          )}
        </h3>
        <p className=" text-xs lg:text-sm text-gray-600 font-medium">
          {textCliper(notification.description)}
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <p className="text-xs lg:text-sm">{notification.date}</p>
        <div
          className="cursor-pointer text-xl hover:bg-slate-200 p-2 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            openModal(e, notification);
          }}
        >
          <TfiLayoutMenuSeparated />
        </div>
      </div>
    </motion.div>
  );
};

export default AppNotification;
