// StudentProgressPage.jsx
import React from "react";
import { StudentProgressTracker } from "../components/CourseManagement/StudentProgressTracker";
import { Card } from "../components/ui/Card";

export const StudentProgressPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Student Progress</h1>
      <StudentProgressTracker />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-4">Class Performance</h2>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
        </Card>
      </div>
    </div>
  );
};
