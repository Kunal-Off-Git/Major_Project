// Header.jsx
import React from "react";
import { Search } from "lucide-react";
import { NotificationsDropdown } from "./NotificationsDropdown";
// import { useApp } from "../context/AppContext";
import { Form, InputGroup, Image } from "react-bootstrap";
import { useApp } from "../teacherDashboard/context/AppContext";

export const Header = () => {
  const { user } = useApp();
  if (!user) return null;

  return (
    <header className="bg-white shadow-sm px-4 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <InputGroup className="w-50" style={{ maxWidth: "16rem" }}>
          <InputGroup.Text className="bg-light border-0">
            <Search size={16} className="text-secondary" />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="bg-light border-0 rounded-3"
          />
        </InputGroup>

        <div className="d-flex align-items-center gap-4">
          <NotificationsDropdown />
          <div className="d-flex align-items-center gap-3">
            <Image
              src={user.avatar}
              alt="Profile"
              roundedCircle
              width={40}
              height={40}
              className="border border-primary border-opacity-25"
            />
            <div>
              <p className="mb-0 fw-semibold text-dark">{user.name}</p>
              <p className="mb-0 text-muted small">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header2 = () => {
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
