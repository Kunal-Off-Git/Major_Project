// StudentProgressPage.jsx
import React from "react";
// import { Card } from "../components/ui/Card";
import { Card } from "react-bootstrap";
import { ProgressTracker } from "./ProgressTracker";

export const ProgressPage = () => {
  return (
    <div className="container py-4">
      <h1 className="fw-bold text-dark mb-4">Your Courses</h1>
      <ProgressTracker />

      {/* <div className="row g-4 mt-4">
        <div className="col-md-6">
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="fw-semibold mb-3">Class Performance</h2>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="fw-semibold mb-3">Attendance Overview</h2>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export const StudentProgressPage2 = () => {
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
