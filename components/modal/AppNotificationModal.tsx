// NotificationModal.tsx
import React from "react";
import Modal from "react-modal";
import { Notification } from "@/types/exhibitor";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notification: Notification | null;
  onDelete: () => void;
  onMarkAsRead: () => void;
  onMarkAsUnread: () => void;
}

const AppNotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  notification,
  onDelete,
  onMarkAsRead,
  onMarkAsUnread,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notification Options"
      className="modal"
      overlayClassName="modal-overlay"
    >
      {notification && (
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{notification.title}</h2>
          <p className="text-gray-600 mb-4">{notification.description}</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={notification.seen ? onMarkAsUnread : onMarkAsRead}
          >
            {notification.seen ? "Mark as Unread" : "Mark as Read"}
          </button>
        </div>
      )}
    </Modal>
  );
};

export default AppNotificationModal;
