// Header.jsx
import React from "react";
import { Search } from "lucide-react";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { useApp } from "../context/AppContext";

export const Header = () => {
  const { user } = useApp();
  if (!user) return null;

  return (
    <header className="bg-white shadow-sm px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-[#F4F7FE] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4318FF] w-64 transition-all"
          />
        </div>
        <div className="flex items-center space-x-6">
          <NotificationsDropdown />
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full ring-2 ring-[#4318FF]/20"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
