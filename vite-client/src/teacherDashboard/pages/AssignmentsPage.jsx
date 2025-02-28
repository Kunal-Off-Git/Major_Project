// AssignmentsPage.jsx
import React from "react";
import { Plus, Clock } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Mathematics Quiz - Algebra",
    dueDate: "2024-02-15",
    subject: "Mathematics",
    status: "Active",
    submitted: 24,
    total: 30,
  },
];

export const AssignmentsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Assignments</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5 mr-2" /> Create Assignment
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {assignment.subject}
                  </p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {assignment.status}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" /> Due: {assignment.dueDate}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Submission Progress</span>
                    <span>
                      {assignment.submitted}/{assignment.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${
                          (assignment.submitted / assignment.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-2">
                <button className="flex-1 px-4 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  View Details
                </button>
                <button className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
                  Grade
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
