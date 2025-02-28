import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Courses from "./components/Courses.jsx";
import Register from "./components/Register.jsx";
import "./App.css";
import Chatbot from "./components/Chatbot.jsx";
import CourseDetails from "./components/CourseDetails.jsx";
import Video from "./components/Video.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { DashboardLayout } from "./teacherDashboard/components/DashboardLayout.jsx";
import { DashboardContent } from "./teacherDashboard/components/DashboardContent.jsx";
import { StudentsPage } from "./teacherDashboard/pages/StudentsPage.jsx";
import { AssignmentsPage } from "./teacherDashboard/pages/AssignmentsPage.jsx";
import { SchedulePage } from "./teacherDashboard/pages/SchedulePage.jsx";
import { MessagesPage } from "./teacherDashboard/pages/MessagesPage.jsx";
import { SettingsPage } from "./teacherDashboard/pages/SettingsPage.jsx";
import { CourseUploadPage } from "./teacherDashboard/pages/CourseUploadPage.jsx";
import { StudentProgressPage } from "./teacherDashboard/pages/StudentProgressPage.jsx";
import { ResourcesPage } from "./teacherDashboard/pages/ResourcesPage.jsx";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teacherDashboard/*" element={<DashboardLayout />}>
            <Route index element={<DashboardContent />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="assignments" element={<AssignmentsPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="course-upload" element={<CourseUploadPage />} />
            <Route path="student-progress" element={<StudentProgressPage />} />
            <Route path="resources" element={<ResourcesPage />} />
          </Route>
        </Routes>
      </main>
      <Chatbot />
      {/* <Footer /> */}
    </>
  );
}

export default App;
