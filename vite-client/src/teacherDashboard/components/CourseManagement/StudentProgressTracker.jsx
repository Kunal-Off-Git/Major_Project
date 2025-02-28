// StudentProgressTracker.jsx
import React from "react";
import { TrendingUp, Clock, BookOpen, CheckCircle } from "lucide-react";
import { Card } from "../ui/Card";

const mockStudents = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop",
    progress: 75,
    completedModules: 6,
    totalModules: 8,
    lastAccessed: "2024-02-19T10:00:00Z",
    timeSpent: 1234,
  },
];

export const StudentProgressTracker = () => {
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
