// StudentProgressTracker.jsx
import React from "react";
import { TrendingUp, Clock, BookOpen, CheckCircle } from "lucide-react";
// import { Card } from "../ui/Card";
import { Card } from "react-bootstrap";

const mockStudents = [
  {
    id: "1",
    name: "Basics of Web Development",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop",
    progress: 50,
    completedModules: 6,
    totalModules: 8,
    lastAccessed: "2024-02-19T10:00:00Z",
    timeSpent: 12234,
  },
  {
    id: "1",
    name: "Advanced Web Development using MERN stack",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop",
    progress: 0,
    completedModules: 0,
    totalModules: 12,
    lastAccessed: "2024-02-19T10:00:00Z",
    timeSpent: 0,
  },
  {
    id: "1",
    name: "Complete DSA using C++",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop",
    progress: 30,
    completedModules: 6,
    totalModules: 8,
    lastAccessed: "2024-02-19T10:00:00Z",
    timeSpent: 11334,
  },
];

export const ProgressTracker = () => {
  return (
    <Card className="container my-4 p-4">
      <div>
        <h2 className="h4 fw-semibold text-dark"></h2>
        <div className="row mt-3">
          {mockStudents.map((student) => (
            <div
              key={student.id}
              className="bg-light rounded  mb-3 course-progress-card"
            >
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center">
                  {/* <img
                    src={student.avatar}
                    alt={student.name}
                    className="rounded-circle me-3"
                    style={{ width: "48px", height: "48px" }}
                  /> */}
                  <div>
                    <h3 className="h5 font-weight-bold text-dark">
                      {student.name}
                    </h3>
                    <div className="d-flex gap-3 mt-1 text-muted">
                      <div className="d-flex align-items-center">
                        <BookOpen className="me-1" size={16} />
                        {student.completedModules}/{student.totalModules}{" "}
                        modules
                      </div>
                      <div className="d-flex align-items-center">
                        <Clock className="me-1" size={16} />
                        {Math.round(student.timeSpent / 60)} mins
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <div className="d-flex align-items-center fw-medium text-dark">
                    <TrendingUp className="me-1 text-success" size={16} />
                    {student.progress}% Complete
                  </div>
                  <p className="small text-muted mt-1">
                    Last accessed{" "}
                    {new Date(student.lastAccessed).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-3 row g-3">
                <div className="col-md-6">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <CheckCircle className="me-2 text-success" size={20} />
                        <span className="fw-medium">Completed Modules</span>
                      </div>
                      <span className="fs-4 fw-bold text-dark">
                        {student.completedModules}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <Clock className="me-2 text-primary" size={20} />
                        <span className="fw-medium">Time Spent</span>
                      </div>
                      <span className="fs-4 fw-bold text-dark">
                        {Math.round(student.timeSpent / 60)}m
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const ProgressTracker2 = () => {
  return (
    <Card className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Student Progress
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {mockStudents.map((student) => (
            <div key={student.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {student.name}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {student.completedModules}/{student.totalModules}{" "}
                        modules
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {Math.round(student.timeSpent / 60)} mins
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm font-medium text-gray-900">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                    {student.progress}% Complete
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Last accessed{" "}
                    {new Date(student.lastAccessed).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#4318FF] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Completed Modules
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      {student.completedModules}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="text-sm font-medium text-gray-900">
                        Time Spent
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      {Math.round(student.timeSpent / 60)}m
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
