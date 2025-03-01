import React, { useState } from "react";
import {
  Award,
  GraduationCap,
  BookOpen,
  CheckCircle,
  Bell,
} from "lucide-react";
import StudentSidebar from "./StudentSidebar"; // Import the StudentSidebar component
import "../assets/css/StudentDashboard.css"; // Imported the CSS file

const StudentDashboard = () => {
  const [currentDate] = useState(new Date());

  // Define statistics
  const stats = [
    {
      value: "6",
      label: "Total Enrolled",
      icon: <BookOpen size={40} className="text-blue-600" />,
    },
    {
      label: "Completed Courses",
      value: "2",
      icon: <CheckCircle size={40} className="text-green-600" />,
    },
    {
      label: "In Progress",
      value: "4",
      icon: <GraduationCap size={40} className="text-orange-600" />,
    },
    {
      label: "Certificates Earned",
      value: "3",
      icon: <Award size={40} className="text-purple-600" />,
    },
  ];

  const courses = [
    {
      name: "Mathematics 101",
      progress: 75,
      assignments: 3,
      status: "in-progress",
    },
    {
      name: "Computer Science",
      progress: 60,
      assignments: 2,
      status: "in-progress",
    },
    {
      name: "History",
      progress: 100,
      assignments: 0,
      status: "completed",
    },
    {
      name: "Physics",
      progress: 45,
      assignments: 4,
      status: "in-progress",
    },
  ];

  // Mock Data for Certificates and Deadlines (Replace with real data)
  const certificates = [
    {
      name: "React Developer Certificate",
      issueDate: "Jan 2024",
      credential: "CERT12345",
    },
    {
      name: "Advanced JavaScript",
      issueDate: "Feb 2024",
      credential: "CERT67890",
    },
  ];

  const upcomingDeadlines = [
    {
      task: "Submit AI Assignment",
      course: "Machine Learning",
      due: "2 days",
    },
    {
      task: "React Project Deadline",
      course: "Frontend Development",
      due: "5 days",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="navbar-content">
          <h2 className="navbar-title">Dashboard</h2>
          <div className="navbar-actions">
            <form className="search-form">
              <input type="text" placeholder="Search..." className="search-input" />
            </form>
            <button className="notification-button">
              <Bell size={20} className="notification-icon" />
              <span className="notification-badge"></span>
            </button>
            <div className="profile-container">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Student profile"
                className="profile-image"
              />
              <span className="profile-name">Nimit Aggarwal</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
        {/* Left Sidebar */}
        <StudentSidebar />

        {/* Right Content Area */}
        <div className="main-content">
          {/* Stats Section */}
          <div className="stats-container border rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Your Statistics</h3>
            <div className="stats-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cd">
                  {stat.icon}
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{stat.label}</h3>
                    <p className="text-2xl font-bold text-gray-700">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid-grid">
            <div className="lg:col-span-2">
              {/* Courses Section */}
              <div className="card-p-6">
                <h3 className="text-lg-font-semibold-mb-4">Your Courses</h3>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div
                      key={course.name}
                      className="border rounded-lg p-4 transition-standard hover:border-primary-500"
                    >
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <h4 className="font-medium">{course.name}</h4>
                          {course.status === "completed" && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                              Completed
                            </span>
                          )}
                        </div>
                        <span className="text-gray-500">
                          {course.assignments} assignments due
                        </span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className={`progress-bar-fill ${course.status === "completed" ? "bg-green-500" : "progress-bar-gradient"}`}
                          style={{
                            width: `${course.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates Section */}
              <div className="card p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Certificates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.credential}
                      className="border rounded-lg p-4 hover:border-purple-500 transition-standard"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-gray-800">{cert.name}</h4>
                          <p className="text-sm text-gray-500">Issued: {cert.issueDate}</p>
                          <p className="text-xs text-gray-400 mt-1">ID: {cert.credential}</p>
                        </div>
                        <Award size={24} className="text-purple-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines Section */}
              <div className="card p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline) => (
                    <div
                      key={deadline.task}
                      className="border-b pb-4 last:border-b-0 transition-standard hover:bg-gray-50 -mx-6 px-6"
                    >
                      <h4 className="font-medium">{deadline.task}</h4>
                      <p className="text-gray-500">{deadline.course}</p>
                      <p className="text-red-500">Due in {deadline.due}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>  
        </div> 
      </div>
    </div>
  );
};

export default StudentDashboard;
