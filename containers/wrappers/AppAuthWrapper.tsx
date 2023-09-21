"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { MenuItems } from "@/types/dashboard";
import { AppSidebar } from "@/components";
import { ExhibitorPortalContext } from "@/context";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Badge } from "@mui/material";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";

type Props = {
  children: ReactNode;
  menuItems: MenuItems[];
  notifications?: boolean;
};

const AppAuthWrapper: FC<Props> = ({ children, menuItems, notifications }) => {
  const { currentUser, notification } = useExhibitorPortalContext();
  const [MenuItem, setMenuItem] = useState<MenuItems[]>([]);
  useEffect(() => {
    if (notifications) {
      const note = notification.filter(
        (item) => item.destionation == currentUser.id && item.seen == false
      ).length;
      setMenuItem([
        ...menuItems,
        {
          name: "Notification",
          Icon: (
            <Badge badgeContent={note} color="primary">
              <IoNotificationsCircleOutline className=" text-3xl text-BlueLighter" />
            </Badge>
          ),
          path: "/exhibitor-portal/notification",
        },
      ]);
    } else {
      setMenuItem([...menuItems]);
    }
  }, [notification]);

  return (
    <div className=" ">
      <AppSidebar menuItems={MenuItem} />
      <div className="">{children}</div>
    </div>
  );
};

export default AppAuthWrapper;
