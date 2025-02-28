// AppContext.jsx
import React, { useEffect, useState, createContext, useContext } from "react";

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const unreadNotifications = notifications.filter((n) => !n.read).length;
  const unreadMessages = messages.filter((m) => !m.read).length;

  const markNotificationAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markMessageAsRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: true } : m))
    );
  };

  const updateUserSettings = (settings) => {
    setUser((prev) =>
      prev ? { ...prev, settings: { ...prev.settings, ...settings } } : null
    );
  };

  const logout = () => {
    setUser(null);
    setNotifications([]);
    setMessages([]);
  };

  useEffect(() => {
    setUser({
      id: "1",
      name: "Sarah Wilson",
      email: "sarah.wilson@teacherhub.com",
      role: "Mathematics Teacher",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      settings: {
        notifications: { email: true, push: true, desktop: true },
        theme: "light",
        language: "en",
        accessibility: {
          fontSize: 16,
          contrast: "normal",
          reduceMotion: false,
        },
      },
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        notifications,
        unreadNotifications,
        messages,
        unreadMessages,
        markNotificationAsRead,
        markMessageAsRead,
        updateUserSettings,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
