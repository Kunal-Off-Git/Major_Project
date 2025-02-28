// ResourceManager.jsx
import React, { useState } from "react";
import { getFileIcon } from "../../utils/fileicon.tsx";
import {
  File,
  FileText,
  Video,
  Image,
  Link,
  Upload,
  FolderPlus,
  Search,
  Grid,
  List,
  MoreVertical,
} from "lucide-react";

const mockResources = [
  {
    id: "1",
    name: "Course Introduction.pdf",
    type: "document",
    size: "2.4 MB",
    url: "#",
    createdAt: "2024-02-10T10:00:00Z",
  },
  {
    id: "2",
    name: "Lecture 1 Recording.mp4",
    type: "video",
    size: "156 MB",
    url: "#",
    createdAt: "2024-02-11T14:30:00Z",
    thumbnail:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=200&h=120&fit=crop",
  },
];

export const ResourceManager = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Resource Library
        </h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#868CFF]">
            <Upload className="w-5 h-5 mr-2" /> Upload Files
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <FolderPlus className="w-5 h-5 mr-2" /> New Folder
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4318FF]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockResources.map((resource) => (
                <div
                  key={resource.id}
                  className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  {resource.thumbnail ? (
                    <div className="aspect-video mb-3">
                      <img
                        src={resource.thumbnail}
                        alt={resource.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video mb-3 flex items-center justify-center bg-gray-200 rounded-lg">
                      {getFileIcon(resource.type)}
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {resource.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {resource.size} •{" "}
                        {new Date(resource.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Size</th>
                  <th className="px-6 py-3">Created</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockResources.map((resource) => (
                  <tr key={resource.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {getFileIcon(resource.type)}
                        <span className="ml-2 text-sm text-gray-900">
                          {resource.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 capitalize">
                      {resource.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {resource.size}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(resource.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button>
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
