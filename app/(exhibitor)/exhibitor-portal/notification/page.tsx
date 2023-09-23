"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress, Menu, MenuItem } from "@mui/material";
import { useExhibitorPortalContext } from "@/context/ExhibitorPortalContext";
import { AppMenuItemContent, AppNotificationItem } from "@/components";
import { Notification } from "@/types/exhibitor";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Page = () => {
  const { notification, currentUser, setNotification, setCurrentUser } =
    useExhibitorPortalContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentNotification, setCurrentNotification] =
    useState<Notification | null>(null);

  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    notification: Notification
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentNotification(notification);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id: string | number | undefined) => {
    const updatedNotifications = notification.filter((n) => n.id !== id);
    setNotification(updatedNotifications);
    handleClose();
    if (updatedNotifications.length === 0) {
      setCurrentUser((prevUser) => ({
        ...prevUser,
        notificationCount: 0,
      }));
    }
  };

  const handleMarkAsRead = (id: string | number | undefined) => {
    const updatedNotifications = notification.map((n) =>
      n.id === id ? { ...n, seen: true } : n
    );
    setNotification(updatedNotifications);
    handleClose();
  };

  const handleMarkAsUnRead = (id: string | number | undefined) => {
    const updatedNotifications = notification.map((n) =>
      n.id === id ? { ...n, seen: false } : n
    );
    setNotification(updatedNotifications);
    handleClose();
  };

  const navigateToNotificationPage = (notificationId: string | number) => {
    router.push(`/exhibitor-portal/notification/${notificationId}`);
  };

  const handleRouter = (currentNotification: Notification) => {
    const { id, seen } = currentNotification;

    // Navigate to the notification page
    navigateToNotificationPage(id);

    if (!seen) {
      // Find the current notification in the array
      const updatedNotificationIndex = notification.findIndex(
        (item) => item.id === id
      );

      if (updatedNotificationIndex !== -1) {
        // Create a new array with the updated notification
        const updatedNotifications = [
          ...notification.slice(0, updatedNotificationIndex),
          { ...currentNotification, seen: true },
          ...notification.slice(updatedNotificationIndex + 1),
        ];

        // Update the notification state
        setNotification(updatedNotifications);
      }
    }
  };

  return (
    <div className="xs:ml-[130px] md:ml-[290px]">
      <div>
        {currentUser.notificationCount > 0 ? (
          notification.length > 0 ? (
            <div className="mt-32 h-[80vh] border-l-2 border-l-BlueLighter overflow-y-auto flex flex-col gap-2">
              {notification.map((item) => (
                <AppNotificationItem
                  notification={item}
                  openModal={handleClick}
                  handleRouter={handleRouter}
                  key={item.id}
                />
              ))}
            </div>
          ) : (
            <div className="h-screen flex flex-col justify-center items-center">
              <CircularProgress />
            </div>
          )
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[45%] w-[90%] md:w-[75%] mx-auto border-dashed border-2 h-[50vh] p-10 flex flex-col items-center justify-center">
              <h3 className="text-base lg:text-2xl text-gray-400 font-bold">
                You don't have any notifications yet
              </h3>
            </div>
          </div>
        )}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleDelete(currentNotification?.id)}>
          <AppMenuItemContent
            icon={<RiDeleteBin6Line className="text-2xl text-red-500" />}
            title="Delete"
            description="Delete this notification"
          />
        </MenuItem>
        {currentNotification && (
          <MenuItem
            onClick={
              currentNotification.seen
                ? () => handleMarkAsUnRead(currentNotification.id)
                : () => handleMarkAsRead(currentNotification.id)
            }
          >
            <AppMenuItemContent
              icon={
                currentNotification.seen ? (
                  <AiOutlineEyeInvisible className="text-2xl text-BlueLighter" />
                ) : (
                  <AiOutlineEye className="text-2xl text-BlueLighter" />
                )
              }
              title={
                currentNotification.seen ? "Mark as unread" : "Mark as read"
              }
              description={
                currentNotification.seen
                  ? "Mark this notification as unseen"
                  : "Mark this notification as seen"
              }
            />
          </MenuItem>
        )}
      </Menu>
      ;
    </div>
  );
};

export default Page;
