// CourseUploadPage.jsx
import React from "react";
import { CourseUploader } from "../components/CourseManagement/CourseUploader";
import { Card } from "../components/ui/Card";

export const CourseUploadPage = () => {
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
