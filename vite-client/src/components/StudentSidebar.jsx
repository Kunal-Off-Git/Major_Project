import React from "react";
import {
  Home,
  BookOpen,
  Edit,
  Calendar,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/StudentSidebar.css";

const StudentSidebar = () => {
  const location = useLocation();
  const menuItems = [
    {
      icon: <Home size={20} />,
      label: "Dashboard",
      path: "/",
    },

    {
      icon: <BookOpen size={20} />,
      label: "Courses",
      path: "/courses",
    },

    {
      icon: <Edit size={20} />,
      label: "EditProfile",
      path: "/EditProfile",
    },
    {
      icon: <Calendar size={20} />,
      label: "Schedule",
      path: "/schedule",
    },

    {
      icon: <LogOut size={20} />,
      label: "LogOut",
      path: "/LogOut",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Student Portal</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`sidebar-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default StudentSidebar;
