// DashboardLayout.jsx
import React, { Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { DashboardContent } from "./DashboardContent";
import { StudentsPage } from "../pages/StudentsPage";
import { AssignmentsPage } from "../pages/AssignmentsPage";
import { SchedulePage } from "../pages/SchedulePage";
import { SettingsPage } from "../pages/SettingsPage";
import { MessagesPage } from "../pages/MessagesPage";
import { CourseUploadPage } from "../pages/CourseUploadPage";
import { StudentProgressPage } from "../pages/StudentProgressPage";
import { ResourcesPage } from "../pages/ResourcesPage";
import { useApp } from "../context/AppContext";

const LoadingSpinner = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#4318FF] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const DashboardLayout = () => {
  // const { user } = useApp();
  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <div className="flex w-full h-screen bg-[#F8F9FD]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
            {/* <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/assignments" element={<AssignmentsPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/course-upload" element={<CourseUploadPage />} />
              <Route
                path="/student-progress"
                element={<StudentProgressPage />}
              />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes> */}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
