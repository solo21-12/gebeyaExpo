// NotificationItem.tsx
import React from "react";
import { AppNotification } from "@/components";
import { Notification } from "@/types/exhibitor";

interface NotificationItemProps {
  notification: Notification;
  openModal: any;
  handleRouter: (notification: Notification) => void;
}

const AppNotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  openModal,
  handleRouter,
}) => {
  return (
    <AppNotification
      notification={notification}
      key={notification.id}
      openModal={openModal}
      handleRouter={() => handleRouter(notification)}
    />
  );
};

export default AppNotificationItem;
