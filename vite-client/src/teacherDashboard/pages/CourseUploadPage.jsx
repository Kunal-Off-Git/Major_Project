// CourseUploadPage.jsx
import React from "react";
import { CourseUploader } from "../components/CourseManagement/CourseUploader";
// import { Card } from "../components/ui/Card";
import { Card } from "react-bootstrap";

export const CourseUploadPage2 = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Course Upload</h1>
      <CourseUploader />
      <Card>
        <h2 className="text-xl font-semibold mb-4">Recently Uploaded</h2>
        <div className="space-y-4">{/* Add list of recent uploads */}</div>
      </Card>
    </div>
  );
};

export const CourseUploadPage = () => {
  return (
    <div className="container py-4">
      <h1 className="fw-bold text-dark mb-4">Course Upload</h1>
      <CourseUploader />

      <Card className="mt-4 shadow-sm">
        <Card.Body>
          <h2 className="fw-semibold text-dark mb-3">Recently Uploaded</h2>
          <div>{/* Add list of recent uploads */}</div>
        </Card.Body>
      </Card>
    </div>
  );
};
