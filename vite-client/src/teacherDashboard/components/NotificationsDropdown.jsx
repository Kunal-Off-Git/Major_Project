// NotificationsDropdown.jsx
import React, { useState } from "react";
import { Bell } from "lucide-react";
import { useApp } from "../context/AppContext";

export const NotificationsDropdown = () => {
  const { notifications, unreadNotifications, markNotificationAsRead } =
    useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="relative group">
        <Bell className="w-6 h-6 text-gray-600 group-hover:text-[#4318FF] transition-colors" />
        {unreadNotifications > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {unreadNotifications}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Notifications
            </h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? "bg-blue-50" : ""
                  }`}
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  <p className="text-sm font-medium text-gray-800">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(notification.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="text-sm text-[#4318FF] hover:text-[#868CFF] transition-colors w-full text-center">
              View All Notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
