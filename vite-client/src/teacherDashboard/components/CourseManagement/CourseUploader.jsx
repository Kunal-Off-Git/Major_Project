// CourseUploader.jsx
import React, { useState } from "react";
import { Upload, File, Video, BookOpen, Plus, X } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const CourseUploader = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (newFiles) => {
    const newUploads = newFiles.map((file) => ({
      id: Math.random().toString(),
      file,
      type: getFileType(file),
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...newUploads]);
    simulateUpload(newUploads);
  };

  const getFileType = (file) => {
    if (file.type.startsWith("video/")) return "video";
    if (file.type === "application/pdf") return "document";
    return "note";
  };

  const simulateUpload = (newUploads) => {
    newUploads.forEach((upload) => {
      const interval = setInterval(() => {
        setFiles((prev) =>
          prev.map((file) =>
            file.id === upload.id
              ? { ...file, progress: Math.min(file.progress + 10, 100) }
              : file
          )
        );
      }, 500);
      setTimeout(() => clearInterval(interval), 5000);
    });
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? "border-[#4318FF] bg-[#4318FF]/5" : "border-gray-200"
          }`}
        >
          <Upload className="w-10 h-10 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 mb-2">
            Drag and drop your files here, or{" "}
            <label className="text-[#4318FF] hover:text-[#868CFF] cursor-pointer">
              browse
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileInput}
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Supports videos, PDFs, and documents
          </p>
        </div>
      </div>
    </Card>
  );
};
