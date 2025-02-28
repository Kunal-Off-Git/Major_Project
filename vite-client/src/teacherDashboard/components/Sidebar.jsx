// Sidebar.jsx
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
  Upload,
  BookOpenCheck,
  GraduationCap,
} from "lucide-react";
import { useApp } from "../context/AppContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Users, label: "Students", path: "students" },
  { icon: CalendarDays, label: "Schedule", path: "schedule" },
  { icon: BookOpen, label: "Assignments", path: "assignments" },
  { icon: Upload, label: "Course Upload", path: "course-upload" },
  { icon: BookOpenCheck, label: "Student Progress", path: "student-progress" },
  { icon: GraduationCap, label: "Resources", path: "resources" },
  { icon: MessageSquare, label: "Messages", path: "messages" },
  { icon: Settings, label: "Settings", path: "settings" },
];

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useApp();

  const handleSignOut = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="w-64 h-full bg-gradient-to-b from-[#4318FF] to-[#868CFF] flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">TeacherHub</h1>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={`/teacherDashboard/${item.path}`}
            className={`flex items-center px-4 py-3 rounded-xl text-sm transition-all duration-200 
              ${
                location.pathname === `/teacherDashboard/${item.path}`
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <button
          onClick={handleSignOut}
          className="flex items-center px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl w-full transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};
